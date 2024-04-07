// class Send {
//     greeting:string;
//     constructor(message:string){
//         this.greeting = message
//     }
//     greet(){
//         return "Hello " + this.greeting
//     }
// }
// let GreeterObj = new Greeter("Workl");
// console.log( GreeterObj.greet())

// class SendEmail {

//     Email:string;
//     constructor(email:string){
//         this.Email = email
//     };
//     sendEmailALlEmploy(){
//         return "Assalamualikum you are not a selected so that' you can't enter my compony" + this.Email
//     }
// }

// let emailArr:string[]

// emailArr = ['towsif@gail.com','towsif@gail.com','towsif@gail.com','towsif@gail.com'];
// emailArr.forEach(emial =>{
//     let send = new SendEmail(emial)

//     console.log(send.sendEmailALlEmploy())
// })
 

class Invoice {
    name :string;
    email:string;
    number:string;
    constructor(cName:string,cEmail:string,Cnumber:string){
        this.name = cName;
        this.email = cEmail;
        this.number = Cnumber;         
    }
     
    sendName(){
        return 'Your name is ' + this.name
    }
    sendEmail(){
        return 'Your email is ' + this.email
    }
    SendNumber(){
        return 'your number is' + this.number
    }
   sendCostomerDetails(){
    return [
        this.sendName(),
        this.sendEmail(),
        this.SendNumber()
    ];
   }
}
const Acostomer = new Invoice("Towsif","towsif@gmail.com","017900000000000");
const Bcostomer = new Invoice("asif","towsif@gmail.com","017900000000000");
let i =0;
 const fun = (Arr:any)=>{
    console.log(i +1)
    i++
    Arr.forEach((e,i)=>(
        console.log(e,i)
    ))
}


fun( Bcostomer.sendCostomerDetails())
fun( Acostomer.sendCostomerDetails())
