const promiseOne = new Promise(function (resolve,reject) {
    setTimeout(function () {
        console.log('A sync task was completed');
        resolve();
    },1000)
});

promiseOne.then(function () {
    console.log('Promise consumed');
});

new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async task 2');
        resolve();
    }, 1000);
}).then(()=>{
    console.log('Async two resolve');
})

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({username :'hitesh', eamil :'hitesh.google.com'});
    }, 1000);
}).then((user) => {
    console.log(user);
})
const fourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false;
    if (!error) {
        resolve({username: "hitesh", password: "123"})
        }
        else{
            reject('ERROR: Something went wrong');
        }
    }, 1000);
})
fourPromise
 .then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() => console.log("The promise is either resolved or rejected"))

      //        METHOD => 2       //
      const promiseFive = new Promise(function(resolve, reject){
        setTimeout(function(){
            let error = true
            if (!error) {
                resolve({username: "javascript", password: "123"})
            } else {
                reject('ERROR: JS went wrong')
            }
        }, 1000)
    });
    async function consumePromiseFive() {
        try {
            const response = await promiseFive;
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    }
    consumePromiseFive();
    async function getAllUsers(){
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users')
        
                const data = await response.json()
                console.log(data);
            } catch (error) {
                console.log("E: ", error);
            }
        }
        getAllUsers();
        fetch('https://api.github.com/users/hiteshchoudhary')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error));

