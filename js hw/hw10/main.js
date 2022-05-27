// // - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
// let id = document.getElementById('text')
// id.onclick = (ev => {
//     ev.preventDefault()
//     if (id.onclick) {
//         id.remove()
//     }
//
// })


//   - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
// let f1 = document.forms.f1
// f1.onsubmit = function (ev){
//     ev.preventDefault()
//     if (f1.age.value > '18'){
//         alert('You are older than 18')
//     }
//     if (f1.age.value < '18'){
//         alert('You are not older than 18')
//     }
//     f1.age = ''
// }


// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
// let f = document.forms.f
// let f1 = document.forms.f1
//
// let button = document.getElementsByClassName('button')[0];
// button.addEventListener('click', function (){
//     console.log(f.name.value)
//     console.log(f.surname.value)
//     console.log(f1.namef.value)
//     console.log(f1.surnamef.value)
//     f.name.value = ''
//     f.surname.value = ''
//     f1.namef.value = ''
//     f1.surnamef.value = ''
// })


//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
//
// let button = document.getElementsByClassName('button')[0];
// button.addEventListener('click', function (ev) {
//     ev.preventDefault()
//     let text = f3.text.value
//     let tr = f3.num1.value
//     let td = f3.num2.value
//
//     function creatorTable(tr, td, text) {
//         const table = document.createElement('table')
//         document.body.appendChild(table)
//         for (let i = 0; i < tr; i++) {
//             const tr = document.createElement('tr')
//             table.appendChild(tr)
//
//             for (let j = 0; j < td; j++) {
//                 const td = document.createElement('td')
//                 td.innerText=`${text}`
//                 td.style.border='1px silver solid'
//                 tr.appendChild(td)
//
//             }
//
//         }
//
//     }
//
//     creatorTable(tr, td, text)
// })
