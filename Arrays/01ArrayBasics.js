 // ************  Arrays *********//
/* The Array object, as with arrays in other programming languages, enables storing a collection of multiple
 items under a single variable name, and has members for performing common array operations. */

 /* JavaScript array-copy operations create shallow copies. (All standard built-in copy operations
     with any JavaScript objects create shallow copies, rather than deep copies). 
     
     Shallow copies = non primitive  datatype or behaviour  i.e  doing  any changes  in the copy array 
     wil change the orignal array as well i.e  is  known as shallow copy
     */
/* 
JavaScript arrays are not associative arrays. They are essentially ordered lists of values, and their
 indices are always nonnegative integers. In JavaScript, you define an array like this:
  const myArray = [0,1,2,3,4,5,6,7,8,9,10]

associative arrays  are  like  : having index in string as well  exapmle  of array in php
$person = array(
  "name" => "John",
  "age" => 30,
  "city" => "New York"
);
*/   
/* important  method 
concat()
copyWithin()
every()
filter()
flat()
flatMap()
forEach()
indexOf()   returns  elements  if index is out of  bounded limit  then returns -1 
lastIndexOf()
map()
reduce()
reduceRight()
reverse()
slice()
some()
sort()
splice()
*/ 
 const myArray = [1,2,3,4,5,6,7,8,9,10]
// splice and slice 

// const nslice =  myArray.slice(1,4);
// console.log(nslice);
// console.log(myArray);
// const nsplice = myArray.splice(1,4);
// console.log(nsplice);
// console.log(myArray);

// diiference between slice and splice  
/* slice  : slice(index1, index2)  in slice index  is not  incluided  and array element is  copy in a new  array 
from index 1 to index 2 excluded
after slice  there is  no effect in orignal array  

splice : splice(index 1 index2 )
 both the index are included  in an array 
 orignal array change as the splice part is removed from the orignal array 

*/

/// push concat  isarray , from ,flat , spread , of ,shift , unshift
// push  works  on same  array but concat returns  a  new array 
myArray.push(11)

let small = [12]

const newA =  myArray.concat(small)
// console.log(newA);

// console.log(Array.from(myArray,x =>x*x))


// map filter and   reduce method 

/* 
  ******* MAP ******
The map() method of Array instances creates a new array
 populated with the results of calling a provided function on every element in the calling array. 
 map excepts  three arguments 1 value, index , array

 */

 let ans = myArray.map((i)=>{
   // console.log(i*i);
 })

  /*    
   *********FILTER******
   The filter() method of Array instances creates a shallow copy of a portion of a given array, 
 down to just the elements from the given array that pass the test implemented by the provided function.
  */
 let evenNum = myArray.filter((i)=>{
      if(i%2 === 0){
        return i ;
      }
 })
//  console.log(evenNum);


/*  
  ********REDUCE*********
  The reduce() method of Array instances executes a user-supplied "reducer" callback function on each
   element of the array, in order, passing in the return value from the calculation on the preceding 
   element. The final result of running the reducer across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the 
previous calculation". If supplied, an initial value may be used in its place.
 Otherwise the array element at index 0 is used as the initial value and iteration
  starts from the next element (index 1 instead of index 0).
*/

let reduceArr = myArray.reduce((i,j)=>{
    return i*j ;
})
//console.log(reduceArr);



let a1 = [1,2,3,4];

let a2 = a1.reduce((i,j)=>{
    return i*j
})

console.log(a2);

