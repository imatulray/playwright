//Declare objects with the help of Constructors

const tinderuser = new Object()
tinderuser.id = "123abc"
tinderuser.name = "Mukesh"
tinderuser.gender = "Male"

//console.log(tinderuser)

const obj1 = {1: "a", 2:"b"}
const obj2 = {3: "c", 4:"d"}

//use Spread method to merge all the objects values into one single object

const obj3 = {...obj1,...obj2}
console.log(obj3)
console.log(Object.keys(tinderuser))//it returns all the keys for Tinderuser object in an array
console.log(Object.values(tinderuser))//it returns all the values for tinderuser object in an array

console.log(tinderuser.hasOwnProperty('gender'))//Determines whether an object has a property with the specified name.

//Destructuring of Objects

const course = {
    courseName: "JS in Hindi",
    coursePrice: "999",
    courseInstructor: "hitesh"
}

const {courseName: subject} = course // Syntax for destructuring of object.

console.log(subject)