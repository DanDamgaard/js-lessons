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
      // {id: 1, name: 'stake', price: 210},
      // {id: 2, name: 'cookie', price: 10},
      // {id: 3, name: 'eggs', price: 20}
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
    getTotalPrice: function(){
      let total = 0;
      data.items.forEach(function(item){
        total += item.price;
      })

      // Set total price in data structure
      data.totalPrice = total;

      // return total
      return data.totalPrice;
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
    itemPriceInput: '#item-price',
    totalPrice: '.total-price'
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
      addListItem: function(item){
        //show list
        document.querySelector(UISelectors.itemList).style.display = 'block';  

        //Create li element
        const li = document.createElement('li');
        // Add class
        li.className = 'collection-item';
        // Add id
        li.id = `item-${item.id}`;
        // Add html
        li.innerHTML = `<Strong>${item.name}</Strong> <em>${item.price} Kr</em>
        <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
        // insert item
        document.querySelector(UISelectors.itemList).insertAdjacentElement('beforeend', li)
      },
      clearInput: function(){
        document.querySelector(UISelectors.itemNameInput).value = '';
        document.querySelector(UISelectors.itemPriceInput).value = '';
      },
      hideList: function(){
        document.querySelector(UISelectors.itemList).style.display = 'none';
      },
      showTotalPrice: function(totalprice){
        document.querySelector(UISelectors.totalPrice).textContent = totalprice;
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

      // Add item to UI List
      UICtrl.addListItem(newItem);

      // get the total price
      const totalprice = ItemCtrl.getTotalPrice();

      // Add total price to UI
      UICtrl.showTotalPrice(totalprice);

      //clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  //public methods
  return {
    init: function(){
      console.log('init app');
      // get items items from data stucture
      const items = ItemCtrl.getItems();

      //check if any items
      if(items.length === 0){
        UICtrl.hideList();
      } else {
        //populate list with items
        UICtrl.populateItemList(items);
      }
      
      // get the total price
      const totalprice = ItemCtrl.getTotalPrice();

      // Add total price to UI
      UICtrl.showTotalPrice(totalprice);
      

      //Load event listners
      loadEventListners();
    }
  }
})(ItemCtrl, UICtrl);

// init app
App.init();