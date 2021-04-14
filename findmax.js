function findTotalDistance(arr){
    let array=[];
    let j=0;
    for (let i=0;i<arr.length-1;i++){
        array.push(Math.abs(arr[i]-arr[i+1]));
    }
    console.log (Math.max(...array));
}

let arr=[10,11,7,12,14,16]
findTotalDistance(arr);
