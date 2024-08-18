const marvelHeros = ["thor","Ironman","Spiderman"];
const dcheros = ["superman","flash","batman"];
//marvelHeros.push(dcheros);



/////// *********METHODS FOR JOINING TWO ARRAYS ******/////

//console.log(marvelHeros);//[ 'thor', 'Ironman', 'Spiderman', [ 'superman', 'flash', 'batman' ] ]
 const allHeros = marvelHeros.concat(dcheros);
 //console.log(allHeros);//[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]

const myHeros = [...dcheros,...marvelHeros];
//console.log(myHeros);//[ 'thor', 'Ironman', 'Spiderman', 'superman', 'flash', 'batman' ]
 const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

 const realarr = another_array.flat(Infinity);
 console.log(realarr);//[
    //1, 2, 3, 4, 5,
    //6, 7, 6, 7, 4,
    //5]

    console.log(Array.isArray("Hitesh"));//false
    console.log(Array.from("Hitesh"));//"h","i"....
    console.log(Array.from({name : "hitesh"}));//[]
    let score1 = 100;
    let score2 = 200;
    let score3 = 500;
    console.log(Array.of(score1,score2,score3));//[100,200,300]