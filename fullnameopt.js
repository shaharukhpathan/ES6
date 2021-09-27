
// // By litrals method
// const data=[
//     {firstname:"rahim", middlename:"samad",lastname:"shaikh"},
//     {firstname:"ajay", middlename:"vijay",lastname:"patil"},
//     {firstname:"jafar", middlename:"jaber",lastname:"shaikh"}
// ];
// const result=data.map((item)=> `${item.firstname} ${item.lastname}`)
// const result1=data.map((item)=> `${item.firstname} ${item.middlename}`)
// const result3=data.map((item)=> `MR.${item.firstname} ${item.lastname}`)
// console.log(result);
// console.log(result1);
// console.log(result3);


// // By json method
const employee={
data:[
    {firstname:"rahim", middlename:"samad",lastname:"shaikh"},
    {firstname:"ajay", middlename:"vijay",lastname:"patil"},
    {firstname:"jafar", middlename:"jaber",lastname:"shaikh"}
]
}

const result=employee.data.map(
    (item)=> `${item.firstname} ${item.lastname}`);
console.log(result);
 