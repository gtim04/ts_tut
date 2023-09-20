// const anchor = document.querySelector('a')

// if (anchor) {
//     console.log(anchor.href)
// }


import { ListTemplate } from './classes/ListTemplates.js'
import { Invoice } from './classes/invoice.js'
import { Payment } from './classes/payment.js'
import { HasFormatter } from './interfaces/HasFormatter.js'

// let docOne: HasFormatter
// let docTwo: HasFormatter

// docOne = new Invoice('groshi', 'work web', 231)
// docTwo = new Payment('yomar', 'fuming werk', 123)

// let docs: HasFormatter[] = []
// docs.push(docOne)
// docs.push(docTwo)

// console.log(docs)

//dom type casting
// const form = document.querySelector('form')!
const form = document.querySelector('.new-item-form') as HTMLFormElement
// console.log(form.children)

//inputs
const type = document.querySelector('#type') as HTMLSelectElement
const toFrom = document.querySelector('#tofrom') as HTMLInputElement
const details = document.querySelector('#details') as HTMLInputElement
const amount = document.querySelector('#amount') as HTMLInputElement

const ul = document.querySelector('ul')!
const list = new ListTemplate(ul)

form.addEventListener('submit', (e: Event) => {
  e.preventDefault()
  let values: [string, string, number]
  values = [toFrom.value, details.value, amount.valueAsNumber]
  let doc: HasFormatter;
  if (type.value === 'invoice') { 
    doc = new Invoice(...values)
  }  else {
    doc = new Payment(...values)
  }
  
  list.render(doc, type.value,'end')
})


// const invOne = new Invoice('Minja', 'website work', 250)

// let invoices: Invoice[] = []
// invoices.push(invOne)

// invoices.forEach(inv => {
//   console.log(inv.client, inv.details, inv.amount, inv.format())
// })

// //interfaces
// interface IsPerson {
//   name: string
//   age: number
//   speak(a: string): void
//   spend(a: number): number
// }

// const me: IsPerson = {name: 'ohws', age: 23, speak(text: string): void{console.log(text)}, spend(amount: number): number{console.log('I spent', amount); return amount}}

// console.log(me)

// const greetPerson = (person: IsPerson) => {
//   console.log('hello', person.name)
// }

// greetPerson(me)

//generics

const addUID = <T extends {name: string}>(obj: T) => {
  let uid = Math.floor(Math.random() * 100)
  return {...obj, uid}
}

let docyOne = addUID({name: 'owshi', age: 40})

console.log(docyOne)

enum ResourceType {BOOK, AUTHOR, FILM, ETC}

//gen with interfaces
interface Resource<T> {
  uid: number;
  resourceName: ResourceType;
  data: T;
}

const docyThree: Resource<object> = {
  uid: 1,
  resourceName: ResourceType.FILM,
  data: { name: 'yawn' }
}

console.log(docyThree)

const docyFour: Resource<string[]> = {
  uid:2,
  resourceName: ResourceType.BOOK,
  data: ['cromp', 'blomp']
}

console.log(docyFour)

//tuples
let arr = ['prius', 4, false] //normal mixed arr

let tup: [string, number, boolean] = ['cruis', 44, true] //tuples is fixed array set
tup[0] = 'pen'
tup[1] = 11
tup[2] = false

let student: [string, number]
student = ['punli', 48939]