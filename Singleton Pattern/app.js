const Singeleton = (function(){
  let instance;

  function createInstance() {
    const object = new Object('Object instance');
    return object;
  }

  return {
    getInstance: function(){
      if(!instance){
        instance = createInstance();
      }
      return instance;
    }
  }
})();

const instanceA = Singeleton.getInstance();
const instanceB = Singeleton.getInstance();

console.log(instanceA);
console.log(instanceB === instanceA);