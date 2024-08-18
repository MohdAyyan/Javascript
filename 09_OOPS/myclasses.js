// class User{
//     constructor(username,email,password){
//         this.username = username;
//         this.email = email;
//         this.password = password;
// }
// encryptPassword(){
//     return `the user password is ${this.password}`;
// }
// changeUsername(){
//     return `${this.username.toUpperCase()}`;
// }
// }
// const chai = new User("chai","chai@abcgmail.com",1234);
// console.log(chai.encryptPassword());
// console.log(chai.changeUsername());



// BEHIND THE SEEN  ///

class User{
        constructor(username,email,password){
            this.username = username;
            this.email = email;
            this.password = password;
    }
}

User.prototype.encryptPassword = function () {
    return `The user password is ${this.password}`;
}
User.prototype.changeUsername = function () {
    return `The username is : ${this.username.toUpperCase()}`;
    
}
const chai = new User("chai","chai@gmail.com",12345);
console.log(chai.encryptPassword());
console.log(chai.changeUsername());
const tea = new User("ayyan","ayyan9850@gmail.com",1572);
console.log(tea.encryptPassword());