interface Person {
    name: string,
    age: number,
    pets?: string[]  // optional
}

const celebrateBirthday = (person: Person) => {
    person.age++
    console.log(`${person.name} turned ${person.age}`)
}

// Explicit type assignment
const john: Person = {
    name: "John",
    age: 42,
    pets: ["fido"]
}

celebrateBirthday(john)  // John turned 43

// Duck typing
const jane = {
    name: "Jane",
    age: 45
}

celebrateBirthday(jane)  // Jane turned 46

export {}