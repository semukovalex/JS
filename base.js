// 1 Переменные
// camelCase - 2nd word with uppercase

// const firstName = 'Ira'
// let age = 19 //number
// const isProgrammer = true //Boolean

// const private = 'private'
// const $ = 'some value'

// const withNum5 = '5'
//const 5withNum5 = 5 //err

// 2 Мутирование
//Console.log('Name: ' + firstName + ' , age: ' + age)
//alert('Name: ' + firstName + ' , age: ' + age)

// const lastName = prompt( message: 'Введите фамилию')
// alert(firstName + ' ' + lastName)

// 3 Операторы
// let currentYear = 2020
// const birthYear = 2000

// const age = currentYear - birthYear

// let c = 32
// c = c + a
// c = c - a
// c = c * a
// c = c / a
// c += a
// c -= a
// c *= a
// c /= a

// Console.log(a + b)
// Console.log(a - b)
// Console.log(a * b)
// Console.log(a / b)
// Console.log(++currentYear)
// Console.log(--currentYear)
// Console.log(c)

// 4 Типы данных
// const isProgrammer = true
// const name = 'Ira'
// const age = 19
// let x
// Console.log(typeof isProgrammer)
// Console.log(typeof name)
// Console.log(typeof age)
// Console.log(typeof x)
// Console.log(null)

// 5 Приоритет операторов
// const fullAge = 19
// const birthYear = 2020
// const currentYear = 2020

// > < >= <=
// const isFullAge = currentYear - birthYear >= fullAge // 19 >= 20 => true
// Console.log(isFullAge)

// 6 Условные операторы
// const courseStatus = 'fail' // ready, fail, pending
//
// if (courseStatus === 'ready') {
//  Console.log('Курс уже готов, и его можно проходить')
// } else if (courseStatus === 'pending') {
//  Console.log('Курс пока находится в процессе разработки')
// } else {
//  Console.log('Курс не получился')
// }

// const isReady = true

// if (isReady) {
//  Console.log('Все готово!')
// } else {
//   Console.log('Все не готово!')
// }

// Тернарное выражение
// isReady ? Console.log('Все готово!') : Console.log('Все не готово!')

// const num1 = 42 // number
// const num2 = '42' // string
//
// Console.log(num1 === num2)

// 7 Булевая логика
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Operators/%D0%9B%D0%BE%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B8%D0%B5_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%82%D0%BE%D1%80%D1%8B

// 8 Функции

// function calculateAge(year) {
//   return 2020 - year
// }

// console.log(calculateAge(2000))
// console.log(calculateAge(2019))
// console.log(calculateAge(1999))

// function logInfoAbout(name, year) {
//   const age = calculateAge(year)

//   if (age > 0) {
//     console.log('Человек по имени ' + name + ' сейчас имеет возраст ' + age)
//   } else {
//     console.log('Вообще-то это уже будущее!')
//   }

// }

// logInfoAbout('Ира', 2000)
// logInfoAbout('Елена', 1995)
// logInfoAbout('Елена', 2022)

// 9 Массивы
// const cars = ['Мазда', 'Мерседес', 'Форд']
// const cars = new Array('Мазда', 'Мерседес', 'Форд')
// console.log(cars.length)
// console.log(cars[1])
// console.log(cars[0])
// console.log(cars[2])

// cars[0] = 'Porsche'
// cars[cars.length] = 'Mazda'
// console.log(cars)

// 10 Циклы
// const cars = ['Мазда', 'Мерседес', 'Форд', 'Porsche']

// for (let i = 0; i < cars.length; i++) {
//   const car = cars[i]
//   console.log(car)
// }

// for (let car of cars) {
//   console.log(car)
// }

// 11 Объекты
const person = {
  firstName: 'Ira',
  lastName: 'Partas',
  year: 2000,
  languages: ['Ru', 'En', 'De'],
  hasHusband: false,
  greet: function() {
    console.log('greet from person')
  }
}

console.log(person.firstName)
console.log(person['lastName'])
const key = 'year'
console.log(person[key])
person.hasHusband = true
person.isProgrammer = true
console.log(person)

person.greet()