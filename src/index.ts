//declaring variables
// let sales: number = 89385858
// let course: string = 'TimScript'
// let is_published: boolean = true

//arrays
// let number: number[] = [1,2,3]

//tuples
// let user: [number, string] = [1, 'Mosh']

//enums
// const enum Size { Small = 1, Medium, Large }
// let mySize: Size = Size.Medium

//functions annotation
// function calculateTax(income: number, taxYear: number, optVar?: number, intVar = 2022): number {
//     if (taxYear  < 2022)
//         return income * 1.2
//     return income * 1.3
// }

// calculateTax(10_000, 2022)


//object
// let employee: {id: number, name?: string } = { id: 1, name: ''}

//readonly modifier
// let employee: {
//     readonly id: number, 
//     name: string, 
//     retire: (date: Date) => void 
//     } = { 
//     id: 1, name: '', 
//     retire: (date: Date) => 
//         {
//             console.log(date)
//         }
//     }

//type alias
// type Employee = {
//     readonly id: number, 
//     name: string, 
//     retire: (date: Date) => void 
// }

// let employee: Employee = {id: 1, name: 'Tim', retire: (date: Date) => {console.log(date)}}

//union types
// function kgToLbs(weight: number | string): number {
//     //narrowing
//     if (typeof weight === 'number') 
//         return weight * 2.2
//     else
//         return parseInt(weight) * 2.2
// }

// kgToLbs(35)
// kgToLbs('10kg')

//intersection types
// type Draggable = {
//     drag: () => void
// }

// type Resizable = {
//     resize: () => void
// }

// type UIWidget = Draggable & Resizable

// let textBox: UIWidget = {
//     drag: () => {},
//     resize: () => {}
// }

//literal types
// type Quantity = 50 | 100
// let quantity: Quantity | 100 = 100

//nullable types

// function greet(name: string | null | undefined) {
//     if (name)
//         console.log(name.toUpperCase())
//     else
//         console.log('Test')
// }

// greet(null)

// type Customer = {
//     birthday?: Date
// }

// function getCustomer(id: number): Customer | null {
//     return id === 0 ? null : { birthday: new Date() }
// }

// let customer = getCustomer(1)

// console.log(customer?.birthday?.getFullYear())

//optional element access operator
// customer?.[0]

//optional call
// let log: any = null
// log?.('a')