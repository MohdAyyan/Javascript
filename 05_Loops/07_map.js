const myArr =[0,1,2,3,4,5,6,7,8,9,10];
const newArr = myArr.map( (num) => num + 10)

//console.log(newArr);
const userArr = myArr.map( (num)=> num+10).map((num) => num*2).filter((num)=> num > 30)
console.log(userArr);