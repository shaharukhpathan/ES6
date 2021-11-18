// --------------------------------------let------------------

function start() {
  for (let i = 0; i < 4; i++) {
    console.log(i);
  }
  //   console.log(i); if you console "i" here you will get an error as the variable is declared with let
  // key word which has limited scope to its code block only.
}
start();

// --------------------------------------Var------------------
function start2() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  //   console.log(i); if you console "i" here you will not get an error as the variable is declared with var
  // key word which can be accessed anywhere inside the functino in the case.
}
start2();

//-------------------------------Window object in browser-------------------

// When you use var outside of a function, this creates global variable and attaches that variable to window object
// in browser

var color = "red"; //var keyword has attached the color object to window object in browser here
// window.color; //Now, if you write the above to lines in browser console, you can see the window object now has the
//variable defined with the var key word.

// When you use let to create a variable outside of a function, this does create a global variable but it doesn't
// attaches it to the window object in broswer
let age = 30; //Global variable created but not attached to window object in browser.
// window.age; if you write the above to limes in browser console, you will get undifined

// Note: you should avoide adding stuff to window object, if you are using any third party library and that library
// has a variable with same name as yours then that variable can override your variable
