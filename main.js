"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle_1 = require("./Rectangle");
var Circle_1 = require("./Circle");
var Square_1 = require("./Square");
var arr = [];
var rect = new Rectangle_1.Rectangle(20, 10, "Rectangle");
var circle = new Circle_1.Circle("Circle", 10);
var circle2 = new Circle_1.Circle("Circle2", 20);
var square = new Square_1.Square("Square", 10);
var square2 = new Square_1.Square("Square", 10);
arr.push(rect, circle, square, square2, circle2);
console.log(arr);
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var i = arr_1[_i];
    console.log(i.show() + " Area " + i.calculateArea());
    if (i instanceof Square_1.Square) {
        i.howToColor();
    }
}
