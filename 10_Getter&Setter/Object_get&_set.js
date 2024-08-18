const User = {
_email : "abc@.com",
_password : "anc",
get email(){
    return this._email.toUpperCase()
},
set email(value){
this._email = value
}

}
const tea = Object.create(User);
console.log(tea.email);