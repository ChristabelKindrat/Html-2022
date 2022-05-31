// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
// let form = document.createElement('form')
// let input1 = document.createElement('input')
// let input2 = document.createElement('input')
// input1.setAttribute('type', 'text')
// input1.setAttribute('name', 'name')
// input2.setAttribute('type', 'number')
// input2.setAttribute('name', 'age')
// let button = document.createElement('button')
// button.innerText = 'ok'
// form.append(input1, input2, button)
// document.body.append(form)
//
// button.onclick = function (ev) {
//     let name = input1.value
//     let age = input2.value
//     localStorage.setItem('userName',name)
//     localStorage.setItem('userAge',age)
// }



// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.

let form = document.createElement('form')
let input1=document.createElement('input')
let input2=document.createElement('input')
let input3=document.createElement('input')
input1.setAttribute('type','text')
input1.setAttribute('name','model')
input2.setAttribute('type','text')
input2.setAttribute('name','type')
input3.setAttribute('type','number')
input3.setAttribute('name','volume')
let button = document.createElement('button')
button.innerText= 'ok'
form.append(input1,input2,input3,button)
document.body.appendChild(form)
let cars = []
button.onclick = function (ev) {
    ev.preventDefault()
   let carModel= input1.value
   let carType= input2.value
   let carVolume= input3.value
    cars.push(carModel,carType,carVolume)

    input1=''
    input2 =''
    input3 =''
    localStorage.setItem('cars',JSON.stringify(cars))
}

