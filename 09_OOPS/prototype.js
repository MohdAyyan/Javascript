let myheroes = ["thor","spiderman"];

let heroPower ={
    thor : "hammer",
    spiderman : "sling",
    getSpiderPower : function () {
        console.log(`spidy power is ${this.spiderman}`);
    }
}
    //console.log(heroPower.getSpiderPower());

    Object.prototype.hitesh = function () {
        console.log(`hitesh is present in all objcets`);
    }
    heroPower.hitesh();
    Array.prototype.heyHitesh = function () {
        console.log(`hitesh says hello`);
    }
    myheroes.heyHitesh();
    String.prototype.trueLength = function () {
        console.log(`True length is : ${this.trim().length}`);
    }
    "hitesh".trueLength();
    "ChaiAurCode".trueLength();
    // function,array,object => prototype
    const User = {
        name: "chai",
        email: "chai@google.com"
    }
    
    const Teacher = {
        makeVideo: true
    }
    
    const TeachingSupport = {
        isAvailable: false
    }
    
    const TASupport = {
        makeAssignment: 'JS assignment',
        fullTime: true,
        __proto__: TeachingSupport
    }
    
    Teacher.__proto__ = User
    
    // modern syntax
    Object.setPrototypeOf(TeachingSupport, Teacher)