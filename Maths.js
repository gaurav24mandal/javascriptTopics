// numbers 
// two ways  of  decalaring a num 

// let n = 1000000 ;
// let score  = new Number(45);
// console.log(`${n} and ${score}`);

// // methods  used  in Numbers 

/*constructor
: 
ƒ Number()
toExponential :ƒ toExponential()
toFixed: ƒ toFixed()
toLocaleString :ƒ toLocaleString()
toPrecision :ƒ toPrecision()
toString :ƒ toString()
valueOf :ƒ valueOf() */
// console.log(n.toFixed());
// console.log(n.toExponential);
// console.log(n.toLocaleString());
//  let m = score.toString()
//  console.log(m.slice(1));


 // *************** MATH ************//

 let abc  = Math.floor(Math.random()*10); // number between 0 to 10
 //console.log(abc);
// to make it  number  between 1   to 10
let ab  = Math.floor(Math.random()*10 +1);
//console.log(Math.min(4,5,6,8,10,0,1));

//************ DATE  AND TIME **********//


let myDate  = new Date();
console.log(myDate.toLocaleString('default',{
    month: "long",
    day:"2-digit",
    year:"2-digit",
    
}))
 console.log(myDate.getMonth());
// console.log(myDate.toUTCString());
// console.log(myDate.toLocaleTimeString());