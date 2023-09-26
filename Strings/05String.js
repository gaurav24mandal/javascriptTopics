// String is a primitive data type in js which used to store series  of characters 
// string is used to store  and manipulate textual data 
 // string declaration 

 let str = new String('gaurav')
 console.log(str);

 // string concatiation we use template  literals :  (` `)

 const debug = 'concat'
console.log(`my name is ${str} and this is the case of concatination ${debug} `);

// to find the length of string we use 
console.log(str.length);

// imlportant  methods 
console.log(str.charAt(2))

 let str1 = '     gaurav     ' //---->> // in order to remove  unnessary spaces  we use  trim method

 // method 1  trim

console.log(str1)
console.log(str1.trim());

// method  2  spilt

// showing  how  stack memory works 
let me = "lewnkksddksjbkbdukbfvefj"
let she   =  me ;
she = "hijklmnop"
// console.log(she);
// console.log(me);

// to convert  a string into an array 
let he = me.split('')
//console.log(he);
 let his = he ;
 his = [1,2,3]
 console.log(his);
 // method 3 : substrinng

console.log(me.substring(0,5));

// method 4  :  Indexof
console.log(me.indexOf('s'));
console.log(me.lastIndexOf('s'))

// method 5  starts with 
console.log(me.startsWith('o'));

// method 6 replace
 console.log(me.replace('s','g'));
 