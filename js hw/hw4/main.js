function S(a, b) {
    return (a * b);
}

S(10, 15);

function I(r) {
    return ((3.14 * r) * 2)
}

I(10)

function Scylinder(h, r) {
    return ((3.14 * h * r) * 2)
}

Scylinder(10, 15)

let fruits = ['apple', 'orange', 'banana']

function elements(array) {
    for (let item of array) {
        console.log(item);
    }

}

elements(fruits)

function createP(arguments) {
    document.write(`<p>${arguments}</p>`)
}

createP('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis, quam!')

function creatorUl(arguments) {
    document.write('<ul>')
    document.write(`<li>${arguments}</li>`)
    document.write(`<li>${arguments}</li>`)
    document.write(`<li>${arguments}</li>`)
    document.write('</ul>')

}

creatorUl('tea')


function creatorLi(argument, num) {
    document.write('<ul>')
    let i = 0;
    while (i < num) {
        document.write(`<li>${argument}</li>`)
        i++;
    }
    document.write('</ul>')
}

creatorLi('coffe', 5)


let item = ['srting', 14, true, false, 123.43]

function List() {
    document.write('<ol>')
    let i = 0;
    while (i < item.length) {
        document.write(`<li>${item[i]}</li>`)
        i++;
    }
    document.write('</ol>')
}

List(item)


let users = [
    {id: 123456, name: 'Sofia', age: 23},
    {id: 246819, name: 'Petro', age: 26},
    {id: 576832, name: 'Marc', age: 31}
]

function f(array) {
    for (let item of array) {
        console.log(item);
    }

}

f(users)

let numbers = [2, 34, 5, 8]

function minCalc(arguments) {
    let minNum = arguments[0];
    for (let i = 0; i < arguments.length; i++) {
        if (minNum > arguments[i] ){
            minNum=arguments[i]
        }
    }
    console.log(minNum)
}
minCalc(numbers)


let number = [1,2,3,4,5]

function addNumber(arguments) {
    let result = 0
    for (let item of arguments) {
        result = result + item
    }
    return result
}

console.log(addNumber(number))
