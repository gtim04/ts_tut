// let character = 'mario'
// let age = 30
// let isBlackBelt = false

// const circ = (diameter: number) => {
//   return diameter * Math.PI
// }

// console.log(circ(12))

//arrays
// let names = ['luigi', 'mario', 'yoshi']
// names.push('toad')

// let numbers = [1,2,3]
// numbers.push(25)

// let mixed = ['kun', 3 , 'csli', 8 , 9]
// mixed.push('string')
// mixed.push(3)
// mixed[0] = 22

// //objects
// let minja = {
//   name: 'mario',
//   belt: 'black',
//   age: 30
// }

// minja.age = 25
// minja.name = 'naruto'
// // minja.age = '30'
// minja = {
//   name: 'sasuke',
//   belt: 'green',
//   age: 21
// }

//explicit types
// let character: string
// let age:number
// let isLoggedIn: boolean

// age = 30
// isLoggedIn = true

// //arrays - l5
// let ninjas: string[] = []
// ninjas.push('haha') //would not work if array is not initialized

// //union types
// let mixed: (string|number|boolean)[] = []
// mixed.push(20)
// mixed.push('jello')
// mixed.push(false)
// console.log(mixed)

// let uid: string|number
// uid = 123
// uid ='123'

// //objects
// let minjaOne: object
// minjaOne = {name: 'naruto', age:12}

// let minjaTwo: {
//   name: string,
//   age: number,
//   belColour: string
// }

// minjaTwo = {name: 'nario', age: 12, belColour: 'purple'}

//any type
// let age: any = 25
// age = 'twentyfive'
// age = true
// console.log(age)

// let mixed: any[] = []
// mixed.push(5)
// mixed.push(true)
// mixed.push('sasuke')
// console.log(mixed)
// let greet: Function
// greet = () => {
//     console.log('jello')
// }

// const add = (a: number, b: number, c?: number | string) => {
//     console.log(a+b)
//     if(c) {
//         console.log(c)
//     }
// }

// add(5,10)

// const minus = (a: number, b: number): number => {
//     return a + b
// }

// let result = minus(10, 7)

let gree: (a: string, b: string) => void
gree = (name: string, greeting: string) => {
    console.log(`${name} says ${greeting}`)
}

let calc: (a: number, b: number, c: string) => number
calc = (nOne: number, nTwo: number, act: string) => {
    if (act === 'add') {
        return nOne + nTwo
    } else {
        return nOne - nTwo
    }
}

let logDetails: (obj: { name: string, age: number }) => void

type person = {name: string, age: number}

logDetails = (minja: person) => {
    console.log(`${minja.name} is ${minja.age} years old`)
}