const marvel_heros = ["thor","ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]
const desi_heros = ["shaktiman","nagraj","doga"]

//Concat Method: It merges two arrays values into one single array.
const concatArray = marvel_heros.concat(dc_heros)
//console.log(concatArray)

//Spread Method: It merges more than one arrays into one single array.
const spreadArray = [...marvel_heros,...dc_heros,...desi_heros]
//console.log(spreadArray)

//Flat Method: Returns a new array with all sub-array elements concatenated into it 
//recursively up to the specified depth.
const new_Array = [1,2,3,[4,5,6],[7,8,[9,10]]]
const real_New_Array = new_Array.flat(Infinity)

//console.log(real_New_Array)

//.from method: it converts anything into Array
console.log(Array.from("Hitesh"))
console.log(Array.from({name: 'Hitesh'})) //Interesting

//.of Method: Convert multiple variables into Array
let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))



