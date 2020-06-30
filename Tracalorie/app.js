// storage controller

//item controller 
const ItemCtrl = (function(){
  // Item Constuctor
  const Item = function(id, name, price){
    this.id;
    this.name;
    this.price;
  }

  // Data structure / State
  const data = {
    items: [
      {id: 0, name: 'stake', price: 210},
      {id: 0, name: 'cookie', price: 10},
      {id: 0, name: 'eggs', price: 20}
    ], 
    currentItem: null,
    totalPrice: 0
  }

  //public methods
  return {
    getItems: function(){
      return data.items
    },
    logData: function(){
      return data;
    }
  }
})();




//ui controller
const UICtrl = (function(){
  const UISelectors = {
    itemList: '#item-list'
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
      }
    
  }
  
})();




//app controller
const App = (function(ItemCtrl, UICtrl){
  
  //public methods
  return {
    init: function(){
      console.log('init app');
      // get items items from data stucture
      const items = ItemCtrl.getItems();
      
      //populate list with items
      UICtrl.populateItemList(items);
    }
  }
})(ItemCtrl, UICtrl);

// init app
App.init();