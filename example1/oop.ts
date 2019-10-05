// Exercise 1 - How was your TypeScript Class?
class Car {
    private name: string;
    private _acceleration: number = 0;

    constructor(name){
        this.name = name;
    }

    honk(){
        console.log("Toooooot");
    }

    accelerate(speed) {
        this.acceleration = this.acceleration + speed;
    }

    get acceleration(): number{
        return this._acceleration

    }

    set acceleration(speed:number){
        this._acceleration = speed
    }
}

var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 - Two objects, based on each other ...
var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());

class BaseObject{
    private _width: number
    private _length: number

    set width(width:number){
        this._width = width
    }

    get width(){
        return this._width
    }

    set length(length:number){
        this._length = length
    }
    get length(){
        return this._length
    }

    constructor(width:number, length:number){
        this.width = width
        this.length = length
    }
}

class Rectangle extends BaseObject{

    constructor(width:number, length:number){
        super(width,length)
    }
    calcSize():number{
        return this.width * this.length
    }
}

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);
