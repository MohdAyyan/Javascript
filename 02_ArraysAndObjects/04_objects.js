/****************** Combianing Objects Different Methodes */


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

const obj4 = {obj1,obj1};
console.log(obj4); //{ obj1: { '1': 'a', '2': 'b' } }

const obj5 = Object.assign({},obj1,obj2,obj3);

console.log(obj5);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b', '5': 'a', '6': 'b' }

const obj6 = {...obj1,...obj2,...obj3};
console.log(obj6);

const tinderUser =[{
    id: 1,
    email : "xyz@gmail.com",
    }, 
    {
        id: 2,
        email : "xyz@gmail.com",
        }, 
        {
            id: 3,
            email : "xyz@gmail.com",
            }, 
];
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
