function Person(firstName,lastName,age,gender) {
  this.firstName=firstName;
  this.lastName=lastName;
  this.age=age;
  this.gender=gender;
 }
// student and Teacher inherit the properties of the person
function Student(firstName,lastName,age,gender,academicYr,promotionalClass) {
    Person.call(this,firstName,lastName,age,gender);
    this.academicYr=academicYr;
    this.promotionalClass=promotionalClass;
}

function Teacher(firstName,lastName,age,gender,subject,bankAccount) {
    Person.call(this,firstName,lastName,age,gender);
    this.subject=subject;
    this.bankAccount=bankAccount;
}

// create an instanceof a student

let mia=new Student("Mia","Anderson",17,"female",2022,"y1A");
console.log(mia);