// question 1  Write a JavaScript function to check whether an 'input' is a string or not.

//solution
function verify (str){
    let check = typeof str ;
    
    if(check === 'string'){
        return true ;
    }
    else{
        return false ;
    }
}

// question 2 = Write a JavaScript function to check whether a string is blank or not.
const emptyString = (str)=>{
     let n = str.length ;

    for(let i =0 ;i<n;i++){
        if(str.charAt(i) !== ' '){
            return false ;
        }
    }
    return true ;
}

//3 Write a JavaScript function to extract a specified number of characters from a string.

const subStr = (str,n)=>{
     console.log(str.substring(0,n));
}
//console.log(subStr("robin",2));


// question 4 :  Write a JavaScript function that hides email addresses to prevent unauthorized access.

const auth = (email)=>{
     let emailArr = email.split('@');
     let part1 = emailArr[0];
     let avg = part1.length/2;
     let encrypt = part1.substring(0,avg);
     let part2 = emailArr[1];
     let ans = `${encrypt}...@ ${part2} `
     console.log(ans);
}
  //  5 console.log(string_parameterize("Robin Singh from USA."));
//"robin-singh-from-usa"
let hu = 'hey there'
//console.log(hu.slice(1));
//console.log(hu.replace(' ','-')); 

// question 6 --> Write a JavaScript function to capitalize the first letter of word in a   string.

const stringCap = (str)=>{
    const words = str.split(' ');
    
  const ans  = words.map((i)=>{
   return  i.charAt(0).toUpperCase()+i.slice(1)
    })
   
    return  ans.join(' ')
  }
console.log(stringCap('hi ther my name isk khan'));
