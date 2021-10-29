let x = 10; //10 is stored in x
let y = x; //x is copied in 10

x = 20; //value of x changed to 20

console.log("..", x); // will show 20 as the value of x has changed
console.log("..", y); //will show 10 as the value was changed later

let a = { value: 10 };
let b = a; //{value : 10}

a.value = 20;

console.log("..", a); //will show 20 as updated value
console.log("..", b); //will show 20 as object is referred to the variable not the value.

let number = 15;
function increase(number) {
  number++;
}
increase(number);
console.log("---", number); //this console will show 15 not 16 as the variable is out of scope
//and not within the scope.

let obj = { value: 15 };
function increment(obj) {
  obj.value++;
}
increment(obj);
console.log("---", obj);
