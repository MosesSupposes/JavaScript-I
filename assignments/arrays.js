// To help us use arrays with real world problems we are going to simulate a used car dealer that has 50 cars in their inventory.

// The car dealer has all of their inventory housed in the array seen below.  Scroll down past the data to find out how you can help the car dealer.
function getInventory() {
    let inventory = [{"id":1,"car_make":"Lincoln","car_model":"Navigator","car_year":2009},
    {"id":2,"car_make":"Mazda","car_model":"Miata MX-5","car_year":2001},
    {"id":3,"car_make":"Land Rover","car_model":"Defender Ice Edition","car_year":2010},
    {"id":4,"car_make":"Honda","car_model":"Accord","car_year":1983},
    {"id":5,"car_make":"Mitsubishi","car_model":"Galant","car_year":1990},
    {"id":6,"car_make":"Honda","car_model":"Accord","car_year":1995},
    {"id":7,"car_make":"Smart","car_model":"Fortwo","car_year":2009},
    {"id":8,"car_make":"Audi","car_model":"4000CS Quattro","car_year":1987},
    {"id":9,"car_make":"Ford","car_model":"Windstar","car_year":1996},
    {"id":10,"car_make":"Mercedes-Benz","car_model":"E-Class","car_year":2000},
    {"id":11,"car_make":"Infiniti","car_model":"G35","car_year":2004},
    {"id":12,"car_make":"Lotus","car_model":"Esprit","car_year":2004},
    {"id":13,"car_make":"Chevrolet","car_model":"Cavalier","car_year":1997},
    {"id":14,"car_make":"Dodge","car_model":"Ram Van 1500","car_year":1999},
    {"id":15,"car_make":"Dodge","car_model":"Intrepid","car_year":2000},
    {"id":16,"car_make":"Mitsubishi","car_model":"Montero Sport","car_year":2001},
    {"id":17,"car_make":"Buick","car_model":"Skylark","car_year":1987},
    {"id":18,"car_make":"Geo","car_model":"Prizm","car_year":1995},
    {"id":19,"car_make":"Oldsmobile","car_model":"Bravada","car_year":1994},
    {"id":20,"car_make":"Mazda","car_model":"Familia","car_year":1985},
    {"id":21,"car_make":"Chevrolet","car_model":"Express 1500","car_year":2003},
    {"id":22,"car_make":"Jeep","car_model":"Wrangler","car_year":1997},
    {"id":23,"car_make":"Eagle","car_model":"Talon","car_year":1992},
    {"id":24,"car_make":"Toyota","car_model":"MR2","car_year":2003},
    {"id":25,"car_make":"BMW","car_model":"525","car_year":2005},
    {"id":26,"car_make":"Cadillac","car_model":"Escalade","car_year":2005},
    {"id":27,"car_make":"Infiniti","car_model":"Q","car_year":2000},
    {"id":28,"car_make":"Suzuki","car_model":"Aerio","car_year":2005},
    {"id":29,"car_make":"Mercury","car_model":"Topaz","car_year":1993},
    {"id":30,"car_make":"BMW","car_model":"6 Series","car_year":2010},
    {"id":31,"car_make":"Pontiac","car_model":"GTO","car_year":1964},
    {"id":32,"car_make":"Dodge","car_model":"Ram Van 3500","car_year":1999},
    {"id":33,"car_make":"Jeep","car_model":"Wrangler","car_year":2011},
    {"id":34,"car_make":"Ford","car_model":"Escort","car_year":1991},
    {"id":35,"car_make":"Chrysler","car_model":"300M","car_year":2000},
    {"id":36,"car_make":"Volvo","car_model":"XC70","car_year":2003},
    {"id":37,"car_make":"Oldsmobile","car_model":"LSS","car_year":1997},
    {"id":38,"car_make":"Toyota","car_model":"Camry","car_year":1992},
    {"id":39,"car_make":"Ford","car_model":"Econoline E250","car_year":1998},
    {"id":40,"car_make":"Lotus","car_model":"Evora","car_year":2012},
    {"id":41,"car_make":"Ford","car_model":"Mustang","car_year":1965},
    {"id":42,"car_make":"GMC","car_model":"Yukon","car_year":1996},
    {"id":43,"car_make":"Mercedes-Benz","car_model":"R-Class","car_year":2009},
    {"id":44,"car_make":"Audi","car_model":"Q7","car_year":2012},
    {"id":45,"car_make":"Audi","car_model":"TT","car_year":2008},
    {"id":46,"car_make":"Oldsmobile","car_model":"Ciera","car_year":1995},
    {"id":47,"car_make":"Volkswagen","car_model":"Jetta","car_year":2007},
    {"id":48,"car_make":"Dodge","car_model":"Magnum","car_year":2008},
    {"id":49,"car_make":"Chrysler","car_model":"Sebring","car_year":1996},
    {"id":50,"car_make":"Lincoln","car_model":"Town Car","car_year":1999}];

    return inventory
}

