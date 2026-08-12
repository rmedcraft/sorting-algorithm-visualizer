/**
 * in react, you can set up useState with arrays, but it treats all arrays as immutable. 
 * all of these functions will return a new array instead of altering the array in place.  
 * */

export class Sorter {
    private visualSwap: (a: number, b: number) => Promise<void>
    private arr: number[]

    constructor(visualSwap: (a: number, b: number) => Promise<void>, size: number) {
        this.visualSwap = visualSwap

        this.arr = Array.from(Array(size).keys())
    }

    private async swap(a: number, b: number) {
        console.log(`swapping ${a} and ${b}`)
        if (a >= this.arr.length || b >= this.arr.length) {
            throw new Error(`Index out of bounds. Tried to swap indexes ${a} and ${b}, but indices only go up to ${this.arr.length - 1}`);
        }

        [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]]
        console.log("internal", this.arr)
        await this.visualSwap(a, b)
    }

    public async shuffle() {
        for (let i = this.arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));

            await this.swap(i, j)
        }
    }

    private isSorted() {
        for (let i = 0; i < this.arr.length - 1; i++) {
            if (this.arr[i] > this.arr[i + 1]) {
                return false;
            }
        }
        return true
    }

    // sorting algorithms
    public async bubbleSort() {
        while (!this.isSorted()) {
            for (let i = 0; i < this.arr.length - 1; i++) {
                if (this.arr[i] > this.arr[i + 1]) {
                    await this.swap(i, i + 1)
                }
            }
        }
    }
}


export function swap(arr: any[], index1: number, index2: number) {
    const newArr = [...arr]
    newArr[index1] = newArr[index2]
    newArr[index2] = arr[index1]
    return newArr
}

// Fisher-Yates
export function shuffle(arr: any[]) {
    const newArr = [...arr]

    for (let i = newArr.length - 1; i > 0; i--) {

        const j = Math.floor(Math.random() * (i + 1));

        [newArr[i], newArr[j]] = [newArr[j], newArr[i]]
    }

    return newArr
}