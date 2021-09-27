// const cubicarray=(data)=>{
//     const newArr=[];
//     data.forEach(item=>
//     {
//         const cube=item**3;
//         newArr.push(cube);
//     });
//     return newArr;
// };
// console.log(cubicarray([2,4,5,7]));
const cubicarray=(data)=>{
    const newArr=[];
    data.forEach(item=>
    {
         newArr.push(math.pow(item,3));
    });
    return newArr;
};
console.log(cubicarray([2,4,5,7]));