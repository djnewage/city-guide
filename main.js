
// Arrays
// var userData = ["joe", 234, 46, 65, 75 ,756, "danny", 'james']
// userData


// objects
// var person = {
//   name: 'Joe',
//   age: 29,
//   kids: true,
//   degrees: ["BA", "AS"],
//   printName: function(){
//     console.log('my name is Joe')
//   }
// }

// person.whatever^

// undefined 
// var bestTeam;
// console.log(bestTeam)

// null 
// var student = null;
// console.log(student)


// Data types 
// strings

// var name ='Joe';

// numbers
// var number = 23;

// arrays
// var array = ["joe", 23, ["hey", "Joe"]]

// var object = {
//   key: "value",
//   func: function(){
//     return 'hey'
//   }
// }


// booleans

// var booleans = 23 > 44; //false
// var booleans = 25 < 26; //true

// var nullable = null
// var another = undefined


// Tenarary operators
// (5==5) ? "yes it is equal" : "no it is not equal";


// let person1 = {
//   name: "joe",
//   height: 5,
//   color: "black",
//   age: 26,
//   cars: ["mazda", "ford", "toyota", "volks", 4],
// }


// var user = {
//   name: 'joe',
//   age: 28,
// }

// if(user.name !== 'joe' && user.age == 29){
//   console.log('hey let the user in');
// }else{
//   console.log('dont give access');
// }

// sting conversion

// var a = 33.453050;
// a.toString() + 7498729;

// var a = 5 * 20;

// var b = ((16 - 2) * 2) / 4;

// var c = a * b;

// var name = 'tristan';

// console.log("hello mr " + name + " how is your day?");

// Methods with .lenght

// let myName = "Tristan Sacotte loem";

//  if (myName.length > 140 ) {
//    console.log('sorry its too long')
//  }else {
//    console.log('we posted your name on twitter')
//  }


// var firstName = "Tristan"
// console.log(firstName);
// console.log(firstName.toUpperCase)
// console.log(firstName.toLowerCase)

// var lastName = " Sacotte"

// var fullName = firstName + '' + lastName;

// var cars = ["ford", "mustang", "Viper" , "neon"];

// cars.push("ferrari");
// cars.shift()


// let artist = ["Common", "Kanye", "Lupe", "J.cole", "Vic Mensa"];
// console.log(artist);

let student = {
    id: 83,
    name: "joe",
    lastName: "smith",
    Grade: function(grade) {
        // console.log('His grade is' + grade);
        return 'his grade is  ' + grade; 
    },
    classes: ["math", "english", "gym", "cooking"]
}

console.log(student)
console.log("===============================")
