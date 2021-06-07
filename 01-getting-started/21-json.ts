let person = {
    name: "John",
    pets: null,
    wingspan: undefined,
}

console.log(person) // { name: "John", pets: null, wingspan: undefined }

// Serialization
const json = JSON.stringify(person)
console.log(json) // { "name": "John", "pets": null }

// Deserialization
person = JSON.parse(json)
console.log(person) // { name: "John", pets: null }

export {}
