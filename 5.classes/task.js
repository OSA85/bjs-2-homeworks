//  Задача №1


class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this._state = this.state * 1.5;
    }


    set state(oldState){
        if (oldState <= 0){
            return this._state = 0;
        }
        if(oldState >= 100){
            return this._state = 100;
        } else {
            return this._state = oldState;
        }
    }

    get state() {
        return this._state; 
     }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount){
       super(name, releaseDate, pagesCount);
       this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount){
       super(name, releaseDate, pagesCount);
       this.author = author;
       this.type = "book";
    }
}

class NovelBook extends Book {
    constructor( author, name, releaseDate, pagesCount){
       super(author, name, releaseDate, pagesCount);
       this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor( author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
       this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor( author, name, releaseDate, pagesCount){
        super(author, name, releaseDate, pagesCount);
       this.type = "detective";
    }
}

//  Задача №2

class Library {
    constructor (name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            let book = Object.entries(this.books[i]);
            for (let j = 0; j < book.length; j++) {
                if (book[j][0] === type && book[j][1] === value)
                return this.books[i];
            }
        } 
        return null;
    }  


    giveBookByName(bookName){
       let book = this.findBookBy("name", bookName)
       if (book != null)
       this.books.splice(this.books.indexOf(book),1)
       return book;
    }

    }

    //  Задача №3

class Student {
    constructor (name) {
   this.name = name;
   this.subjects = [];
}

setSubject (subjectName) {
  this.subjects.push(subjectName);
}

addMark (mark, subjectName) {
   if (mark < 1 || mark > 5) return 'Ошибка, оценка должна быть числом от 1 до 5';
  (this.subjects[subjectName] === undefined) ? this.subjects[subjectName] = [mark] : this.subjects[subjectName].push(mark);
}

getAverageBySubject(subjectName) {
    if (this.subjects[subjectName] === undefined || this.subjects[subjectName] === null ) return `По предмету ${subjectName} нет оценок`;
  return this.subjects[subjectName].reduce((accum, mark) => accum + mark, 0)/this.subjects[subjectName].length;
}

getAverage(){
    let sumMiddleMark = 0;
    let subjectName = Object.keys(this.subjects);
    subjectName.forEach(el => {sumMiddleMark += this.getAverageBySubject(el)})
    return sumMiddleMark/subjectName.length
}
exclude (reason) {  
  delete this.subjects;
  this.excluded = reason;
  return  reason;
}

}
