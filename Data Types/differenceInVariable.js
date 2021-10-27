function start() {
  let i = 1;
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}
start();
// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 1000 * i);
//   //   console.log("love js");
// }
