// It is special kind of methods in ojcets called getters and setters

const person = {
  firstName: "Afroz",
  lastName: "Khan",
};

// To show fullname, the general practice is as below:

//Old style
// console.log(person.firstName + " " + person.lastName);
//New and smarter way with template literals
console.log(`check P-- ${person.firstName} ${person.lastName}`);

// However, if you wanna print the fullname like above in multiple places, you will have to write the template
// literal thing just as many times as you want. Which is a bad approach:

//So to make it even cleaner, you can move this template literal expression inside the object within a method

const person2 = {
  firstName: "Khan",
  lastName: "Afroz",
  // fullName: function (){}, this is was the approach before ES6. With ES6 you can do so without the key value pair
  // You can also drop the function key word if you're writing a function in an object
  fullName() {
    return `check P2-- ${person2.firstName} ${person2.lastName}`;
  },
};
console.log(person2.fullName()); //It has to be called just like a method, can't drop the paranthesis

// So how do we do this? calling the function without paranthesis with getters and setters

// Getters -- to access properties of an object
// Setters -- to change or mutate the properties of an object

const person3 = {
  firstName: "Pathan",
  lastName: "Afroz",

  get fullName() {
    //you prefix this method with get key word, doing what line no 27 can't
    return `check P3 get-- ${person3.firstName} ${person3.lastName}`;
  },
  set fullName(value) {
    //this method needs a parameter
    //you prefix this method with set key word, doing what line no 53 couldn't do without a setter
    const parts = value.split(" ");
    this.firstName = parts[0]; //This is changing the original firstName property of person3 here
    this.lastName = parts[1]; //This is changing the original lastName property of person3 here
  },
};

// person3.fullName = "The Wolverine";
// Doesn't work yet, as I haven't used the set (setter) key word. the above line was written before using set key
console.log("check P3 with get--", person3.fullName);

person3.fullName = "The Wolverine"; //Works well after using the set key and this value is passed as an arguement
// and stored in the parameter (value in this case)
console.log("check updated P3 with set--", person3); //Works well even when it is not called like a method
