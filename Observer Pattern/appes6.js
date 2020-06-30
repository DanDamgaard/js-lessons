class EventObservers {
  constructor() {
    this.observers = [];
  }  
  subscribe(fn){
    this.observers.push(fn);
    console.log(`You are now subscribed to ${fn.name}`);
  }

  unsubscribe(fn){
    /* Filter out from the list whatever matches the callback function. If there is no match, the callback gets to stay on the list. The filter returns a new list and reassigns the list of observers. */
    this.observers = this.observers.filter(function(item){
      if (item !== fn) {
        return item;
      }
    });
    console.log(`You are now unsubscribed from ${fn.name}`);
  }

  fire(){
    

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

document.querySelector('.sub-m').addEventListener('click', 
  function() {
    click.subscribe(getCurMins);
});

document.querySelector('.unsub-ms').addEventListener('click', 
  function() {
    click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.unsub-s').addEventListener('click', 
  function() {
    click.unsubscribe(getCurSeconds);
});

document.querySelector('.unsub-m').addEventListener('click', 
  function() {
    click.unsubscribe(getCurMins);
});

document.querySelector('.fire').addEventListener('click', 
  function() {
    click.fire();
});

//click handler
const getCurMilliseconds = function() {
  const times = document.getElementById('times');
  const row = document.createElement('tr');
  row.innerHTML = `<br><br><td>Current Millieseconds: ${new Date().getMilliseconds()}</td>`;
  times.appendChild(row);
}

const getCurSeconds = function() {
  const times = document.getElementById('times');
  const row = document.createElement('tr');

  row.innerHTML= `<br><br><td>Current Seconds: ${new Date().getSeconds()}</td>`;
  times.appendChild(row);
}

const getCurMins = function() {
  const times = document.getElementById('times');
  const row = document.createElement('tr');

  row.innerHTML= `<br><br><td>Current Minutes: ${new Date().getMinutes()}</td>`;
  times.appendChild(row);
}