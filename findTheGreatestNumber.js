/* 
function findTheGreatestNumber(arr){
    let greatest=arr[0];
    if(greatest<arr[i]){
            greatest=arr[i];
    }
    console.log(greatest);
    return greatest;
}

let array = [3, 6, 2, 56, 32, 5, 89, 32];
findTheGreatestNumber(array) */


/* var arr = [3, 6, 2, 56, 32, 5, 89, 32];
var largest = arr[0];

for (var i = 0; i < arr.length; i++) {
    if (largest < arr[i] ) {
        largest = arr[i];
    }
}
console.log(largest); */

/* let arr = [3, 6, 2, 56, 32, 5, 89, 32];
function findTheGreatestNumber(array){
    let greatest=Math.max(...array)
    return greatest;
}
console.log(findTheGreatestNumber(arr)) */

/* let arr = [3, 6, 2, 56, 32, 5, 89, 32];
function findTheGreatestNumber(arr) {
    return Math.max.apply(0, array)
}
console.log(findTheGreatestNumber(arr))

*/

function findTheGreatestNumber(array){
        let greatest=array.reduce(function(a,b){
            return Math.max(a,b)
        });
    return greatest;
}
let arr = [3, 6, 2, 56, 32, 5, 89, 32];
console.log(findTheGreatestNumber(arr))

