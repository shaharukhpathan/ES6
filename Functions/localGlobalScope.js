//--------------------------Local Scope-------------------------

//When you declare a variable with let or const, their scope is limited to the block they are defined in.

{
  const message = "Hi";
  console.log(message);
  let message2 = "Bye";
}
// console.log(message2); //The message/message2 can only be accessed withing the code block "{}".
//This code block can be a part of a function or anything.

function message3() {
  const another = "Hello";
  for (let i = 0; i < 5; i++) {
    console.log(i, another); //here "i" cannot be accessed outside of this code block
  }
  console.log(another); //if you console "i" here, you will get an error
}
message3();

//You can have same named variables if they are in different function

function start() {
  const message4 = "start";
  console.log(message4);
}
function stop() {
  const message4 = "stop";
  console.log(message4);
}

start();
stop();

//----------------------------------------Global Scope----------------------

//What happens when you declare a variable outside of a function?

const color = "red"; //Global Scoped Variable

function checkColor() {
  console.log(color); //You can access the variable as it has global scope
}

function checkColor2() {
  const color = "blue"; //Local scoped variable
  console.log(color); //If you have a local scoped variable, the local variable overrides the value stored in global
} // scoped variable and you will get the value stored in the local scoped variable

checkColor();
checkColor2();
