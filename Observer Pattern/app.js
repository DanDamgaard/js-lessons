function EventObservers() {
  this.observers = [];
}

EventObservers.prototype = {
  subscribe: function(fn) {
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  },
  unsubscribe: function(fn) {
    /* Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers. */
    this.observers = this.observers.filter(function(item){
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  },
  fire: function() {
    this.observers.forEach(function(item){
      item.call();
    
    });
  }
}

const click = new EventObservers();

// Event listners
document.querySelector('.sub-ms').addEventListener('click', 
  function() {
    click.subscribe(getCurMilliseconds);
});

document.querySelector('.sub-s').addEventListener('click', 
  function() {
    click.subscribe(getCurSeconds);
});

document.querySelector('.unsub-ms').addEventListener('click', 
  function() {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.unsub-s').addEventListener('click', 
  function() {
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.fire').addEventListener('click', 
  function() {
    click.fire();
});

//click handler
const getCurMilliseconds = function() {
  console.log(`Current Millieseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function() {
  console.log(`Current Seconds: ${new Date().getSeconds()}`);
}