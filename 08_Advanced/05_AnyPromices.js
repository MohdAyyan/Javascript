let first_gf = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (Math.random() > 0.5)  {
            resolve(console.log("I am coming for dinner"));
        }
        else{
            reject(console.log("I am busy today"));
        }
    },2000);
})
let second_gf = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (Math.random() > 0.5)  {
            resolve(console.log("I am second coming for dinner"));
        }
        else{
            reject(console.log("I am going today"));
        }
    },3000);
});
let third_gf = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (Math.random() > 0.5)  {
            resolve(console.log("I am third coming for dinner"));
        }
        else{
            reject(console.log("My friends coming today"));
        }
    },4000)
});
Promise.all([first_gf,second_gf,third_gf]).then(()=>{
    console.log("My valentine day is sorted");
}).catch(()=>{
    console.log("Not sorted");
})