function sayMyName() {
    console.log("Ayyan");
}

sayMyName();

function add(number1,number2) {
    return number1+number2;
    }
    console.log(add(2,3));

    function loginUserMessage(username ="sam") {
        if (!username) {
            console.log("please enter the user name");
            return;
            }
            return `${username} just logged in`
        }
        console.log(loginUserMessage());

        function calculatePrice(...num1) {
            return num1;
            }
            console.log(calculatePrice(200,400,500,2000));

            function calculatePrice(val1,val2,...num1) {
                return num1;
                }
                console.log(calculatePrice(200,400,500,2000));

            const user ={
                username:"ayyan",
                prices :199,
            }    


            function handleObject(anyObject) {
                console.log(`Username is ${anyObject.username} and price is ${anyObject.prices}`);
                
            }
            handleObject(user);