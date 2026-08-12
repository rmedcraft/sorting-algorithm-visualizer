import { shuffle } from "#lib/arrayUtils"
import type React from "react"
import { useEffect, useState } from "react"

function App() {
    const [algorithm, setAlgorithm] = useState<string>("Bubble Sort")

    return (
        <div className="p-5 bg-background h-screen w-screen">
            <div className={`flex flex-col border border-accent w-3/4 aspect-video bg-secondary rounded-3xl text-primary-foreground p-5`}>
                <h1 className="font-bold text-5xl">{algorithm}</h1>
                <p className="font-medium text-muted-foreground mt-1">{"im not sure what to put here yet, but this is a sample sentence to see what it looks like"}</p>
                <hr className="my-5"></hr>
                <Sorting />
            </div>
        </div>
    )
}

const Sorting: React.FC<any> = () => {
    const size = 40

    const [arr, setArr] = useState<number[]>(Array.from(Array(size).keys()))

    useEffect(() => {
        const interval = setInterval(() => {
            setArr((arr) => {
                return shuffle(arr)
            })
        }, 5000)

        return () => clearInterval(interval)
    })

    return (
        <div className="grow w-full p-5 flex flex-row gap-2 justify-between items-end">
            {arr.map((num: number, index: number) =>
                <SortingBar key={num} value={num + 1} total={size} index={index} />
            )}
        </div>
    )
}

const SortingBar: React.FC<any> = (props) => {
    const { value, total, index } = props
    const height = Math.round(value / total * 100)

    return (
        <div className={`bg-chart-4 w-10 rounded-t-sm`} style={{ height: `${height}%`, order: index }}></div>
    )
}

export default App
