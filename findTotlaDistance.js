function findTotalDistance(){
    console.log(arr)
    let j=0;
    for (let i=0;i+1<arr.length;i+=2){
        let sum =Math.abs(arr[i+1]-arr[i]);
      //  j=arr[i]
        console.log(sum)
        //j=arr[i];
        //j=sumOfArray[i]
    }
}
let arr=[10,11,7,12,14,16]
findTotalDistance(arr)



/* function findTotalDistance(array){
    deltas = array.map((v, i, a) => Math.abs(v - (a[i - 1] || 0)));
    console.log(deltas)
    let distance=deltas.reduce((a,b)=> a+b,0)
    console.log(distance)
}
let array = [10,11,7,12,14];
findTotalDistance(array) */ 
//console.log(deltas);