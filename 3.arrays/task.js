function compareArrays(arr1, arr2) {
  let result;
  if (arr1.length === arr2.length){ 
    result = arr1.every((el,i) => el === arr2[i])
  }
  else{
   result = false;
  }
  return result; // boolean
}


function advancedFilter(arr) {
  return arr.filter(el => el > 0 && el%3 === 0).map(el => el * 10);
}
