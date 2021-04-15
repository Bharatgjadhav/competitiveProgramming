/* let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
function counter(x) {
    var count = 0,
      temp = [];
    x = x.split('');
    console.log(x);
    for (let i = 0, len = x.length; i < len; i++) {
      if (x[i] == "a") {
        count++;
      }
    }
    return count;
  }
  let a = "aabbddd";
  console.log(counter(a)); */

/* 
  let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
  function getFrequency(string) {
    var freq = {};
    for (var i=0; i<string.length;i++) {
        var character = string.charAt(i);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
        }
    }
    return freq;
};

let a = "aabbddd";
console.log(getFrequency(a));  */


/* let counter = str => {
    return str.split('').reduce((total, letter) => {
      total[letter] ? total[letter]++ : total[letter] = 1;
      return total;
    }, {});
  }; */

  //let arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
 /*  const counter = s =>
   [...s].reduce((a,c) => (a[c] = a[c]+1 || 1) && a, {})

  console.log(counter("hello")) */

/* function counter(x){
    let count=x=>[...x].reduce((a,c)=>(a[c] =a[c]+1||1) && a,{})
    return count;
}
let string="abbababab";
console.log(counter(string)) */

/* 
function freqMap(s) { 
    console.log(s)
    freq={}; 
    console.log(freq)
    for (let c of s) 
       freq[c]=-~freq[c];
       console.log(freq)

    return freq;
 }
 let name="bharatjadhav";
 console.log(freqMap(name)) */

/*  function getFrequency(str) {
     console.log(str)
    for (let i=0;i<str.length;i++){
        console.log(i)
        return str.split('').reduce( (prev, curr) => {
            prev[curr] = prev[curr] ? prev[curr] + 1 : 1;
            console.log(prev)
            return prev;                                       
          },{});
    }
  };
  console.log(getFrequency('test'));
 */
  
  function counter(s){
    for(let i=0;i<s.length;i++){
        let count=[...s].reduce((a,c)=>{
            (a[c]=a[c] ? a[c]+1 || 1) && a;
        },{})
    }
    return count;
  }
  let name="bharatjadhav";
  console.log(counter(name));
