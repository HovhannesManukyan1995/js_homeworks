abstract class Shape{
    color: string;
    getPerimeter():void{}
}
class circle extends Shape{
    constructor(public rad: number, public color: string ){
        super()

    }
    getPerimeter():void{
        let radius= 2 * 3.14 * this.rad
        console.log("Radius=", radius, "color=", this.color)
    }
}

class rectangle extends Shape{

    constructor(public width: number, public length: number, public color: string){
        super()

    }
    getPerimeter():void{
        let area=this.width*this.length;
        console.log("Area of rectangle=", area, "color=", this.color)
    }


}
let circle1=new circle(2, "blue")
circle1.getPerimeter();
let rectangle1=new rectangle(2,3,"red")
rectangle1.getPerimeter()


abstract class Animals{
    protected name: string;
    abstract makeSound():void;
}
class Lion extends Animals{
    public sound: string ="RRRRRRR";
    constructor(public name: string ){
        super()
        
    }
    makeSound():void{
        console.log("Name of lion is", this.name, "and he make sound like", this.sound)
    }
}

class Cat extends Animals{
    public sound: string ="Miau";
    constructor(public name: string ){
        super()
        
    }
    makeSound():void{
        console.log("Name of cat is", this.name, "and he make sound like", this.sound)
    }
}

let lion=new Lion("Alex")
lion.makeSound();
let cat = new Cat("Garfild")
cat.makeSound()







abstract class Employee{
    protected id: number;
    protected name: string;
    protected salary: number;
    abstract calculateSalary():void;
}
class FullTimeEmployee extends Employee{
    public hour: number = 8;
    constructor(public name: string, public id: number, public salary: number ){
        super()
        
    }
    calculateSalary():void{
        let salary_per_day= this.salary* this.hour
        console.log("Name of Employee is", this.name, "his id is", this.id, "and his salary per day is", salary_per_day,"$")
    }
}
class PartTimeEmployee extends Employee{
    public hour: number = 5;
    constructor(public name: string, public id: number, public salary: number ){
        super()
        
    }
    calculateSalary():void{
        let salary_per_day= this.salary* this.hour
        console.log("Name of Employee is", this.name, "his id is", this.id, "and his salary per day is", salary_per_day,"$")
    }
}

let employee1=new FullTimeEmployee("John",1,8)
employee1.calculateSalary();
let employee2=new PartTimeEmployee("Jack",2,8)
employee2.calculateSalary()





// 17
class Student {
    private name: string;
    protected studentId: number;

    constructor(name: string, studentId: number){
        this.name=name;
        this.studentId=studentId;
        };
    public displayInfo(): void {
        console.log(this.name,this.studentId)
    };
}
let student=new Student("john",1)
student.displayInfo();


//18
class BankAccount {
    private accountNumber: string;
    protected balance: number;
    constructor(accountNumber: string){
        this.accountNumber = accountNumber;
        this.balance = 0;
    }
    public deposit(amount: number): void{
        this.balance+=amount
        console.log("your ballance deposit=",this.balance)
    }
    public withdraw(amount: number):void{
        this.balance-=amount
        console.log("your balance withdraw =", this.balance)
    }
}
let john=new BankAccount("John")
john.deposit(50)
john.withdraw(20)


//19
class Car{
    protected make: string;
    protected model: string;
    constructor(make: string, model: string){
        this.make = make;
        this.model = model;
    }
    public getCarInfo(): string{
        return `your car is ${this.make} with model ${this.model}`
    }
}
let car= new Car("mers","S140")
console.log(car.getCarInfo())

//20
class Animal{
    protected name: string;
    private age: number;
    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    public introduce(): string {
        return `Name of animal is ${this.name} and age is ${this.age}`
    }
    
}
let horse = new Animal("buyan",4)
console.log(horse.introduce())

//21
class Counter{
    static count: number = 0;

    static increment():void {
        Counter.count++
    }
    static getCount(): number{
        return Counter.count
    }
}

Counter.increment();
Counter.increment();
Counter.increment();

console.log(Counter.getCount())

//22

class colculator{
    static add(num: number, num2: number):number{
        return num+num2
    }

    static substract(num: number, num2: number):number{
        return num-num2
    };

    static multiply(num: number, num2: number):number{
        return num*num2
    };

    static divide(num: number, num2: number):any{
      if(num === 0 || num2 ===0){
        return "divide with 0 not allowed"
      }else{
        return num/num2
      }
    }
}
console.log(colculator.add(5,2));
console.log(colculator.substract(5,2));
console.log(colculator.multiply(5,2));
console.log(colculator.divide(5,2));
console.log(colculator.divide(5,0));
