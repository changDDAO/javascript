class Person{
    constructor(name, age, address){
     this.name = name;
     this.age = age;
     this.address = address;
    }
    printMyname(){
        console.log(`my name is ${this.name}`);
    }
}
const person1 = new Person('changho', 29, 'korea');
console.log(`my name is ${person1.name}`);