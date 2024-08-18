const coding = ["js","c++","c","swift"];
coding.forEach(function(item){
//console.log(item);
})

//using arrow function
coding.forEach((val)=>{
    //console.log(val);
})
 coding.forEach((item,index,arr)=>{

   // console.log(item,index,arr);
 }
)
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )