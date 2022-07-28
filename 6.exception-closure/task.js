function parseCount(input){
let parseInput = Number.parseInt(input);
if(isNaN(parseInput)){
    const error = new Error("Невалидное значение")
    throw error;
} 
return parseInput

}

function validateCount(valueTwo) {
    try {
        return parseCount(valueTwo);
    } catch (e) {
        return e;
    }
}

// Задача №2

class Triangle{
    constructor (a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if ((this.a + this.b)<this.c || (this.a + this.c)<this.b || (this.b + this.c)<this.a){
            throw new Error("Треугольник с такими сторонами не существует");
        }
     }
     getPerimeter(){
        return this.a + this.b + this.c;
     }

     getArea(){
        let halfPerimeter = this.getPerimeter()/2;
        let area = Math.sqrt( halfPerimeter * (halfPerimeter - this.a)*(halfPerimeter- this.b)*(halfPerimeter - this.c));
        return  +area.toFixed(3);
     }
     
}
function getTriangle(a, b, c){
    try {
        return new Triangle(a,b,c);;
    } catch (e) {
        return {
            getPerimeter(){
            return "Ошибка! Треугольник не существует"
            },
            getArea(){
            return "Ошибка! Треугольник не существует"
            }
         }
    }
}