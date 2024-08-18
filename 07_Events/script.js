const modeBtn1 = document.getElementById("mode");
let currMode = "light";
let body= document.querySelector("body");
modeBtn1.addEventListener("click",() => {
    if(currMode === "light"){
currMode = "dark";
body.classList.add("dark");
body.classList.remove("light");
    }
    else{
        currMode="light";
        body.classList.add("light");
        body.classList.remove("dark");
    }
    console.log(currMode);
});