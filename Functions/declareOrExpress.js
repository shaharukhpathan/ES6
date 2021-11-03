// Function Declaration
// It is a normal function
// It doesn't require a ";" at the end
// You can call this function before it is defined/initialiazed
// For ex. "walk();" and this should work fine.
function walk() {
  console.log("walk");
}

// Function Expression
// A function is stored into a variable and that variable can be stored into another variable
// Ends with a ";"
// It can be named or anonymous function
// You cannot call this function before it is defined/initialized
// For ex. "run();" and this will throw you an error

let run = function () {
  console.log("run");
};

let move = run;
move();
