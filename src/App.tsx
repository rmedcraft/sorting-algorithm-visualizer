import { Sorter } from "#lib/arrayUtils";
import type React from "react"
import { useEffect, useState } from "react"

const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


function App() {
    const size = 50
    const [algorithm,] = useState<string>("Quick Sort")
    const [arr, setArr] = useState<number[]>(Array.from(Array(size).keys()))
    const [swapIndex, setSwapIndex] = useState<number[]>([])

    const playNote = (frequency: number, duration: number) => {
        // frequency passed in is a percentage
        if (frequency > 1) {
            console.error("frequency percentage > 1. The program is trying to make you deaf")
            return
        }

        const minFrequency = 200
        const maxFrequency = 400

        const audioCtx = new (window.AudioContext)()

        const oscillator = audioCtx.createOscillator();

        // audio comes from both left and right
        const merger = audioCtx.createChannelMerger(); // Create the channel merger
        oscillator.connect(merger, 0, 0);
        oscillator.connect(merger, 0, 1);

        // please make it quieter oh my god why is the default gain so LOUD!!
        const gain = new GainNode(audioCtx)
        gain.gain.value = 0.02

        const gainEnvelope = audioCtx.createGain(); // Create the new gain
        gainEnvelope.connect(gain)

        oscillator.type = "triangle"
        oscillator.frequency.setValueAtTime(minFrequency + (frequency * (maxFrequency - minFrequency)), audioCtx.currentTime)
        oscillator.connect(gain).connect(audioCtx.destination)


        oscillator.start()
        setTimeout(() => {
            oscillator.stop()
        }, duration)
    }


    const swap = async (a: number, b: number) => {
        setArr((arr) => {
            const newArr = [...arr]
            const temp = newArr[b]
            newArr[b] = newArr[a]
            newArr[a] = temp
            return newArr
        })
        setSwapIndex([a, b])
        // playNote(Math.max(arr[a], arr[b]) / size, 100)
        await wait(100)
        setSwapIndex([])
    }

    const sorter = new Sorter(swap, size)

    useEffect(() => {
        const timeout = setTimeout(() => {
            sorter.shuffle()
        }, 1000)

        return () => clearTimeout(timeout)
    }, [])

    useEffect(() => {
        const timeout = setTimeout(() => {
            sorter.quickSort()
        }, 8000)

        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="p-5 bg-background h-screen w-screen">
            <div className={`flex flex-col border border-accent w-3/4 aspect-video bg-secondary rounded-3xl text-primary-foreground p-5`}>
                <h1 className="font-bold text-5xl">{algorithm}</h1>
                <p className="font-medium text-muted-foreground mt-1">{"im not sure what to put here yet, but this is a sample sentence to see what it looks like"}</p>
                <hr className="my-5"></hr>
                <Sorting size={size} arr={arr} swapIndex={swapIndex} />
            </div>
        </div>
    )
}

const Sorting: React.FC<any> = (props) => {
    const { arr, size, swapIndex } = props

    return (
        <div className="grow w-full p-5 flex flex-row gap-2 justify-between items-end">
            {arr.map((num: number, index: number) =>
                <SortingBar key={num} value={num + 1} total={size} index={index} swapIndex={swapIndex} />
            )}
        </div>
    )
}

const SortingBar: React.FC<any> = (props) => {
    const { value, total, index, swapIndex } = props
    const height = Math.round(value / total * 100)

    return (
        <div className={`w-10 rounded-t-sm ${swapIndex.includes(index) ? "bg-chart-1" : "bg-chart-4"}`} style={{ height: `${height}%`, order: index }}></div>
    )
}

export default App
