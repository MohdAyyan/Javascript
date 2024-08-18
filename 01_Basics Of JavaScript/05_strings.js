const name = "hitesh";
const repo = 50;
 

console.log(`My name is ${name} an my repocount is ${repo}`);
   

const gameName = new String("ayyan9089");
console.log(gameName[0]);//a
console.log(gameName.__proto__);//{}



console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf("y"));



const newString = gameName.substring(0,4);
console.log(newString);
  

const anString = gameName.slice(-8,4);
console.log(anString);
 //trim() empty space cut karta


 const url ="https://hitesh.com/hitesh%20choudhary";
 console.log(url.replace("%20","-"));
 console.log(url.includes("sundar"));//trueor false
 console.log(gameName.split("-"));
 console.log(typeof gameName);//object
