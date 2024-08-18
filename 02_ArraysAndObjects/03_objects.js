const mySym = Symbol("key1");

const JsUser = {
    name : "Ayyan",
    "full name" : "Mohd Ayyan Hanif",
    age : 20,
    [mySym] : "mykey1",
    location : "Aurangabad",
    email : "ayyan@gmail.com",
    isLoggedIn : false,
    lastLoggedinDays :["Monday","Saturday"],
}

console.log(JsUser.email);
console.log(JsUser["email"]);//same output

console.log(JsUser["full name"]);//full name
console.log(JsUser[mySym]);
