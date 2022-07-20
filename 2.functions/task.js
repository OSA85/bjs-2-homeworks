// Задание 1
function getArrayParams(arr) {
  let min = arr[0], max = arr[0], sum = 0;

for (i =0; i<arr.length; i++){
  sum += arr[i];
if (arr[i]<min){
  min = arr[i];
} 
if (arr[i]>max) {
  max = arr[i];
}
}
let avg = sum/arr.length;
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}


// Задание 2
function worker(arr) {
  let sum = arr.reduce((accum,el) => accum + el,0);
  return sum;
}

function makeWork(arrOfArr, func) {
  let max = func(arrOfArr[0]);

  for (let i = 0; i < arrOfArr.length; i++){
     sumOfArr = func(arrOfArr[i]);
     if (max < sumOfArr){
      max = sumOfArr
     }
  }
  return max;
}

// Задание 3
function worker2(arr) {
  let max = arr[0];
  let min = arr[0];
  arr.forEach(el => {
    if (max < el){
      max = el
     }
     if (min > el){
      min = el
     }
  }); 
  let result = max - min ;
  return  result;
 }