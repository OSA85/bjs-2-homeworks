function cachingDecoratorNew(func) {
  let cache = [];
  function wrapper(...args) {
    const hash =  args.join(','); 
    let idx = cache.findIndex((item)=> item.hash === hash); 
    if (idx !== -1 ) { 
        console.log("Из кэша: " + cache[idx].result); 
        return "Из кэша: " + cache[idx].result;
    }

    let result = func(...args); 
    cache.push({hash, result}) ; 
    if (cache.length > 5) { 
      cache.splice();
    }
    console.log("Вычисляем: " + result);
    return "Вычисляем: " + result;  
}
return wrapper;

}

function debounceDecoratorNew(func, delay) {
  let flag = false;
  return function (...args){
    if (flag){
      return;  
    }
    const result = func(...args);
    flag = true;
    setTimeout(() => flag = false, delay)
      return result;
  }
}

function debounceDecorator2(func, delay) {
  let count = 0;
  function wrapper() {
    wrapper.history = count++;
  let flag = false;
  return function (...args){
    if (flag){
      return;  
    }
    const result = func(...args);
    flag = true;
    setTimeout(() => flag = false, delay)
      return result;
  }
  }
  return wrapper;
}

