// iterator example
// function nameIterator(names) {
//   let nextIndex = 0;

//   return {
//     next: function() {
//       return nextIndex < names.length ? 
//       { value: names[nextIndex++], done: false } : 
//       {done: true }
//     }
//   }
// }

// // create an array of names
// const namesArr = ['james', 'jack', 'john']
// // init iterator and pass in the names array
// const names = nameIterator(namesArr);

// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next().value);
// console.log(names.next());

// generator example
// function* sayNames() {
//   yield 'jack'
//   yield 'james'
//   yield 'john'
// }

// const name = sayNames()

// console.log(name.next().value);
// console.log(name.next().value);
// console.log(name.next());
// console.log(name.next());

// ID creator
function* createIds() {
  let index = 0;

  while(true) {
    yield index ++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);