// class Car {
//     Color:string;
//     Size:string
//     constructor(color:string,size:string){
//         this.Color = color
//         this.Size = size;
//     }
// }

// class Audi extends Car{
//     Price:number;
//     constructor(color:string,size:string,price:number){
//         super(color,size)
//         this.Price = price
//     }
//     display():void{
//         console.log('Color of Audi car ' + this.Color)
//         console.log('Color of Audi car ' + this.Size)

//         console.log('Price of Audi car ' + this.Price)

//     }
// }

// let obj = new Audi('Black','45',7976);

// obj.display()


class Costomer {
    Bag:boolean;
    Set:Number;
    Staff:boolean;
    Tolly:boolean;
    Item:string[]
    constructor(bag:boolean,set:number,staff:boolean,tolly:boolean,item:string[]){
        this.Bag = bag;
        this.Set = set;
        this.Staff = staff;
        this.Tolly = tolly
        this.Item = item
    }
     

}

class Dcostomer extends Costomer{
   Price:Number;
   constructor(bag:boolean,set:number,staff:boolean,tolly:boolean,item:string[],price:number){
    super(bag,set,staff,tolly,item);
     this.Price = price *item.length
   }
    display():void{
        !this.Bag?console.log('Oda beg lagbe nah '):console.log('Please taratari an ')
        console.log("Amr set number holo ",+this.Set);
        !this.Staff?console.log('Oda beg lagbe nah '):console.log('Please taratari an ')
           console.log(this.Price)
    }
}

class Ecostomer extends Costomer{
    Price:Number;
    constructor(bag:boolean,set:number,staff:boolean,tolly:boolean,item:string[],price:number){
        super(bag,set,staff,tolly,item);
        this.Price = price +item.length
    }
   display2():void{
    !this.Bag?console.log('Oda beg lagbe nah '):console.log('Please taratari an ')
    console.log("Amr set number holo ",+this.Set);
    !this.Staff?console.log('Oda beg lagbe nah '):console.log('Please taratari an ')
       console.log(this.Price)
   }
    
}
 let abj = new Ecostomer(true,34,false,false,['to','kdjf','kdj'],34)
 abj.display2()
 