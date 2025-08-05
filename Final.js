/** Problem -01 ( Divide the Asset ) */
var area = 2060;
//write your code here

var result= area / 2;
    console.log("Result is:" , result) ;

/** Problem -02 ( Cycle or Laptop ) */
var money =45000 ;
//write your code here

if(money >= 25000){
    console.log("Laptop")

}else if(money >=10000){
    console.log("Cycle")
}else{
    console.log("Chocolate")
}

/** Problem -03 ( Medicine Planner ) */
var lastDay = 6;
//write your code here

for(var i=1;i <=lastDay;i++){

    if(i % 3 ==0){
          console.log(i +'-' +'medichine')
    }else{
        console.log(i +'-' +'rest')
    }
}

/** Problem 04 - (Delete / Store) */

var fileName="result.pdf" ;
//write your code here

if(fileName.includes("pdf")){
    console.log("store")
}else if(fileName.includes("docx")){
    console.log("store")
}else if(fileName.includes("#")){
    console.log("store")
}else{
    console.log("Delete")
}

/** Problem 05 - ( PH Email Generator )  */
var student= { name: "jhankar" , roll: 1014 ,department: "cse" };
//write your code here
var student={
    name:"jhankar", 
    roll: 1010 ,
    department:"cse"
}

console.log(student.name + student.roll + "." + student.department +"@ph.ac.bd");

/** Problem 06 :  (Current Salary )  */
var experience = 30;
var startingSalary = 45000;
//write your code here
for(var i=0;i<=experience ;i++){
    startingSalary = startingSalary + (startingSalary * 0.05);
}
console.log(startingSalary.toFixed(2)) ;