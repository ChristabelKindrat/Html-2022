// Все стірлочними!!!!!!!!!


// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// let numbers = [2, 3, 4, 5, 56]
//
// let middle = (array) => {
//     let one = 0;
//     for (let num of array) {
//        one += num
//     }
//     return one/array.length;
// }
//
// console.log(middle(numbers))


// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// let minMax = (...args) => {
//     let min = args[0]
//     let max = args[0]
//     for (let arg of args) {
//         if (arg < min) {
//             min = arg
//         }
//         if (arg > max) {
//             max = arg
//         }
//     }
//     console.log(max)
//     return min
//
// }
//
// console.log(minMax(1, 2, -9, 3, 4, 5))

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
//  let random = () => {
//     let arr = []
//     for (let i = 0; i < 10; i++) {
//         arr.push(Math.round(Math.random() * 100))
//     }
//     return arr
//  }
//  console.log(random())


// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// let random = (limit) =>{
//     let array = []
//     for (let i = 0; i < limit; i++) {
//         array.push(Math.round(Math.random()*80))
//     }
//     return array
// }
// console.log(random(3));


// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// let num =[1,2,3,4,5,6]
// let rit=(array)=>{
//     let arr =[]
//     for (let i = array.length - 1; i >= 0; i--) {
//       arr.push(array[i])
//     }
//     return arr
// }
// console.log(rit(num))

// -створити функцію, яка приймає масив з 2х об'єктів, та міняє їх місцями.
//
//
//  let array=[
//      {name:'Anton', status:'true'},
//      {name:'Gigi', status:'true'}
//  ]
//
// let restart =(arr) =>{
//     let first = arr[0]
//     arr[0]= arr[1]
//     arr[1]=first
//     return arr
//
// }
// console.log(restart(array))





//     Переробити на стрілочні функції з попереднього дз


// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
// let S = (a, b) => a+b;
// console.log(S(12, 3))
//
//

// - створити функцію яка обчислює та повертає площу кола з радіусом r
// let S = (r, h) => r*h+3.14;
// console.log(S(23, 4))
//
//

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
// let S = (h, r) => h*r;
// console.log(S(23,4))
//
//

// - створити функцію яка приймає масив та виводить кожен його елемент
// let arr = [1, 2, 3, 4, 5, 6,]
//
// let declaration = (array) => {
//     for (let number of array) {
//         console.log(number)
//     }
// }
//
// declaration(arr)
//
//

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
// let pCreator = (text) => {
//     document.write(`<p>${text}</p>`)
// }
// pCreator("hello")
//
//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
// let ulCreator = (text) => document.write(`<ul>
//  <li>${text}</li>
//  <li>${text}</li>
//  <li>${text}</li>
// </ul>`);
//
// ulCreator('hello')
//

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
// let ulCreator=(text,num) =>{
//     document.write('<ul>')
//     for (let i = 0; i < num; i++) {
//        document.write(`<li> ${text} </li>`)
//     }
//     document.write('</ul>')
// }
//
// ulCreator('hello',5)
//
//

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
//
// let arr = [1, 2, 3, 23.2, true, false, 'hello']
// let olCreator = (array) =>{document.write('<ol>')
//     for (let item of array) {
//         document.write(`<li> ${item}</li>`)
//     }
// document.write('</ol>')
// }
//
// olCreator(arr)
//
//

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let users = [
//     {id: 123456, name: 'Sofia', age: 23},
//     {id: 246819, name: 'Petro', age: 26},
//     {id: 576832, name: 'Marc', age: 31}
// ]
// let arraysfilter = (array) =>{
//     for (let item of array) {
//         document.write(`<div>${item.id},${item.name},${item.age}</div>`)
//     }
// }
// arraysfilter(users)
//
//

// - створити функцію яка повертає найменьше число з масиву
// let numbers = [1, 2, 3, 4, 5, 6, -3]
// let minNum = (array) => {
//     min = array[0]
//     for (let num of array) {
//         if (min > num) {
//             min = num
//         }
//     }
//     return min
// }
//
// console.log(minNum(numbers))
//
//

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// let numbers = [1, 2, 3, 45, 6, 7, 3,]
// let addNumbers = (array) => {
//     let result = 0
//     for (let num of array) {
//         result = result + num
//     }
//     return result
// }
// console.log(addNumbers(numbers))

