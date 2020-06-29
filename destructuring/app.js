// Destrucuring assignment
let a, b;
[a, b] = [100, 200];

// rest pattern
[a, b,c,...rest] = [100, 200, 300, 400, 500];

({ a, b,...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500});

//Array destructuring
// const people = ['John', 'Beth', 'Mike'];

// const [person1, person2, person3] = people;

// console.log(person1, person2, person3);

// parse array returned from function
// function getpeople(){
//   return ['John', 'Beth', 'Mike'];
// }

// let person1, person2, person3;

// [person1, person2, person3] = getpeople();

// console.log(person1, person2, person3);

// Object Destructuring

const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function(){
    console.log('Hello');
  }
}

// Old ES5
// const name = person.name,
//       age = person.age,
//       city = person.city;

// New ES6 Destructuring
const { name, age, city, sayHello} = person;

console.log(name, age, city);

sayHello();