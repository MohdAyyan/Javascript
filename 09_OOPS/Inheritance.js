// const User = {
//     name: "chai",
//     email: "chai@google.com"
// }

// const Teacher = {
//     makeVideo: true
// }

// const TeachingSupport = {
//     isAvailable: false
// }

// const TASupport = {
//     makeAssignment: 'JS assignment',
//     fullTime: true,
//     __proto__: TeachingSupport
// }

// Teacher.__proto__ = User

// // modern syntax
// Object.setPrototypeOf(TeachingSupport, Teacher)

class User {
constructor(username){
    this.username = username;
}
logMe(){
    console.log(`USERNAME is ${this.username}`);
}
}
class teacher extends User{
    constructor(username,email,password) {
        super(username);
        this.password = password;
        this.email = email;
    }
    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}
const chai = new teacher("Chai","chai@123",9850);
chai.logMe();
const masalaChai = new teacher("masalachai","xyz@gmail.com",1728);
masalaChai.addCourse(); 
console.log(masalaChai instanceof User);