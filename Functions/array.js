let arr=[1,2,3,4,5,1,2,5]
// let b=[];
// for(let i=0;i<arr.length;i++)
// {
//     if(b.indexOf(a[i])===-1)
//     {
//         b.push(a[i])
//     }
// }
// console.log(b);
 

function dup(array)
{
    return[...new Set(arr)];
}
console.log(dup(arr));