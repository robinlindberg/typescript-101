// Greater than
20 > 3 // true
20 > 20 // false

// Greater than or equal to
20 >= 3 // true
20 >= 20 // true

// Lesser than
20 < 3 // false
20 < 20 // false

// Lesser than or equal to
20 <= 3 // false
20 <= 20 // true

// And
20 > 3 && 20 > 20 // false
20 > 3 && 20 >= 20 // true

// Or
20 > 3 || 20 > 20 // true
20 > 3 || 20 >= 20 // true

// Not
!true // false
!false // true
!(20 > 20) // true
!(20 >= 20) // false

export {}
