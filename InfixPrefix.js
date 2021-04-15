/* function infix(input) {
    var x = input.split(' '); // splits each character and stores it in an array
    var operands = [];
    var numbers = [];
    var symbols = ['+', '-', '/', '*', '%'];
  
    for (var i = 0; i < x.length; i++) {
      if(symbols.includes(x[i])) {
        operands.push(x[i]);
      } else {
        numbers.push(x[i]);
      }
    }
    var final = operands.join(' ') +' ' +numbers.join(' ');
    return final;
  }
  
  //console.log(infix("1 + 2 + 3")); // "+ + 1 2 3"
  //console.log(infix("1 - 2 % 3 + 1 * 4")); // "- % + * 1 2 3 1 4"
  console.log(infix("A + B * C + D	")); // "+ + 1 2 3"
 */

  const infix = input =>
   [...input.match(/[^\d\s]/g), ...input.match(/\d+/g)].join(' ');

  // console.log(infix("1 + 2 + 3")); // "+ + 1 2 3"
   //console.log(infix("1 - 2 % 3 + 1 * 4")); // "- % + * 1 2 3 1 4"
console.log(infix("A + B * C + D")); // "+ + 1 2 3"


