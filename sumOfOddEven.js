const intArray=[10,11,7,12,14];

function diffOddEven(arr){
    let diff;let odd=0;let even=0;
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        even+=arr[i];
    }else odd+=arr[i];
}       
    return odd-even;
}
console.log(diffOddEven(intArray));