console.log(process.argv);

var num1Str = process.argv[2];
var num2Str = process.argv[4];
var operator = process.argv[3];

var num1 = parseInt(num1Str); 
var num2 = parseInt(num2Str);

console.log(num1, operator, num2);

// add
if (operator === 'add') {
   console.log(num1 + num2);
}
// subtract
if (operator === 'subtract') {
    console.log(num1 - num2);
 }
// divide
if (operator === 'divide') {
    console.log(num1/num2);
 }
// multiply
if (operator === 'multiply') {
    console.log(num1 * num2);
 }