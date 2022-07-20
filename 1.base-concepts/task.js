"use strict"

function solveEquation(a, b, c) {
  let arr;
  let x;
  let D = b**2-4*a*c;
  if (D < 0){
    arr = [];
  } else{
  if (D === 0){
    if (a === 0 && b === 0){
      arr = {x: "бесконечное множество решений"}

    } else {
    x = -b/(2*a);
    arr = [x];
  } }
  if (D > 0) {
    let x1 = (-b + Math.sqrt(D) )/(2*a);
    let x2 = (-b - Math.sqrt(D) )/(2*a);
    arr = [x1, x2];
  }
  }

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, date) {
    if (isNaN(percent)){
    return `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  } else{
    if (isNaN(contribution)){
     return `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
    } else {
      if (isNaN(amount)){
        return `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`;
      }else{
   let startDate = new Date(); // дата сегодня
    let endDate = new Date(date); //дата окнчания
    let S = amount - contribution;
   let n = endDate.getMonth() - startDate.getMonth() + (12 * (endDate.getFullYear() - startDate.getFullYear()));
   let P = percent/100/12;
    let payment = S * (P + (P / (((1 + P)**n) - 1)));
   let totalAmount = Math.round(payment * n * 100)/100;
    console.log(totalAmount);
    return totalAmount;
        }
     }
   }
  
}
