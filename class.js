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
var Invoice = /** @class */ (function () {
    function Invoice(cName, cEmail, Cnumber) {
        this.name = cName;
        this.email = cEmail;
        this.number = Cnumber;
    }
    Invoice.prototype.sendName = function () {
        return 'Your name is ' + this.name;
    };
    Invoice.prototype.sendEmail = function () {
        return 'Your email is ' + this.email;
    };
    Invoice.prototype.SendNumber = function () {
        return 'your number is' + this.number;
    };
    Invoice.prototype.sendCostomerDetails = function () {
        return [
            this.sendName(),
            this.sendEmail(),
            this.SendNumber()
        ];
    };
    return Invoice;
}());
var Acostomer = new Invoice("Towsif", "towsif@gmail.com", "017900000000000");
var Bcostomer = new Invoice("asif", "towsif@gmail.com", "017900000000000");
var i = 0;
var fun = function (Arr) {
    console.log(i + 1);
    i++;
    Arr.forEach(function (e, i) { return (console.log(e, i)); });
};
fun(Bcostomer.sendCostomerDetails());
fun(Acostomer.sendCostomerDetails());
