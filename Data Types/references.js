let x = 10;
let y = x;

x = 20;

console.log("check if the value has changed", "x:", x, "y:", y);

let b = { value: 10 };
let a = b;
console.log("check a's value", a); //shows origianl(above) object as it is

b.value = 20;

console.log("the value has changed", "a is=", a);

let obj = { value: 10 };
function increase(obj) {
  obj.value++;
}
increase(obj);
console.log(obj);
