// In this exercise we implement the functions
// "insertAtFirstPosition" and "appendAtLastPosition". The
// functions accepts an array of strings, adds a new item,
// and returns it to the caller.

const insertAtFirstPosition = (items: string[], item: string): string[] => {
    throw new Error("Not implemented")
}

const appendAtLastPosition = (items: string[], item: string): string[] => {
    throw new Error("Not implemented")
}

let fruits = ["apple", "orange", "pear"]
console.log(fruits)  // [ "apple", "orange", "pear" ]

fruits = insertAtFirstPosition(fruits, "melon")
console.log(fruits)  // [ "melon", "apple", "orange", "pear" ]

fruits = appendAtLastPosition(fruits, "grape")
console.log(fruits)  // [ "melon", "apple", "orange", "pear", "grape" ]

export {}
