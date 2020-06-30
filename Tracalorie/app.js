// storage controller

//item controller 
const ItemCtrl = (function(){
  // Item Constuctor
  const Item = function(id, name, price){
    this.id = id;
    this.name = name;
    this.price = price;
  }

  // Data structure / State
  const data = {
    items: [
      {id: 1, name: 'stake', price: 210},
      {id: 2, name: 'cookie', price: 10},
      {id: 3, name: 'eggs', price: 20}
    ], 
    currentItem: null,
    totalPrice: 0
  }

  //public methods
  return {
    getItems: function(){
      return data.items
    },
    addItem: function(name, price){
      let ID;
      // create id
      if(data.items.length > 0){
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      // price to numbers
      price = parseInt(price);

      // create new item
      newItem = new Item(ID, name, price);
      
      data.items.push(newItem);

      return newItem;
    },
    logData: function(){
      return data;
    }
  }
})();




//ui controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list',
    addBtn: '.add-btn',
    itemNameInput: '#item-name',
    itemPriceInput: '#item-price'
  }
  //public methods
  return {
    
      populateItemList: function(items){
        let html = '';
        items.forEach(function(item){
          html += `<li class="collection-item" id="item-${item.id}">
          <Strong>${item.name}</Strong> <em>${item.price} Kr</em>
          <a href="#" class="secondary-ceontent"><i class="edit-item fa fa-pencil"></i></a>
        </li>`;
        });

        // insert list items
        document.querySelector(UISelectors.itemList).innerHTML = html;
      },
      getItemInput: function(){
        return {
          name:document.querySelector(UISelectors.itemNameInput).value,
          price:document.querySelector(UISelectors.itemPriceInput).value
        }
      },
      getSelectors: function(){
        return UISelectors;
      }
    
  }
  
})();




//app controller
const App = (function(ItemCtrl, UICtrl){
  // Load event listners
  let loadEventListners = function(){
    // get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);
  }
  
  //Add item submit
  const itemAddSubmit = function(e){
    // get form input from UI controller
    const input = UICtrl.getItemInput();
    
    // check for name and price
    if(input.name !== '' && input.price !== ''){
      // Add item
      const newItem = ItemCtrl.addItem(input.name, input.price);
      console.log(input.name);
    }

    e.preventDefault();
  }

  //public methods
  return {
    init: function(){
      console.log('init app');
      // get items items from data stucture
      const items = ItemCtrl.getItems();
      
      //populate list with items
      UICtrl.populateItemList(items);

      //Load event listners
      loadEventListners();
    }
  }
})(ItemCtrl, UICtrl);

// init app
App.init();