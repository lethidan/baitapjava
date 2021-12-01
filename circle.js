class Circle {
    constructor(radius, color) {
        this.radius = radius;
        this.color = color;
    }

    getRadius = function () {
        return this.radius;
    };
    
    getColor = function () {
        return this.color;
    }
    
    getArea = function () {
        return Math.PI * this.radius * this.radius;
    };
};



let circle = new Circle(2, 'red');
let radius = circle.getRadius();
let area = circle.getArea();
let color = circle.getColor();
console.log(area + color)

// let Circle = function(radius) {

//     this.radius = radius;
//     this.getRadius = function() {
//         return radius;
//     }
//     this.getArea = function() {
//         return Math.PI * radius * radius;
//     }
// };
// let circle = new Circle(2);
// let radius = circle.getRadius(); // 2

// let area = circle.getArea(); // 12.566370614359172 
// console.log("radius: " + radius + "; area: " + area);

// class Circle {
//     constructor(radius, color) {
//         this.radius = radius;
//         this.color = color;
//     }
//     };
//         this.getRadius = function() {
//             return radius;
//     };
//         this.getColor = function() {
//             return color;
//         }
//         this.getArea = function() {
//             return Math.PI * this.radius * this.radius;
// };
// let circle = new Circle(2, 'red');
// let radius = circle.getRadius();
// let area = circle.getArea();
// console.log(area)