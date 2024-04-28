//object literals

const jsuser = {} //Basic syntax for Object creation
const mySym = Symbol("key1")// Symbol datatype
const Jsuser = {
    name: "Hitesh",
    "full name": "choudhary",
    [mySym]: "mykey1",
    emailId: "abc@mail.com",

}
console.log(Jsuser["full name"])
console.log(typeof mySym)
console.log(Jsuser)

/*-----------------------------*/
//Functions treaded as Objects
Jsuser.greeting = function(){
    console.log("Hello Js User")
}

Jsuser.greetingTwo = function(){
    console.log(`Hello Js User, ${this["full name"]}`)
}
console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo())