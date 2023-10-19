/* window.onload = function(){
let target = document.getElementById('text');
target.innerText = 'HTML 문서 Loaded'
}

const aElement = document.querySelector('a');
aElement.addEventListener('click', ()=>{
    alert('click이 발생했습니다.');
})

const but2 = document.querySelector('.button1');
but2.addEventListener('click', (event)=>{
    let val;
    val= event.target; 
    val = event.target.id;
console.log(val); 
});
  */
 const sub_button = document.querySelector('.submit-btn');
 const title = document.querySelector('h2');
 const form = document.querySelector('form');

 sub_button.addEventListener('click', handleEvent);
 function handleEvent(e){
   e.preventDefault();
   console.log(e.type);
   title.textContent = `Mouse X : ${e.offsetX}, Mouse Y : ${e.offsetY}`;

 }
  


