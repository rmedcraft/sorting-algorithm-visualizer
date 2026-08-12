export class Sorter {
    // visualSwap is the method for swapping the array on the frontend. arr is the backend array separate from the frontend. Both should always have the same values. 
    private visualSwap: (a: number, b: number) => Promise<void>
    private arr: number[]

    constructor(visualSwap: (a: number, b: number) => Promise<void>, size: number) {
        this.visualSwap = visualSwap

        this.arr = Array.from(Array(size).keys())
    }

    private async swap(a: number, b: number) {
        if (a >= this.arr.length || b >= this.arr.length) {
            throw new Error(`Index out of bounds. Tried to swap indexes ${a} and ${b}, but indices only go up to ${this.arr.length - 1}`);
        }

        [this.arr[a], this.arr[b]] = [this.arr[b], this.arr[a]]
        await this.visualSwap(a, b)
    }

    // Fisher-Yates
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

    /**
     * sorting algorithms
     */

    public async bubbleSort() {
        while (!this.isSorted()) {
            for (let i = 0; i < this.arr.length - 1; i++) {
                if (this.arr[i] > this.arr[i + 1]) {
                    await this.swap(i, i + 1)
                }
            }
        }
    }

    public async quickSort() {
        const partition = async (low: number, high: number) => {
            // all the numbers before the pivot should be less than it, and all the numbers after should be greater
            const pivot = this.arr[high]

            // right position of the pivot found so far
            let i = low - 1

            for (let j = low; j <= high - 1; j++) {
                if (this.arr[j] < pivot) {
                    i++;
                    await this.swap(i, j)
                }
            }

            // move pivot to be after smaller elements
            await this.swap(i + 1, high)
            return i + 1
        }

        const quickSortInner = async (low: number, high: number) => {
            if (low < high) {
                let partitionIndex = await partition(low, high)

                await quickSortInner(low, partitionIndex - 1)
                await quickSortInner(partitionIndex + 1, high)
            }
        }

        quickSortInner(0, this.arr.length - 1)
    }
}