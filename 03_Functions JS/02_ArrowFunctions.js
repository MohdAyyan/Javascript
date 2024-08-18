const use ={
    username :"Ayyan",
    price : 199,
    welcomeMessage: function () {
        console.log(this.username);
        
    }
}
use.welcomeMessage();
 ///////****************ARROW FUNCTIONS IN JS *********** */


 const chai=()=>{
    let username = "Hitesh"
    console.log(this)
 }
 chai();//{}

 let addTwo =(num1,num2)=>{
return num1+num2;
 }
 //const addtwo = (num1,num2)=> num1 + num2
 console.log(addTwo(2,3));
 