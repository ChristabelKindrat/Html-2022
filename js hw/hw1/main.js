let a = 'hello';
let b = 'owu';
let c = 'com';
let d = 'ua';
let num1 = 1;
let num2 = 10;
let num3 = -999;
let num4 = 123;
let num5 = 3.14;
let num6 = 2.7;
let num7 = 16;
let bool1 = true;
let bool2 = false;

console.log(a)
console.log(b)
console.log(c)
console.log(d)
console.log(num1)
console.log(num2)
console.log(num3)
console.log(num4)
console.log(num5)
console.log(num6)
console.log(num7)
console.log(bool1)
console.log(bool2)

let book ={
    name: 'Anne of Green Gables',
    pages: 480,
    author:'Lucy Maud Montgomery',
    genre:'novel'
}

let book2 ={
    name: 'Robinson Crusoe',
    pages: 360,
    genre:'novel',
    author: ['Daniel',['Defoe']]
}
let firstname = 'Kristina';
let middlename = 'Bohdanivna';
let lastname = 'Kindrat';
let person = (lastname+' '+firstname+' '+middlename)

let user_first_name = prompt('firstname')
let user_last_name = prompt('lastname')
let user_age = prompt('age')

console.log(user_first_name)
console.log(user_last_name)
console.log(user_age)

let books = [
    {   name: 'Robinson Crusoe',
        pages: 360,
        genre:'novel',
        author:'DanielDefoe'},
    {   name: 'Anne of Green Gables',
        pages: 480,
        genre:'novel',
        author:'Lucy Maud Montgomery'}
]
console.log(books[0].name)
console.log(books[1].name)