// Array destructuring
const fruits = ["apple", "orange", "pear"]
const [first, second] = fruits
console.log(first)  // apple
console.log(second)  // orange

// Object destructuring
const person = {
    name: "John",
    age: 42,
    pets: ["fido"]
}
const { name, age } = person
console.log(name)  // John
console.log(age)  // 42

// Object destructuring with renamed variable
const { name: personName } = person
console.log(personName)  // John

export {}