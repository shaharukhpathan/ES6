const video = {
  title: "abc",
  tags: ["a", "b", "c"],
  showTags() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    });
  },
};
// video.showTags();

//If you remove this passed as an argument to the callback function. You get undefined. This will refer to the window.

// So how do you change this?

// -----------------Approach 1: (not recommended)

const video2 = {
  title: "xyz",
  tags: [4, 5, 6],
  showTags2() {
    const self = this; //Here, this is stored into a variable so that it can be used inside the callback function
    this.tags.forEach(function (tag) {
      console.log(self.title, tag);
    });
  },
};
// video2.showTags2();

// ------------------------------Approach 2: (functions are objects) (methods: call, apply, bind)

function playVideo() {
  console.log(this); //For now, this refers to the window.
}
// playVideo();

function playVideo2() {
  console.log(this); //Now, instead of window, here this refers to the object passed with call method from line: 40.
}
playVideo2.call({ title: "a" }); //The object to be used as the current object.
playVideo2.apply({ name: "Afroz" });

//Applyy method works the same. However, if there are more than one arguments to be passed, they have their own differences.
//Call method: takes arguments normally--> param:(a, b, c), call args ({title: 'a'}, 2, 3)
//Apply method: takes rest of arguments in an array--> param:(a, b, c), call args ({title: 'a'}, [2, 3])

// Bind Method:

//It doesn't call the original function. Instead, it returns a new function and here THIS will always refer to the
// object passed as an argument permanently

const checkfun = playVideo2.bind({ age: 20 });
checkfun();
// also works this way: playVideo2.bind({ age: 20 })(); parenthesis at the end are calling the function this
// method returns

const video3 = {
  title: "zxc",
  tags: [9, 8, 7],
  showTags3() {
    this.tags.forEach(
      function (tag) {
        console.log(this.title, tag);
      }.bind(this)
    );
  },
};
video3.showTags3();

//----------------------- Better Solution: Arrow functions

//Arrow functions inherit the this value from the containing function

const video4 = {
  title: "bnm",
  tags: [6, 5, 4],
  showTags4() {
    this.tags.forEach((tag) => console.log(this.title, tag));
  },
};
video4.showTags4();
