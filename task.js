//1. write a function called foo() which prints "foo" and a function called bar() which prints "bar". call function bar() in the foo() function after printing what will be the output? Now call the foo() to see the output.
function foo(){
    console.log('foo');
}
foo();

function bar(){
    console.log('bar');
}
bar();

//2. write a function called make_avg() which will take an three integers and return the average of those values.

/*function make_avg(num1, num2, num3){
    const averageNumbers = (num1 + num2 + num3) / 3;
    return averageNumbers;
}
console.log(make_avg(23, 20, 19));*/

//2. write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
/*function make_avg(numbers){
    let totalNumber = 0;
    for(let i = 0; i < numbers.length; i++){
        totalNumber += numbers[i];
    }
    const averageNumbers = totalNumber/3;
    return averageNumbers;
    
}
console.log(make_avg([23, 20, 19]));*/

//4. write a function called odd_even() which takes an integer value and tells whether this value is even or odd. you need to do it in 4 ways. (1) has return + has parameter (2) no return + has parameter
/*function odd_even(numbers){
     for(let number of numbers){
        if(number%2 === 0){
            console.log('This is even number',number);
        }else if( number%2 !== 0){
            console.log('This is odd number',number);
        }
     }
}
console.log(odd_even([20, 10, 30, 15, 5, 7]));*/

function odd_even(numbers){
    let even = [];
    let odd = [];
    for(let number of numbers){
       if(number%2 === 0){
           even.push(number);
       }else if( number%2 !== 0){
           odd.push(number);
       }
    }
    const obj={
        even: even,
        odd: odd
    }
    return obj;
}
console.log(odd_even([20, 10, 30, 15, 5, 7]));

//5. you are in a hurry to go to your school on time. but when you are crossing the road, the traffic signal is red coloured.In this situation, if you try to cross the road, you may be in danger. if you notice a yellow coloured traffic signal, you should stop. if you notice a green coloured traffic signal, you should cross the road. So write a js code, where there is a  variable called signal. Its value can be green, yellow or red  & we will get different activities as output depending on the variable. So, hurry up.

/*function cross_road(signal){
    switch(signal){
        case 'red':
            const alert = 'Danger signal'
            return alert;
        case 'yellow':
            const waitCross = 'Waiting for the crossing';
            return waitCross;
            
        case 'green':
           const go = 'go to the school'
           return go;
        default:
        return 'Invalid signal'
    }
}
console.log(cross_road('yellow'));*/

/*function cross_road(signal){
    switch(signal){
        case 'red':
            console.log('Danger signal');
            break;
        case 'yellow':
           console.log('Waiting for the crossing');
           break;
        case 'green':
           console.log('go to the school');
           break;
        default:
        return 'Invalid signal'
    }
}
console.log(cross_road('yellow'));*/

function crossRoad(signal) {
    if (signal === "green") {
        console.log("Cross the road and hurry to school!");
    } else if (signal === "yellow") {
        console.log("Stop and wait for the signal to turn green.");
    } else if (signal === "red") {
        console.log("Do not cross the road! Wait for the signal to turn green.");
    } else {
        console.log("Invalid signal. Please provide a valid signal: green, yellow, or red.");
    }
}

console.log(crossRoad("red"));
