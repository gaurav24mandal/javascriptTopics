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