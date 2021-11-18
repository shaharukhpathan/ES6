// Function Declaration
// You can call this function before it is defined/initialiazed
// For ex. "walk();" and this should work fine.

walk();
function walk() {
  console.log("walk");
}

// Function Expression

// You cannot call this function before it is defined/initialized
// For ex. "run();" and this will throw you an error
// It throws error because a function is stored into a variable

// run();

let run = function () {
  console.log("run");
};

let move = run;
move(); // This should work fine as the function is called after it is defined

//------------------------Important Note------------------------------------------

// Why does it work with function declaration?

// When the JavaScript engine executes a code it moves all function declarations to the top, this is pure definition
// of hoisting.
// Hoisting is the process of moving function declaration to the top of the file
// It is done automatically by the JavaScript engine that is executing the code
