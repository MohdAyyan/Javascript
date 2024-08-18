first_promise = new Promise((resolve, reject) => {
   setTimeout(() =>{
    if (Math.random() > 0.5) {
        resolve("Friend first is ready");
    }else{
        reject("Mere abhi exams hai");
    }
},2000);
})

second_promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (Math.random() > 0.5) {
            resolve("Friend second is ready");
        }else{
            reject("Mujhe abhi bahar kam sea jana hai ");
        }
    },3000);
})
third_promise = new Promise((resolve, reject) => {
    setTimeout(() =>{
        if (Math.random() > 0.5) {
            resolve("Friend third is ready");
        }else{
            reject("Mere gf ka birthday hai");
        }
    },4000);
})
fourt_promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
        if (Math.random()  > 0.5) {
            resolve("Friend third is ready");
        }else{
            reject("Mere gf ka birthday hai");
        }
    },5000);
    })
Promise.all([first_promise,second_promise,third_promise,fourt_promise]).then(()=>{
console.log("You are going to goa");
}).catch(()=>{
    console.log("Yarr band karo yea sab mea nahi ara ");
})
