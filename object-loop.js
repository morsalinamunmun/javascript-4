// array vs object
var shoppingCart = ['books', 'sunglass', 'shoes'];
var friendsAge = [12, 34, 54, 20];

var friendsAge = {
    rahim: 20,
    karim: 30,
    jodu: 34,
    modu: 23,
    kamal: 26
}

var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 4
}

const keyV = Object.keys(shoppingCart);
//console.log(keyV);

const values = Object.values(shoppingCart);
//console.log(values);

for(var i = 0; i < keyV.length; i++){
   //console.log(keyV[i]);
   var propertyN = keyV[i];
   var propertyV = shoppingCart[propertyN];
   console.log(propertyN, propertyV);
}

//for in loop

for(var propertyN in shoppingCart){
    const value = shoppingCart[propertyN];
    console.log(propertyN, value);
}


