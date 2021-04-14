const intArray=[10,11,7,12,14];

function diff(arr){
   return Math.max(...arr)-Math.min(...arr);
}
console.log(diff(intArray));


