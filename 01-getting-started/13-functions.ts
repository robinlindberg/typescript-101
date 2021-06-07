/**
 * Function with implicit return type.
 */
const say = (message: string) => {
    console.log(message)
}

say("Hello world!") // Hello world!

/**
 * Function with explicit return type.
 */
const shout = (message: string): void => {
    console.log(message.toUpperCase())
}

shout("Hello world!") // HELLO WORLD!

/**
 * Function with resp parameters.
 */
const chat = (sender: string, ...words: string[]) => {
    const sentence = words.join(" ")
    console.log(`${sender}: ${sentence}`)
}

chat("John", "Hello", "world!") // John: Hello world!

export {}
