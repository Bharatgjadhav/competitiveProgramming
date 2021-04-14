const billArray=[1000, 2000, 3000, 4000];

function calcuTaxTotal(arr){
let TotalTax=0;
    for(let i=0;i<arr.length;i++){
        if(arr[i]>999){
            TotalTax+=10/100*arr[i];
           // console.log(TotalTax);
        }
    }
    return TotalTax
}
 console.log(calcuTaxTotal(billArray));