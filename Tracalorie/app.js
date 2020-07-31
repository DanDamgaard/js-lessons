// storage controller
const StorageCtrl = (function(){
  // Public methods 
  return {
    storeItem: function(item){
      let items;
      // check i any item in local storage
      if(localStorage.getItem('items') === null){
        items = [];
        // Push new items
        items.push(item);
        // Set localStorage
        localStorage.setItem('items', JSON.stringify(items));
      } else {
        // get what allready in localstoreage
        items = JSON.parse(localStorage.getItem('items'));

        // Push new item
        items.push(item);

        // re set localstoreage
        localStorage.setItem('items', JSON.stringify(items));
      }
    },
    getItemsFromStoreage: function(){
      let items;
      if(localStorage.getItem('items') === null){
        items = [];
      } else {
        items = JSON.parse(localStorage.getItem('items'));
      }
      return items;
    },
    updateItemStoreage: function(updatedItem){
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function(item, index){
        if(updatedItem.id === item.id){
          items.splice(index, 1 , updatedItem);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    deleteItemFromStoreage: function(id){
      let items = JSON.parse(localStorage.getItem('items'));

      items.forEach(function(item, index){
        if(id === item.id){
          items.splice(index, 1);
        }
      });
      localStorage.setItem('items', JSON.stringify(items));
    },
    clearItemFromStoreage: function(){
      localStorage.removeItem('items');
    }
  }

})();


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
    items: StorageCtrl.getItemsFromStoreage(), 
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
    getItemById: function(id){
      let found = null;
      //loop through items
      data.items.forEach(function(item){
        if(item.id === id){
          found = item;
        }
      });
      return found;
    },
    updateListItem: function(name, price){
      // price to number
      price = parseInt(price);

      let found = null;

      data.items.forEach(function(item){
        if(item.id === data.currentItem.id){
          item.name = name;
          item.price = price;
          found = item;
        }
      });
      return found;
    },

    deleteItem:function(id){

      // Get ids
      const ids = data.items.map(function(item){
        return item.id;
      });

      // get index
      const index = ids.indexOf(id);

      // Remove item
      data.items.splice(index,1);
    },

    clearAllItems:function(){
      data.items = [];
      
    },
    setCurrentItem: function(item){
      data.currentItem = item;
    },
    getCurrentItem: function(){
      return data.currentItem
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
    listItems: '#item-list li',
    itemList: '#item-list',
    addBtn: '.add-btn',
    updateBtn: '.update-btn',
    deleteBtn: '.delete-btn',
    backBtn: '.back-btn',
    clearBtn: '.cleat-btn',
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
          <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>
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
      updateListItem : function(item){
        let listItems = document.querySelectorAll(UISelectors.listItems);

        // convert node to array
        listItems = Array.from(listItems);

        listItems.forEach(function(listItems){
          const itemId = listItems.getAttribute('id');
           if(itemId === `item-${item.id}`){
            document.querySelector(`#${itemId}`).innerHTML = `<Strong>${item.name}</Strong> <em>${item.price} Kr</em>
            <a href="#" class="secondary-content"><i class="edit-item fa fa-pencil"></i></a>`;
           }
        },)
      },

      deleListItem:function(id){
        const itemID = `#item-${id}`;
        const item = document.querySelector(itemID);
        item.remove();
      },
      clearInput: function(){
        document.querySelector(UISelectors.itemNameInput).value = '';
        document.querySelector(UISelectors.itemPriceInput).value = '';
      },
      addItemToform: function(){
        document.querySelector(UISelectors.itemNameInput).value = ItemCtrl.getCurrentItem().name;
        document.querySelector(UISelectors.itemPriceInput).value = ItemCtrl.getCurrentItem().price;
        UICtrl.showEditState();
      },
      RemoveItems: function(){
        let listItems = document.querySelectorAll(UISelectors.listItems);

        // turn node list into array
        listItems = Array.from(listItems);

        listItems.forEach(function(item){
          item.remove();
        })
      },
      hideList: function(){
        document.querySelector(UISelectors.itemList).style.display = 'none';
      },
      showTotalPrice: function(totalprice){
        document.querySelector(UISelectors.totalPrice).textContent = totalprice + ' Kr';
      },
      clearEditState: function(e){
        UICtrl.clearInput();
        
        document.querySelector(UISelectors.addBtn).style.display = 'inline';
        document.querySelector(UISelectors.updateBtn).style.display = 'none';
        document.querySelector(UISelectors.deleteBtn).style.display = 'none';
        document.querySelector(UISelectors.backBtn).style.display = 'none';

        
      },
      showEditState: function(){
        

        document.querySelector(UISelectors.addBtn).style.display = 'none';
        document.querySelector(UISelectors.updateBtn).style.display = 'inline';
        document.querySelector(UISelectors.deleteBtn).style.display = 'inline';
        document.querySelector(UISelectors.backBtn).style.display = 'inline';
      },
      getSelectors: function(){
        return UISelectors;

      }
    
  }
  
})();




//app controller
const App = (function(ItemCtrl, StorageCtrl, UICtrl){
  // Load event listners
  let loadEventListners = function(){
    // get UI Selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document.querySelector(UISelectors.addBtn).addEventListener('click', itemAddSubmit);

    // Disabe submit on enter
    document.addEventListener('keypress', function(e){
      if(e.keyCode === 13 || e.which === 13){
        e.preventDefault();
        return false;
      }
    });

    // Edit item event 
    document.querySelector(UISelectors.itemList).addEventListener('click', itemEditClick);

    // Update item event
    document.querySelector(UISelectors.updateBtn).addEventListener('click', itemUpdateSubmit);

     // Delete item event
     document.querySelector(UISelectors.deleteBtn).addEventListener('click', itemDeleteSubmit);

    // Back button event
    document.querySelector(UISelectors.backBtn).addEventListener('click', UICtrl.clearEditState);

    // Clear items event
    document.querySelector(UISelectors.clearBtn).addEventListener('click', clearAllItemsClick);
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

      // STore in Localstorage
      StorageCtrl.storeItem(newItem);

      //clear fields
      UICtrl.clearInput();
    }

    e.preventDefault();
  }

  // Update submit
  const itemEditClick = function (e){
    if(e.target.classList.contains('edit-item')){
      // get list item id
      const listID = e.target.parentNode.parentNode.id;
      
      // break into an array
      const listIdArr = listID.split('-');

      // get the actual id
      const id = parseInt(listIdArr[1]);

      // get item
      const itemToEdit = ItemCtrl.getItemById(id);

      // set current item
      ItemCtrl.setCurrentItem(itemToEdit);

      // Add item to form 
      UICtrl.addItemToform();
    }

    e.preventDefault();
  }

  const itemUpdateSubmit = function(e) {
    //get item input
    const input = UICtrl.getItemInput();

    const updateItem = ItemCtrl.updateListItem(input.name, input.price);

    //update UI
    UICtrl.updateListItem(updateItem);

     // get the total price
     const totalprice = ItemCtrl.getTotalPrice();

     // Add total price to UI
     UICtrl.showTotalPrice(totalprice);

     // update localstorage
     StorageCtrl.updateItemStoreage(updateItem);

     UICtrl.clearEditState();

    e.preventDefault();
  }

  // Delete button event
  const itemDeleteSubmit = function(e){
    
    // get current item
    const currentItem = ItemCtrl.getCurrentItem();

    // Delete from data structure
    ItemCtrl.deleteItem(currentItem.id);

    // Delete from UI
    UICtrl.deleListItem(currentItem.id);

    // get the total price
    const totalprice = ItemCtrl.getTotalPrice();

    // Add total price to UI
    UICtrl.showTotalPrice(totalprice);

    // delete from localstoreage
    StorageCtrl.deleteItemFromStoreage(currentItem.id);

    UICtrl.clearEditState();

    e.preventDefault();
  }

  // Clear items event
const clearAllItemsClick = function(){
  // Delete all items data structure
  ItemCtrl.clearAllItems();

  // get the total price
  const totalprice = ItemCtrl.getTotalPrice();

  // Add total price to UI
  UICtrl.showTotalPrice(totalprice);

  // Remove from UI
  UICtrl.RemoveItems();

  // clear from localstoreage
  StorageCtrl.clearItemFromStoreage();

  // Hide UL
  UICtrl.hideList();

  
}

  //public methods
  return {
    init: function(){
      console.log('init app');
      // clear edit state / set initial state
      UICtrl.clearEditState();

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
})(ItemCtrl, StorageCtrl, UICtrl);

// init app
App.init();