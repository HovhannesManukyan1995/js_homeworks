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
