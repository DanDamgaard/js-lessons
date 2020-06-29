// create a symbol
const sym1 = Symbol(); 
const sym2 = Symbol('sym2'); 

// unoque object keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');
const KEY3 = Symbol('sym3');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.key3 = 'prop3';
myObj.key4 = 'prop4';

//console.log(myObj[KEY1]);
//console.log(myObj[KEY2]);


// symbols are not enumerable in for loops
// for(let i in myObj){
//   console.log(`${i}: ${myObj[i]}`)
// }

// symbols are ignored ny json.stringify
console.log(JSON.stringify({key: 'prop'}));
console.log(JSON.stringify({[Symbol('sym1')]: 'prop'}));