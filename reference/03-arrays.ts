let fruits = ["apple", "orange", "pear"]

console.log(fruits.length)  // 3
console.log(fruits[0])  // apple

// Add element to the end of the array
fruits.push("grape")
console.log(fruits.length)  // 4
console.log(fruits[3])  // grape

// Remove element from the end of the array
fruits.pop()
console.log(fruits.length)  // 3
console.log(fruits[0])  // apple

// Recreate array using spread syntax
fruits = ["melon", ...fruits]
console.log(fruits.length)  // 4
console.log(fruits[0])  // melon

export {}