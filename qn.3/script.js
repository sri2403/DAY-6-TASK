class Person{
    constructor(firstName,lastName,age,gender,city,work){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
        this.gender=gender;
        this.city=city;
        this.work=work;
    }
    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
    greet(){
        return `Hii, my name is ${this.getFullName()},a ${this.work} from ${this.city}. Nice to meet you!`;
    }
}
const person1=new Person("Sri","Harini",21,"Female","Madurai","software developer");
console.log(person1.greet());