const arr = [0,1,2,3,4,5];
for (const num of arr) {
    //console.log(num);
    
}

const greeting = "Helloworld";
for (const grret of greeting) {
//console.log(grret);
    }

    //Maps 
    const map = new Map()
    map.set("IN","INDIA")
    map.set("USA","UNITED STATES OF AMERICA")
    map.set("RSA","RUSSIA")
    map.set("AUS","AUSTRIALIA")
    map.set("PAK","PAKISTAN")
   // console.log(map);
   for (const [key,value] of map) {
    //console.log(key,":-",value);
    }
     
    const myObj ={
        game1:"Spiderman",
        game2:"SUperman",
    }
    for (const [item,value] of myObj) {
        
        console.log(item,":-",value);//myObj is not iterable2
    }