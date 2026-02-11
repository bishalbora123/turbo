const name="bishal"
let repocount=50
let num1=20
let num2=30
add=num1 + num2;
sub=num1-num2;
multiply=num1 * num2;
console.log(`My name is ${name} and my repo count is ${repocount}`);
//console.log(`Addition of ${num1} and ${num2} is: ${add}`)
//console.log(`Subtraction of ${num1} and ${num2} is: ${sub}`)
//console.log(`Multiplication of ${num1} and ${num2} is: ${multiply}`)

const gamename=new String('bishalbora');
console.log(gamename);
console.log(`my game name is ${gamename}`)
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt(2));
console.log(gamename.indexOf('s'));

const newname=gamename.substring(0,4);
const newgamename=gamename.slice(-9,4);
console.log(newname);
console.log(newgamename);

const newstring="     bishal    "
console.log(newstring);
console.log(newstring.trim());

const url="https://bishal.com/bishal%20bora"
console.log(url.replace('%20','&&'))


const Name="nilesh@2003.google.com@"

console.log(Name.replace('@','#'));
console.log(url.includes('bishal'))

const split="bishal-basu-bora"
console.log(split.split('-'));


console.log("Name");




