const myarr =[0,1,2,3,4,5];
const myHeroes = ["Shaktiman","spiderMan","krish"];



/*****************  ARRAYS MEYHOD  **********************/
 
myarr.push(8);
myarr.pop();

myarr.unshift(2);
 myarr.shift();
console.log(myarr);
  

console.log(myarr.includes(9));//true or falsecc

console.log(myarr.indexOf(5));

const newArr = myarr.join();
console.log(myarr);
console.log(newArr);//object



//slice ,splice
console.log("A",myarr);
const myN1 = myarr.slice(1,3);//index 1 or 2 print karenga
console.log(myN1);
const N2 = myarr.splice(1,3);
console.log("C",myarr);
console.log(N2);//123=>index