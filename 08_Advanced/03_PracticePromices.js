const Simran_Promise = new Promise((resolve, reject) => {
    let decision = true;
    if (decision) {
    resolve("Shadi ki tayari karo");
    }else{
        reject("Tinder app sea dondlo");
    }
})
Simran_Promise.then(() => {
    console.log("Ok karta ho tayari");
}).catch(()=>{
    console.log("dusri dhund leta ho");
}).finally(() => {
    console.log("Ho gayi shadi");
});