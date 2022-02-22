function Person(myName,myAge,myGender) {
    this.name=myName;
    this.age=myAge;
    this.gender=myGender;
    this.greeting= function(){
       return("I am "+this.name.firstName +" and aged " +this.age);
    }
}
 let iratuzi=new Person({firstName:"Iratuzi", lastName:"Tsikeni"},16,"female");
//  console.log(iratuzi.name);
//  console.log(iratuzi.greeting());

 function Vehicle(name,manufacturer,plate){
     this.name=name;
     this.manufacturedBy=manufacturer;
     this.plate=plate;
 }

 let benz= new Vehicle("mercedes-benz","Daimler","XTK999");
 console.log(benz.name);
 console.log(benz.manufacturedBy);