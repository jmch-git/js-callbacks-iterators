let misc = [3, "true", {a: 1, b: 2}, 7, [1, 2, 3], ['a', 'b', 'c'], "my favorite string", 59.09]

// Use filter to filter all strings out of the above array. 
// Don't worry about strings in the nested array (misc[5] is considered an array, not a string)

// Your code goes here
const getStrings = function(str){
    if(typeof str === "string"){
        return false
    } else {
        return true
    }
}

const filterStrings = misc.filter(getStrings)
console.log(filterStrings)