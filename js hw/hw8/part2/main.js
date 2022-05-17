// // Взяти файл template_2.html та працювати в ньому
//
// // a) додає клас з назвою групи, елементу з ід main_header
// let name = document.getElementById('main_header')
// name.classList.add('ghj')
//
// // b) робить шириниу елементу ul 400px
// const hj = document.getElementsByTagName("ul")
// hj.style.width ='400px'
//
// // c) робить шириниу всіх елементів з класом linkList шириною 50%
// const bmjh = document.getElementsByClassName('linkList')
// bmjh.style.width = '50%'
//
// // d) отримує текст який зберігається в елементі з класом listElement2
// const fnvh= document.getElementsByClassName('listElement2')
// fnvh.innerHTML
//
// // e) отримує всі елементи li та змінює ім колір фону на сірий
// const hjb=document.getElementsByTagName('li')
// hjb.style.backgroundColor='silver'
//
// // f) отримує всі елементи 'a' та додає їм клас anchor
// const ygjyu=document.getElementsByTagName('a')
// ygjyu.classList.add('anchor')

// g) отримує всі елементи 'a' та у випадку, якщо текстовий контен елементу дорівнює link3, змінює йому розмір тексту на 40 пікселів
// const hgj=document.getElementsByTagName('a')
// for (const hgjElement of hgj) {
//     if (hgjElement.text === 'link3'){
// hgjElement.style.fontSize = '40px'
//     }
// }

// h) отримує всі елементи 'a' та додає їм клас element_XXX. Де XXX - текстовий контент елементу a
// const hgj = document.getElementsByTagName('a')
// for (const hgjElement of hgj) {
//     let xxx = hgjElement.textContent
//     hgjElement.classList.add(`element_${xxx}`)
// }


// i) отримує всі елементи 'sub-header' та змінює колір фону. Фон отримати з prompt()
// const qwe = document.getElementsByClassName('sub-header')
// for (const qweElement of qwe) {
//     let color = prompt('Backghround Color')
//     qweElement.style.backgroundColor = color
// }

// // j) отримує всі елементи 'sub-header' та змінює колір тексту у видаку якщо текст елемнту = content 2 segment . Колір отримати з prompt()
// const qwe = document.getElementsByClassName('sub-header')
// for (const qweElement of qwe) {
//     if (qweElement.textContent === 'content 2 segment') {
//         qweElement.style.color = prompt('text color')
//     }
// }


// k) отримує елемент з класом content_1 та заміняє  в ньому тест на довільний. Текст отримати з prompt()
// const element = document.getElementsByClassName('content_1')
// for (const elementElement of element) {
//     elementElement.innerHTML = prompt('text')
// }


// l) отримати елементи p та змінити їм padding на 20px
// const element = document.getElementsByTagName('p')
// for (const elementElement of element) {
//
//    elementElement.style.padding = '20px'
// }


// m) отримати елементи з класом text2 та змінити їм текст на назву групи (mon-year. Пример sep-2021)
// const clas=document.getElementsByClassName('text2')
// for (const cla of clas) {
//     cla.innerHTML= 'murch-2022'
// }