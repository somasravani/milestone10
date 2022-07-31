<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>
<h2>Pen constructor function that has name, color, and price properties. Use new keyword with the Pen constructor to create an object pen1. Add a new function to the Pen constructor. To do this we need to add the function into the prototype property of Pen. showPrice method should be called and execute the showprice method</h2>
<script>
function Pen(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}
const pen1 = new Pen("Marker", "Blue", "$3");
Pen.prototype.showPrice = function(){
    document.write(`Price of ${this.name} is ${this.price}`);
}
pen1.showPrice();
</script>
</body>
</html>