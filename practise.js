const name = "King"
let age = 25
let male = true
const hobbies = ["Watching anime ", "Hate watching man-united", "Sleep", "Watch titktok", true, false, 23, 15, 30, 89, 34]
let nationality = [true, false, false, true]
let learningJourney = [["HTML,CSS Fundamentals"], ["Javascript,React"], ["Python,Django"], ["MYSQL"], ["System Architecture"]]

let person = {
    id: 3,
    nationality: true,
    status: "active"
}



// for (let i = 0; i > hobbies.length; i+1 ) {
//     console.log(hobbies[i]);
// }

// while(age < 30){
//     console.log("party");
//     age++;
// }

const newHobby = hobbies.map((value, index) => {
    return {
        value,
        index
    }
})


function helloWorld() {
console.log("Hello World")
}


function sum(x,y) {
    console.log(x+y)
}

function times(x,y) {
    console.log(x*y)
}

function minus(x,y) {
    console.log(x-y)
}

function divide(x,y) {
    console.log(x/y)
}

function identity(array =[John,Doe]) {
 const items = array.map((value, index) => {
    return {
        value,
        index
    }
 }) 

 return items
}

let item = identity(hobbies)

function remove(array) {
    const itemsRemove = array.filter((value, index) => {
        if (typeof value === 'number') {
            return value
        }
      
        
    });

    const itemsStrings = array.filter((value, index) => {
        if (typeof value === 'string') {
            return value
        }
      
        
    });

    const itemsBoolean = array.filter((value, index) => {
        if (typeof value === 'boolean') {
            return value
        }
      
        
    });

    return [[itemsRemove], [itemsBoolean], [itemsStrings]];
}

let filtered  = remove(hobbies);

function useState(value){
    let getter = value
    function setter(value) {
        newValue = value;
    }

    return [getter, setter];
}

const [value, setValue] = useState(45);

console.log(value);

setValue(80)

console.log(value);