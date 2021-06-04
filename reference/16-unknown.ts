let value: unknown

value = "John"
// @ts-ignore
console.log(value.indexOf("o"))  // 1, TypeScript error
console.log((value as string).indexOf("o"))  // 1

value = 42
// @ts-ignore
console.log(value + 10)  // 52, TypeScript error
console.log((value as number) + 10)  // 52

export {}