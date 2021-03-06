// Let's get some practice writing a few objects for a new group of interns at a small business.

// ==== Challenge 1: Writing Objects ==== 
// HR needs some information on the new interns put into a database.  Given an id, email, first name, and gender. Create an object for each person in the company list:

// 1,mmelloy0@psu.edu,Mitzi,F
// 2,kdiben1@tinypic.com,Kennan,M
// 3,kmummery2@wikimedia.org,Keven,M
// 4,gmartinson3@illinois.edu,Gannie,M
// 5,adaine5@samsung.com,Antonietta,F

// Example format of an intern object: 1,examples@you.edu,Example,F
const femaleIntern = {
  "id": 0,
  "name": "jane doe",
  "email": "janedoe@anonymous.net",
  "gender": "F"
}

const maleIntern = {
  "id": 1,
  "name": "john doe",
  "email": "johndoe@anonymous.net",
  "gender": "M"
}

// Write your intern objects here:

const InternFromFactory = intern => Object.assign({}, intern)
console.log('Challenge 1 (factory): \n,', InternFromFactory(maleIntern))

function InternFromConstuctor({id, name, email, gender}=femaleIntern) {
  this.id = id
  this.name = name,
  this.email = email,
  this.gender = gender
}

console.log('Challenge 1 (constructor): \n', new InternFromConstuctor(femaleIntern))

// ==== Challenge 2: Reading Object Data ==== 
// Once your objects are created, log out the following requests from HR into the console:

// Mitzi's name
const mitzi = InternFromFactory({name: 'Mitzi'})
console.log(mitzi.name)

// Kennan's ID
const kennan = new InternFromConstuctor({id: 25, name: 'Kennan'})
console.log(kennan.id)

// Keven's email
const keven = InternFromFactory({email: 'keven@aol.com', name: 'Keven'})
console.log(keven.email)

// Gannie's name
const gannie = Object.assign(femaleIntern, {name: 'Gannie'})
console.log(gannie.name)

// Antonietta's Gender
function FemaleIntern(attributes) {
  this.gender = 'F'
}

FemaleIntern.prototype = InternFromConstuctor

const antonietta = new FemaleIntern({name: 'antonietta'})
console.log(antonietta.gender)



// ==== Challenge 3: Object Methods ==== 
// Give Kennan the ability to say "Hello, my name is Kennan!" Use the console.log provided as a hint.
// console.log(kennan.speak());

kennan.speak = function() { return `Hello, my name is ${this.name}` }
console.log(kennan.speak())

// Antonietta loves math, give her the ability to multiply two numbers together and return the product. Use the console.log provided as a hint.
antonietta.multiplyNums = (x,y) => x * y
console.log(antonietta.multiplyNums(3,4))

// === Great work! === Head over to the the arrays.js file or take a look at the stretch challenge

// ==== Stretch Challenge: Nested Objects and the this keyword ==== 

// 1. Create a parent object with properties for name and age.  Make the name Susan and the age 70.
// 2. Nest a child object in the parent object with name and age as well.  The name will be George and the age will be 50.
// 3. Nest a grandchild object in the child object with properties for name and age.  The name will be Sam and the age will be 30
// 4. Give each of the objects the ability to speak their names using the this keyword.
function speak() { return this.name }
const parent = {
  name: 'Susan',
  age: 70,
  speak() { return this.name },
  child: {
    name: 'George',
    age: 50,
    speak
  },
  grandchild: {
    name: 'George Jr.',
    age: 20,
    speak
  }
}

const { child, grandchild } = parent

// Log the parent object's name
console.log(parent.name)
// Log the child's age
console.log(child.age)
// Log the name and age of the grandchild
console.log(grandchild.name, grandchild.age)
// Have the parent speak
console.log(parent.speak())
// Have the child speak
console.log(child.speak())
// Have the grandchild speak
console.log(grandchild.speak())