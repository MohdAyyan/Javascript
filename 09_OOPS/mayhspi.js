const descriptor = Object.getOwnPropertyDescriptor(Math,"PI");
console.log(descriptor);
const chai = {
    name : "ginger",
    price : 250,
    isavailable : true,
    OrderChai : function () {
        console.log("chai to nhi hai");
    }
}
Object.defineProperty(chai, "name",{
    enumerable : false,
    
})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));
for (let [key,value] of Object.entries(chai)) {
    if (key !== "function") {
        console.log(`${key} : ${value   }`);
        
    }
    
}