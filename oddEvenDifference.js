function oddEvenDifference(array){
    console.log(typeof(array))
    let even=array.filter(Number=>Number%2==0)
    let odd=array.filter(Number=>Number%2!==0)
    let evenSum=even.reduce((a,b)=>a+b,0)      
    let oddSum=odd.reduce((a,b)=>a+b,0)
    console.log(oddSum-evenSum)
    return oddSum-evenSum
}

let array=[10,11,7,12,14]

oddEvenDifference(array)
