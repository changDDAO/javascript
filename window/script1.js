/* let val;
val = document;
val = document.baseURI;
val = document.scripts; */
const header_container = document.getElementById('header-container');
console.log(header_container);
// header_container.style.display='none';
const items = document.getElementsByClassName('list-group-item');
console.log(items);
items[0].style.color ='blue';

let lists = document.getElementsByTagName('li');
console.log(lists);
lists = Array.from(lists);
console.log(typeof lists)

// lists.forEach((list,index)=>{
// console.log(`${index}. ${list.List}`);
// })
const li_odd = document.querySelectorAll('li:nth-child(odd)');
li_odd.forEach((item)=>{
    item.style.background='gray';
})
 