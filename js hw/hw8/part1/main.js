// Візьміть файл template1.html, підключіть до нього скрипт, і працюйте в ньому!


// -- отримує текст з параграфа з id "content"
console.log(document.getElementById('content'));
// -- отримує текст з блоку з id "rules"
console.log(document.getElementById('rules'));
// -- замініть текст параграфа з id 'content' на будь-який інший
const text = document.getElementById('content')
console.log(text.innerText = 'Hello Okten');
// -- замініть текст параграфа з id 'rules' на будь-який інший
const text2 = document.getElementById('rules')
console.log(text2.innerText = 'Okten Best');


// -- змініть кожному елементу колір фону на червоний
const one = document.getElementById('content')
one.style.backgroundColor = 'red';
const two = document.getElementById('rules')
two.style.backgroundColor = 'red';
const tree = document.getElementsByClassName('fc_rules')
for (const treeElement of tree) {
    treeElement.style.backgroundColor= 'red';
}


// -- змініть кожному елементу колір тексту на синій
const one1 = document.getElementById('content')
one1.style.color = 'blue';
const two2 = document.getElementById('rules')
two2.style.color = 'blue';
// -- поміняти колір тексту у всіх елементів fc_rules на червоний
const tree3 = document.getElementsByClassName('fc_rules')
for (const tree3Element of tree3) {
    tree3Element.style.color = 'red'
}
// -- отримати весь список класів елемента з id=rules і вивести їх в console.log
const  name = document.getElementById('rules')
console.log(name.classList);