// Description:
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(x){
    if (x.length === 0) return 0

    let result = 1;
    for(let i = 0; i < x.length; i++) {
        result*= x[i]
    }
    return result;
}

console.log(grow([1, 2, 3]));
console.log(grow([4, 1, 1, 1, 4])); 
console.log(grow([2, 2, 2, 2, 2, 2])); 