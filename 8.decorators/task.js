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
    setTimeout(() => flag = false, delay)
    return;  
    }
    const result = func(...args);
    flag = true;
      return result;
  }
}

function debounceDecorator2(func, delay) {

  function wrapper() {
    wrapper.count ++;
    return debounceDecoratorNew(func ,delay);
  }
  wrapper.count = 0;
  
  return wrapper;
}

const sendSignal = () => console.log("Сигнал отправлен");
const upgradedSendSignal = debounceDecoratorNew(sendSignal, 2000);
setTimeout(upgradedSendSignal); // Сигнал отправлен
setTimeout(upgradedSendSignal, 300); // проигнорировано так как от последнего вызова прошло менее 2000мс (300 - 0 < 2000)
setTimeout(upgradedSendSignal, 900); // проигнорировано так как времени от последнего вызова прошло: 900-300=600 (600 < 2000)
setTimeout(upgradedSendSignal, 1200); // проигнорировано так как времени от последнего вызова прошло: 1200-900=300 (300 < 2000)
setTimeout(upgradedSendSignal, 2300); // проигнорировано так как времени от последнего вызова прошло: 2300-1200=1100 (1100 < 2000)
setTimeout(upgradedSendSignal, 4400); // Сигнал отправлен так как времени от последнего вызова прошло: 4400-2300=2100 (2100 > 2000)
setTimeout(upgradedSendSignal, 4500); // Сигнал будет отправлен, так как последний вызов debounce декоратора (спустя 4500 + 2000 = 6500) 6,5с ??????
