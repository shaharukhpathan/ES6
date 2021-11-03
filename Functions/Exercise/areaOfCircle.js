const circle = {
  radius: 3,
  get areaCircle() {
    return Math.PI * this.radius * this.radius;
  },
};

circle.radius = 20;
circle.areaCircle = 40; // Since we have used the 'get' keyword here, it has made the method read only. It won't change anything.

// You cannot make changes to the method from outside in this case. However, you can achieve different results by
// changing the value of radius from outside.

console.log(circle.areaCircle);
// console.log(circle.areaCircle(20))
