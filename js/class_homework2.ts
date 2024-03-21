class Restorant{
    private items: string[] =["borsh","stalichni","julien"];
    private prices: number[]=[100,200,1000];
    private ratings: number[]=[5,7,6];

    showMenu():void {
        for(let i=0;i< this.items.length;i++){
            console.log(`Item-${this.items[i]}, Price-${this.prices[i]}, Rating-${this.ratings[i]}`)
        }
        
    }
    addItems(item: string, price: number, rating: number):void{
        if(this.items.indexOf(item)!==-1){console.log("You allready have this item")}
        else{this.items.push(item)
            this.prices.push(price)
            this.ratings.push(rating)}
    }
    removeItems(item:string):void{
        if(this.items.indexOf(item)===-1){console.log("You dont have such item to remove")}
        else{
            let index=this.items.indexOf(item);
            this.items.splice(index,1);
            this.prices.splice(index,1);
            this.ratings.splice(index,1);        
        }
    }
    calculateAverajeRating():void{
        let rating: number = 0;
        for(let i of this.ratings){
          rating+=i;  
        };
        console.log(`Your items average rating is-${rating/this.ratings.length}`)
    }
}
let florence = new Restorant()
florence.showMenu();
florence.addItems("jarit",100,8);
florence.addItems("borsh",500,7);
florence.showMenu();
florence.removeItems("borsh");
florence.showMenu();
florence.calculateAverajeRating();


class book{
    private bookings:{[key:number]:string}={} ;
    private id_count: number =1;
    
    addReserv(from: string, where: string, hotel: string):void{
        this.bookings[this.id_count]=(`ID--${this.id_count}, Hotel--${hotel}, From--${from}, Where--${where}`);
        this.id_count++;
         
    }
    showBooking():void{
        console.log(this.bookings);
    }
   removeReserv(id: any): void{
        
        if(this.bookings[id]===undefined){console.log("You dont have booking on this id")}
        else{
          delete this.bookings[id]
            
        }
    }
}
let John = new book();
John.addReserv("Armenia","Egipt","Mariot");
John.addReserv("Armenia","Egipt","Mariot");
John.addReserv("Armenia","Egipt","Mariot");
John.showBooking();
John.removeReserv(2);
John.showBooking();
John.removeReserv(2);
