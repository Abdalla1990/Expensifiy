
// // object destrucuring 

// let person = { 
//     name : 'abdalla ',
//     age : 27 , 
//     location : {
//         city : 'montreal',
//         temp : 30
//     }
// }

// const {name , age} = person;

// // console.log(name)

// const {city : currentcity  = 'toronto'} = person.location

// // console.log(currentcity)

// const Book = {
//     name : 'somebook',
//     auther : 'some auther',
//     publihser : {
//             // name : 'penguin'
//     }
// }

// const {name : publisherName = 'Dar Alhedayah'} = Book.publihser;

// console.log(publisherName);



// array Destructuring 


const address = ['1234 place meilluer', 'montreal','QC','h3l 3k5'];

const Coffee = ['Coffee (hot)','$2:00','$2.50','$2.75'];

const [street , , state, zip] = address ;
console.log(zip);

const [Order = 'latte',small,medium,larg]= Coffee ;
console.log(`your order is : ${Order} and the size is medium , The total is : ${medium}`);
