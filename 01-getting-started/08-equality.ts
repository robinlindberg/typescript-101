// Simple equality checks
5 == 5 // true
5 === 5 // true
5 != 5 // false
5 !== 5 // false

// The following examples are all valid JavaScript statements,
// but are presented as errors by the TypeScript transpiler

// @ts-ignore
5 == "5" // true, TypeScript error
// @ts-ignore
5 === "5" // false, TypeScript error

// @ts-ignore
"" == "0" // false, TypeScript error
// @ts-ignore
"" === "0" // false, TypeScript error

// @ts-ignore
2 == "2" // true, TypeScript error
// @ts-ignore
2 === "2" // false, TypeScript error

// @ts-ignore
0 == "" // true, TypeScript error
// @ts-ignore
0 === "" // false, TypeScript error
