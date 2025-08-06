function add(x, y) {
    return x + y;
}
add(4, 5);
var age = 30;
if (age < 50) {
    age += 10;
}
console.log(age);
function numbers(x, y) {
    return x + y;
}
var sum = numbers(5, 10);
console.log(sum);
//3
var addnumbers = function (a, b) {
    return a - b;
};
console.log(addnumbers(10, 5));
//4
var k = 1;
function test() {
    var c = 2;
    return c++;
}
test();
test();
console.log("k " + k);
//5
var t = 0; // variable t is declared in global scope.
function test2() {
    var t = 10; //variable t is again redeclared inside function with value 10, so here t is local to the function and changes done to it will remain inside the function.
    return t;
    console.log("t " + t);
}
test2(); // will return 10.
console.log(t); // will console 0.
//6
var a = 10;
var marks = 150;
var price = 10.2;
//  a.toFixed() ;
console.log('simple a = ' + a);
console.log('simple a toFixed = ' + a.toFixed());
console.log('simple marks = ' + marks);
console.log(' marks valueOf = ' + marks.valueOf());
console.log('simple price = ' + price);
console.log(' price toString = ' + price.toString());
console.log(' price toPrecision = ' + price.toPrecision()); // will return 10.20
console.log(' price toPrecision(2) = ' + price.toPrecision(2)); // will return 10.20