// Example for loop:

// arr = [1,2,3,4];
// for (let i = 0; i < arr.length; i++) {
//     arr[i]; // 1,2,3,4
// }

// ==== Challenge 1 ====
// The dealer can't recall the information for a car with an id of 33 on his lot. Help the dealer find out which car has an id of 33 by logging the car's year, make, and model in the console log provided to you below:


function getDescriptionByIdLoop(id, arr) {
    var searchedItem, itemDescription, itemFound
    const errMsg = `car with id: ${id} not found in inventory: ${arr}`

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].id === id) {
            searchedItem = arr[i]
            itemFound = true
            const { car_make, car_model, car_year  } = searchedItem
            itemDescription = `Car ${id} is a ${car_year} ${car_make} ${car_model}`
        }
    }

    return itemFound ? itemDescription : errMsg
}

function getDescriptionById(id, arr) {
    const errMsg = `item with id: ${id} not found in inventory: ${arr}`
    , searchedItem = arr.find(x => x.id === id)
    , itemFound = searchedItem && true
    , { car_make, car_model, car_year  } = searchedItem
    , description = `Car ${id} is a ${car_year} ${car_make} ${car_model}`

    return itemFound ? description : errMsg
}

console.log('Challenge 1 (loop): \n', getDescriptionByIdLoop(16, getInventory()))
console.log('Challenge 1 (no loop): \n', getDescriptionById(33, getInventory()))


// ==== Challenge 2 ====
// The dealer needs the information on the last car in their inventory.  What is the make and model of the last car in the inventory?  Log the make and model into the console.
const lastItem = 
    obj => Object.values(obj).slice(-1)[0]

console.log('Challenge 2: \n', lastItem(getInventory()))

// ==== Challenge 3 ====
// The marketing team wants the car models listed alphabetically on the website. Sort all the car model names into alphabetical order and log the results in the console

const sortBy = 
    (sortValue, arr) => arr.map(item => item[sortValue]).sort()


console.log('Challenge 3: \n', sortBy('car_make', getInventory()))

// ==== Challenge 4 ====
// The accounting team needs all the years from every car on the lot. Create a new array from the dealer data containing only the car years and log the result in the console.

console.log('Challenge 4: \n', sortBy('car_year', getInventory()));

// ==== Challenge 5 ====
// The car lot manager needs to find out how many cars are older than the year 2000. Using the carYears array you just created, find out how many cars were made before the year 2000 by populating the array oldCars and logging it's length.

function filterObj(predicate, o) {
    const newObj = {}

	Object.keys(o)
	.filter(key => predicate(o[key]))
    .forEach(key => newObj[key] = o[key])
    
	return newObj
}

const olderThanYear2000 = 
    ({car_year: year}) => year > 2000

const challenge5 = 
    () => Object.keys( filterObj(olderThanYear2000, getInventory()) ).length

console.log('Challenge 5: \n', challenge5()) 

// ==== Challenge 6 ====
// A buyer is interested in seeing only BMW and Audi cars within the inventory.  Return an array that only contains BMW and Audi cars.  Once you have populated the BMWAndAudi array, use JSON.stringify() to show the results of the array in the console.
const onlyAudisAndBenzes = ({car_make: make}) => make === "Mercedes-Benz" || make === "Audi"

const challenge6 = () => Object.values(filterObj(onlyAudisAndBenzes, getInventory()))

console.log('Challenge 6 /n', challenge6())



