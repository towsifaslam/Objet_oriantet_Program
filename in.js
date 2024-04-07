// class Car {
//     Color:string;
//     Size:string
//     constructor(color:string,size:string){
//         this.Color = color
//         this.Size = size;
//     }
// }
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Costomer = /** @class */ (function () {
    function Costomer(bag, set, staff, tolly, item) {
        this.Bag = bag;
        this.Set = set;
        this.Staff = staff;
        this.Tolly = tolly;
        this.Item = item;
    }
    return Costomer;
}());
var Dcostomer = /** @class */ (function (_super) {
    __extends(Dcostomer, _super);
    function Dcostomer(bag, set, staff, tolly, item, price) {
        var _this = _super.call(this, bag, set, staff, tolly, item) || this;
        _this.Price = price * item.length;
        return _this;
    }
    Dcostomer.prototype.display = function () {
        !this.Bag ? console.log('Oda beg lagbe nah ') : console.log('Please taratari an ');
        console.log("Amr set number holo ", +this.Set);
        !this.Staff ? console.log('Oda beg lagbe nah ') : console.log('Please taratari an ');
        console.log(this.Price);
    };
    return Dcostomer;
}(Costomer));
var Ecostomer = /** @class */ (function (_super) {
    __extends(Ecostomer, _super);
    function Ecostomer(bag, set, staff, tolly, item, price) {
        var _this = _super.call(this, bag, set, staff, tolly, item) || this;
        _this.Price = price + item.length;
        return _this;
    }
    Ecostomer.prototype.display2 = function () {
        !this.Bag ? console.log('Oda beg lagbe nah ') : console.log('Please taratari an ');
        console.log("Amr set number holo ", +this.Set);
        !this.Staff ? console.log('Oda beg lagbe nah ') : console.log('Please taratari an ');
        console.log(this.Price);
    };
    return Ecostomer;
}(Costomer));
var abj = new Ecostomer(true, 34, false, false, ['to', 'kdjf', 'kdj'], 34);
abj.display2();
