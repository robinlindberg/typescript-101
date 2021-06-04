const sleep = async (ms: number) => {
    return new Promise((resolve) => setInterval(resolve, ms))
}

const now = () => {
    return new Date().toTimeString()
}

// Wrap the code in self invoking function since Node.js
// doesn't allow us to await on the global scope
(async () => {
    console.log(`${now()} before`)
    await sleep(5000)
    console.log(`${now()} after`)
})()

export {}