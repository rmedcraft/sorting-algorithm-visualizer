/**
 * in react, you can set up useState with arrays, but it treats all arrays as immutable. 
 * all of these functions will return a new array instead of altering the array in place.  
 * */



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