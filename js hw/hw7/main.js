// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
//
// function User(id, name, surname, email, phone) {
//     this.id = id
//     this.name = name
//     this.surname = surname
//     this.email = email
//     this.phone = phone
// }

//- Cтворити пустий масив, наповнити його 10 об'єктами new User(....)
// let user = []
// let user1 = new User(23, 'Kristina', 'Kindrat', 'helloworld.com', 9697812)
// let user2 = new User(22, 'Igor', 'Igorov', 'hellowold.com', 2924829)
// let user3 = new User(34, 'Vitya', 'Hipser', 'helloword.com', 9034223)
// let user4 = new User(45, 'Piter', 'Kbjd', 'kjnsdkj.com', 3221324)
// let user5 = new User(38, 'Brendon', 'Hipsxcer', 'helloword.com', 934333)
// let user6 = new User(65, 'Flora', 'Jskeo', 'helloword.com', 934223)
// let user7 = new User(36, 'Leila', 'Kbjhjh', 'helloword.com', 903572)
// let user8 = new User(84, 'Musa', 'Jjhbj', 'helloword.com', 904565)
// let user9 = new User(48, 'Blum', 'Gkbli', 'helloword.com', 9045434)
// let user10 = new User(34, 'Stella', 'Inske', 'helloword.com', 944354)
// user.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(user)

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//
//
// console.log(user.filter(function (value) {
//     if (value.id % 2 === 0) {
//         return value.id
//     }
// }));
//
// console.log(user.filter(value => value.id % 2 === 0));
//

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
// console.log(user.sort((a, b) => a.id - b.id));


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// class Client {
//     constructor(id, name, surname, email, phone, order) {
//         this.id = id
//         this.name= name
//         this.surname= surname
//         this.email = email
//         this.phone = phone
//         this.order = [...order]
//     }
// }

// створити пустий масив, наповнити його 10 об'єктами Client
// let client = []
// let user1 = new Client(23, 'Kristina', 'Kindrat', 'helloworld.com', 9697812 , ['apple','milk','banana','meat'])
// let user2 = new Client(22, 'Igor', 'Igorov', 'hellowold.com', 2924829,['apple','milk','banana'])
// let user3 = new Client(34, 'Vitya', 'Hipser', 'helloword.com', 9034223,['apple','milk','banana','meat','dog food','shampoo','balsam'])
// let user4 = new Client(45, 'Piter', 'Kbjd', 'kjnsdkj.com', 3221324,['meat'])
// let user5 = new Client(38, 'Brendon', 'Hipsxcer', 'helloword.com', 934333,['apple','milk','banana','meat'])
// let user6 = new Client(65, 'Flora', 'Jskeo', 'helloword.com', 934223,['apple','milk','banana','meat'])
// let user7 = new Client(36, 'Leila', 'Kbjhjh', 'helloword.com', 903572,['apple','milk','banana','meat','lemon','eggs'])
// let user8 = new Client(84, 'Musa', 'Jjhbj', 'helloword.com', 904565,['apple','milk'])
// let user9 = new Client(48, 'Blum', 'Gkbli', 'helloword.com', 9045434,['apple','milk','banana','meat','Humus'])
// let user10 = new Client(34, 'Stella', 'Inske', 'helloword.com', 944354,['apple','milk','banana'])
// client.push(user1, user2, user3, user4, user5, user6, user7, user8, user9, user10)
// console.log(client)

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// console.log(client.sort((a, b) => a.order.length - b.order.length));


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
// function Car(model, creator, year, maxspead, volume, driver) {
//     this.model = model
//     this.creator = creator
//     this.year = year
//     this.maxspead = maxspead
//     this.volume = volume
//     this.driver = driver
//
//     this.drive = function (msg) {
//         console.log(`їдемо зі швидкістю ${maxspead} на годину`)
//     }
//     this.info = function (arr) {
//         let a = 0
//         for (let key in arr) {
//             a = key + '-' + arr[key]
//             console.log(a)
//         }
//     }
//     this.increaseMaxSpeed = function (newSpeed) {
//         maxspead = newSpeed
//         console.log(maxspead)
//     }
//     this.changeYear = function (newValue) {
//         year = newValue
//         console.log(year)
//     }
// }
//
// let car = new Car('rav4', 'Toyota', '2021', '300', '2.5', 'Kristina')
// console.log(car)
// car.drive()
// car.info(car)
// car.increaseMaxSpeed(400)
// car.drive()
// car.changeYear(2022)


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
// class Caar {
//     constructor(model, creator, year, maxspead, volume) {
//         this.model = model
//         this.creator = creator
//         this.year = year
//         this.maxspead = maxspead
//         this.volume = volume
//         this.driver = driver
//
//         this.drive = function (msg) {
//             console.log(`їдемо зі швидкістю ${maxspead} на годину`)
//         }
//         this.info = function (arr) {
//             let a = 0
//             for (let key in arr) {
//                 a = key + '-' + arr[key]
//                 console.log(a)
//             }
//         }
//         this.increaseMaxSpeed = function (newSpeed) {
//             maxspead = newSpeed
//             console.log(maxspead)
//         }
//         this.changeYear = function (newValue) {
//             year = newValue
//             console.log(year)
//         }
//     }
// }
//
// let car = new Car('rav4', 'Toyota', '2021', '300', '2.5', 'Kristina')
// console.log(car)
// car.drive()
// car.info(car)
// car.increaseMaxSpeed(400)
// car.drive()
// car.changeYear(2022)


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
class Princess {

    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let princess = []
let princess1 = new Princess('Flora', 21, 39)
let princess2 = new Princess('Blum', 20, 38)
let princess3 = new Princess('Stella', 21, 39)
let princess4 = new Princess('Leila', 24, 41)
let princess5 = new Princess('Musa', 19, 34)
let princess6 = new Princess('Fiona', 21, 35)
let princess7 = new Princess('Trixi', 23, 37)
let princess8 = new Princess('Olivia', 22, 39)
let princess9 = new Princess('Jenny', 18, 40)
let princess10 = new Princess('Tina', 19, 36)
princess.push(princess1, princess2, princess3, princess4, princess5, princess6, princess7, princess8, princess9, princess10)

// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Prince {
    constructor(name, age, size) {
        this.name = name;
        this.age = age;
        this.size = size;
    }
}

let prince1 = new Prince('Marc', 25, 37)

//  За допомоги циклу знайти яка попелюшка повинна бути з принцом.
for (let princes of princess) {
    if (princes.size === prince1.size) {
        console.log(princes);
    }
}
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
console.log(princess.find(p => p.size === prince1.size));