// const imgdata=(arr)=> arr.map((item)=> item["url"]);
// // OR const imgdata=(arr)=> arr.map((item)=> item.url);
// console.log(imgdata([
//     {url: "google.com",title:"Google"},
//     {url: "pickupbiz.com",title:"PickupBiz"},
//     {url: "gmail.com",title:"Gmail"},
//     {url: "amazon.com",title:"Amazon"},
// ])
// ); 

const imgdata=(arr)=> arr.map((item)=> `<img src="${item.url}" alt="${item.title}" />`);
// litrals
console.log(imgdata([
    {url: "google.com",title:"Google"},
    {url: "pickupbiz.com",title:"PickupBiz"},
    {url: "gmail.com",title:"Gmail"},
    {url: "amazon.com",title:"Amazon"},
])
);