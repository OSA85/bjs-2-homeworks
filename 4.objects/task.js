function Student(name, gender, age) {
   this.name = name;
   this.gender = gender;
   this.age = age;
   this.setSubject;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  // if(this.marks === undefined){ 
  //   this.marks = [mark];
  //   } else {
  //     this.marks.push(mark);
  //   }
  (this.marks === undefined) ? this.marks = [mark] : this.marks.push(mark);
}

Student.prototype.addMarks = function (...marks) {
  // if(this.marks === undefined){ 
  //   this.marks = [...marks];
  //   } else {
  //     this.marks.push(...marks);
  //   }
  (this.marks === undefined) ? this.marks = [...marks] :  this.marks.push(...marks);
}

Student.prototype.getAverage = function () {
  return this.marks.reduce((accum, mark) => accum + mark, 0)/this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subjectNamel;
  this.excluded = reason;
}
 