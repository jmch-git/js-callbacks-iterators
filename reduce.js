// BONUS ONLY: Look up docs to read about reduce, which takes an array and distills it into a single value.

let numbers5 = [1, 56, 2, 4, 1, 99, 3, 5];

// Your code here!

// Write something that takes the above array and returns the product of all the numbers
// via multiplication



const sum5 = function(total, currentNum){
    return total * currentNum
}

console.log(numbers5.reduce(sum5))

// OR you can write it this way

const answer = numbers5.reduce((total,current) => total * current)
console.log(answer)

