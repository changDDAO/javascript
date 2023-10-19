/* for(let i =0; i<10; i++){
    if(i ==3)
    console.log('i am 3');
if(i==5) break;
console.log('number is'+i);
} */
/* easy */

const user = {
    name: 'changho',
    age :14,
    street: 'chungsuro'
}

for(let x in user){
    console.log(`${x} : ${user[x]}`);
}