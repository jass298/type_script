var Fruits = /** @class */ (function () {
    function Fruits(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
    Object.defineProperty(Fruits.prototype, "proId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fruits.prototype, "proName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Fruits.prototype, "proPrice", {
        get: function () {
            return this.price;
        },
        set: function (value) {
            var maxprice = 0;
            if (value > this.price) {
                this.price = value;
                console.log("Updated price: ".concat(this.price));
            }
        },
        enumerable: false,
        configurable: true
    });
    Fruits.prototype.greet = function () {
        console.log(" ".concat(this.id, ",").concat(this.name, ",is ").concat(this.price, " rupees."));
    };
    return Fruits;
}());
var apple = new Fruits(1, "apple", 30);
var mango = new Fruits(2, "mango", 40);
var orange = new Fruits(3, "orange", 50);
var banana = new Fruits(4, "banana", 25);
var cherry = new Fruits(5, "cherry", 60);
console.log(apple.proPrice);
console.log(mango.proPrice);
console.log(orange.proPrice);
console.log(banana.proPrice);
console.log(cherry.proPrice);
// Add fruits to an array
var fruitsArray = [apple, mango, orange, banana, cherry];
// Find the fruit with the max price
var maxFruit = fruitsArray.reduce(function (prev, current) {
    return current.proPrice > prev.proPrice ? current : prev;
});
console.log("\n\uD83C\uDF52 The fruit with the highest price is: ".concat(maxFruit.proName, " at \u20B9").concat(maxFruit.proPrice, "\n"));
fruitsArray.forEach(function (fruit) { return fruit.greet(); });
