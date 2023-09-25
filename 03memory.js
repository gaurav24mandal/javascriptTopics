// stack memory 

let a  =  10 ;

let b = a ;

b =12;

console.log(`a is ${a} b is ${b}`); 

// output is  a = 10 and  b = 12  

// heap memory

let  student = {
    name: "gaurav",
    email : "user@123"
}

let newStudent = student ;

newStudent.email = "gaurav@123"

console.log(newStudent.email);
console.log(student.email);
// op :  newStudent.email = gaurav@123 &&  student.email = gaurav@123 

// this is beacuse object is a  non primitive  datatype  or reference  datatype  and return memory location
// when called hence  newStudent  indicates the  location of  student  and change email for  both student and 
//newStudent