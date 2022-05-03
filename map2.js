let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Square each number in the array
// Filter the resulting array by numbers larger than 30
// For each remaining element, print a string declaring it larger than 30
// e.g. "36 is larger than 30"

//Your code here

// map the array to create new array with squared numbers
const squareMap = numbers.map(function(number){
    return number * number
})
console.log(squareMap)

// // filter function to find results that are larger than 30
const filterNumbers = squareMap.filter(number => {
    if (number > 30){
        return true
    } else {
        return false
    }
})

console.log(filterNumbers)

