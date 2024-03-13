var mobile ={
    brand: 'samsung',
    price: 40000,
    color: 'Nill',
    Ram: 4
}

var myComputer = {
    brand: 'Hp',
    price: 50000,
    color: 'silver',
    Ram: '8',
    processor: 'i5'
}

console.log(myComputer.price);
myComputer.processor = 'i7';
console.log(myComputer.processor);
console.log(mobile.brand);

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25
}
//when you know the specific property name use dot notation to get the property value
var penCount = shoppingCart.pen;
console.log(penCount);
//alternative system
var penCount1 = shoppingCart['pen'];
//console.log(shoppingCart);
var properties = Object.keys(shoppingCart);
console.log(properties);
var propertiesValue = Object.values(shoppingCart);
console.log(propertiesValue);

var propertyName = 'books';
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

//set property value
shoppingCart[propertyName] = 45;
shoppingCart.mouse = 14;
console.log(shoppingCart);
shoppingCart['mouse'] = 25;
console.log(shoppingCart);