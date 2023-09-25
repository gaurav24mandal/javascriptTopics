// to convert from one data type to another we use datatype methods 
 
let a = "15"
console.log(typeof a); // op : string
let b = Number(a);
console.log(typeof b); // op : number

// some conversions 

// bollean -> 
//number 1: true , except zero for  evrery number boolean is true 
// 0 : false and vice versa 
// string -> boolean 
// " " :flase -> empty string ,
// "hi" : true -> string contains  some char


// NaN => not a  number when we try to convert a string whivh can not be 
//converted to a  num ber than oupput comes  NaN

let c  = "hu";
let ans = Number(c)
console.log(ans); // op :  NaN

// oprators 
// + - * / % 

let str1 = "hi"
let str2 = " gaurav"
console.log(str1+str2);
// output --> hi gaurav

let num1  = '1' ;
let num2  = '2'
console.log(num1 + num2);
//output --> 12

console.log(1 + 1 +'2');
// op --> 22 

console.log('2'+1 + 1);
// op --> 211



// prefix  and  postfix oprerators

let x = 3 ;
let y = x++;
console.log(`x is ${x} and y is ${y}`);
let x1 = 3 ;
let y2 = ++x1;
console.log(`x is ${x1} and y is ${y2}`);