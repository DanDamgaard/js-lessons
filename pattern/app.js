// Basic structure

// (function() {
//   // Declair private variable and functions

//   return {
//     // Declair public variables and functions
//   }
// })();

// Standard Mudule Pattern
// const UICtrl = (function(){
//   let text = 'Hello World';

//   const changeText = function(){
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   }

//   return {
//     callChangeText: function(){
//       changeText();
//       console.log(text);
//     }
//   }
// })();

// UICtrl.callChangeText();

// Revealing Mudule Pattern
const itemCtrl = (function() {
  let data = [];

  function add(item){
    data.push(item),
    console.log('Item added.....')
  }

  function get(id) {
    return data.find(item => {
      return item.id === id;
    });
  }

  return {
    add: add,
    get: get
  }
})();

itemCtrl.add({id: 1, name: 'John'});