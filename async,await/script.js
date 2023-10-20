async function makeRequest() {
try{
    const response1 = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const jsonResponse1 =await response1.json();
    console.log('jsonResponse1', jsonResponse1);
}catch(e){
console.log('error'+e);
}finally{
console.log('---끝---');
}
}
makeRequest();