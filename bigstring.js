// const bstr=(str1,str2)=>
// (str1.length>str2.length? str1:str2);
// console.log(bstr("INDIA","HINDUSTAN"));
const bstr=(str1,str2)=>
(str1.length>str2.length? str1 +":" + str1.length
:str2 +":" + str2.length);
console.log(bstr("INDIA","HINDUSTAN"));