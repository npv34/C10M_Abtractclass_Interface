import {Rectangle} from "./Rectangle";
import {Circle} from "./Circle";
import {Square} from "./Square";

const arr: any[] = [];
const rect: Rectangle = new Rectangle(20, 10, "Rectangle");
const circle: Circle = new Circle("Circle", 10);
const circle2: Circle = new Circle("Circle2", 20);
const square: Square = new Square("Square", 10);
const square2: Square = new Square("Square", 10);
const square3: Square = new Square("Square", 10);
const square4: Square = new Square("Square", 10);
arr.push(rect, circle, square, square2, circle2, square3, square4);
for (const i of arr) {
    console.log(i.show() + " Area " + i.calculateArea());

    // kiem tra type cua 1 object co thuoc Square khong?
    if (i instanceof Square) {
        i.howToColor();
    }
}

const full_name = "full_name";
const fullName = "full";
