const score = new Number(400);
console.log(score.toString().length);
console.log(score.toFixed(1));//400.0
  

const othNum = 123.8966;
console.log(othNum.toPrecision(3));//123
  

const humdreads = 100000000;
console.log(humdreads.toLocaleString("en-IN"));//10,00,00,000


/* *****************   MATHS   **************************/



console.log(Math.abs(-4));
console.log(Math.round(4.6));//5-4
console.log(Math.ceil(4.2));//5
console.log(Math.floor(4.8));//4
console.log(Math.min(4,3,6,8));
console.log(Math.max(2,5,12,5));
  

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random() *10) + 1);