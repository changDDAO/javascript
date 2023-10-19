const parentNode = document.querySelector('ul');
const childNodeList = document.querySelectorAll('li');
// parentNode.removeChild(childNodeList[0]);

const newNode = document.createElement('span');
newNode.textContent='hi';
parentNode.replaceChild(newNode,childNodeList[0]);