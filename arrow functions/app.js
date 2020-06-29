// const sayHello = function(){
//   console.log('Hello')
// }

// const sayHello = () => {
//   console.log('Hello')
// }

//One line functions does not need braces
// const sayHello = () => console.log('hello')

//One line return
// const sayHello = () => 'hello';

//same as above 
// const sayHello = function(){
//   return 'Hello';
// }

//return object
//const sayHello = () => ({ msg: 'Hello' })

// Single param does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

//Multi parems needs parenthesis
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);


// sayHello('Dan', 'Damgaard');

const users = ['nathan', 'john', 'beth'];

//Longetst
// const nameLength = users.map(function(name){
//   return name.length;
// })

//Shorter
// const nameLength = users.map((name) => {
//   return name.length;
// })

//Shortest
const nameLength = users.map(name => name.length);

console.log(nameLength);