const inchArray=[18,11,27,12,14];

function totalFeet(arr){
    let totalFeet=0;
for(let i=0;i<arr.length;i++){
    totalFeet+=Math.trunc(arr[i]/12);
}

    return totalFeet;
}
console.log(totalFeet(inchArray));


