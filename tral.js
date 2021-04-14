function findTotalDistance(arr){
    let array=[];
    let j=0;
    for (let i=0;i<arr.length-1;i++){
        array.push(Math.abs(arr[i]-arr[i+1]));
    }
    let Sum=array.reduce((a,b)=>a+b,0)
    console.log(Sum);
}

let arr=[10,11,7,12,14,16]
findTotalDistance(arr);

/* function findTotalDistance(array){
    deltas = array.map((v, i, a) => Math.abs(v - (a[i - 1] || 0)));
    console.log(deltas)
    let distance=deltas.reduce((a,b)=> a+b,0)
    console.log(distance)
}
let array = [10,11,7,12,14];
findTotalDistance(array) */ 
//console.log(deltas);