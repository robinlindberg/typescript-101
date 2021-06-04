let pet = {
    name: "Fido"
}
console.log(pet)  // { name: "Fido" }

// Add property using the spread syntax
let dog = {
    ...pet,
    sound: "bark"
}
console.log(dog)  // { name: "Fido", sound: "bark" }