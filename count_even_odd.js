let arr = [2, 1, 5, 6, 3, 4, 7, 8, 10];
let even = 0
let odd = 0

for (let i of arr) {
    if (i % 2 == 0) {
        even++
    } else {
        odd++
    }
}

console.log(even)
console.log(odd)