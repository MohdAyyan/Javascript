const user ={
    username : 'hitesh',
    logincount : 8,
    isLogedIn : true,
   getUserDetailed :function(){
//console.log("Got user deatils from data base");
console.log(`Welcome ${this.username}`);  
}
};
console.log(user.getUserDetailed());
 

/// CONSTRUCTOR IN JAVASCRIPT ///////

function username(username,logincount,isLogedIn) {
    this.username = username;
    this.logincount = logincount;
    this.isLogedIn = isLogedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

}
const one = new username("hitesh",8,true);
//console.log(one);
const two = new username("ayyan",13,false);
console.log(two);