abstract class Person {
 
    name: string;
    surname: string
    constructor(userName: string, userSurname: string) {
 
        this.name = userName;
        this.surname = userSurname;
    }
    
}
 
class Employee extends Person {
 
    company: string;
    constructor(name: string, surname: string, company: string) {
   
        super(name, surname);
        this.company = company;
    }
    work(): void {
        console.log(`${this.name} ${this.surname} работает в компании ${this.company}`);
    }
}
class Manager extends Employee {
    
    manager: string
    private myArray: string[];
   
    constructor(name: string, surname: string, company:string, pashton: string ){
        super(name, surname, company)
        this.manager = pashton
        this.myArray = ["John Smith","Ara Gexecik","Jason Voorhees"]
    }
    

    show():void{
        console.log(`Hello I am ${this.name} ${this.surname} and I am  ${this.manager} in company ${this.company}`)
        console.log(`Here is my workers list-- ${this.myArray.join()}`)
    }
    hire(worker):void{
        this.myArray.push(worker);
        
        console.log(`I hire new employee, his name is ${worker} and my workers list now is --- ${this.myArray}`)    
    }
    fire(worker):void{
        let  index = this.myArray.indexOf(worker)
        if(index<0){
            console.log(`We dont have employee with name ${worker}  to fire`);
        }else{let removed: string[] = this.myArray.splice(index,1)
              console.log(`I fire employee, his name is ${worker} and my workers list now is --- ${this.myArray}`)}
        
        
            
        
    }
    
}
 
let bob: Manager = new Manager("John","Smith", "Apple","CIO");
bob.show();    
bob.hire("Jimmi Jones");
bob.fire("Jimmi Jone");
