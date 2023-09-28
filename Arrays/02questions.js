// Write a JavaScript function to get the first element of an array. Passing 
// the parameter 'n' will return the first 'n' elements of the array

// solution 

let arr  = [[],2,3,4];

const ans  =  arr.reduce((i)=>{
    return i
})
//console.log(ans);

/**
 * question2 
 * Write a JavaScript function to get the last element of an array.
 *  Passing the parameter 'n' will return the last 'n' elements of the array.
 
 */
let ar  = [[],2,3,4];

const an  =  arr.reduce((i,j)=>{
    return j
})
//console.log(an);

/**
 *  Write a simple JavaScript program to join all elements of the following array into a string.
 */
const   myColor = ["Red", "Green", "White", "Black"];
//console.log(myColor.toString());

/* remove duplicate  items */

let dup = [1,1,2,1,5,4,6,5,4,8,7,9]
let a = dup.filter((v,i,b)=>{
    
   return   b.indexOf(v) === i

})
//console.log(a);
//  understand with a  simple example  of 1  b.indexof(i) === i
// b.indexof(1) is  0 when i = 0 but b,indexof(1) is 0 when i = 1 as well hence a unique number will 
// always  filter from the  array 


/* shulffle  an array */

let shuffle = [1,2,3,54,65,47,7,1,56]
let n = shuffle.length 
//console.log(n);


for(let i = 0; i<n;i++){
    let rand = Math.floor(Math.random()*n);
   // console.log(shuffle[rand]);
}

/** Write a JavaScript program to compute the union of two arrays. */

let ab  = [1,100,2,3,4]
let ba = [5,6,8,10,1,2,3]
let aba = ab.concat(ba);
//console.log(aba);
 let ans4 = aba.filter((v,i,arr)=>{
     let ans = arr.indexOf(v)=== i ;
     return ans 
 })
   let  ans5 =ans4.sort((a,b)=>{
         return a-b
   })
// console.log(ans5);


/** Write a JavaScript program to count the number of arrays inside a given array. */

let subarray = [1, [1, 2], 56, [], 56];

let count = 0;

subarray.forEach((item) => {
  if (Array.isArray(item)) {
    count++;
  }
});

//console.log(count);

/** Write a JavaScript program to check if an array is a factor chain or not. */
 let factorArray = [2,4,8,16,32,64];
 function isFactorChain(arr) {
    // Check if the array has at least two elements
    if (arr.length < 2) {
      return false;
    }
  
    // Iterate through the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      // Check if arr[i] is a factor (divisor) of arr[i-1]
      if (arr[i - 1] === 0 || arr[i - 1] % arr[i] !== 0) {
       
        return false;
      }
    }
  
    // If all elements satisfy the factor condition, it's a factor chain
    return true;
  }

 console.log( isFactorChain([2, 4, 8, 16, 32, 64]))