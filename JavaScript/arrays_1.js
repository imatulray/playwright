//Declarations 

const myArr = [0,1,2,3,4,5]
const myArr2 = new Array(1,2,3,4,5)

//Array Methods
myArr.push(6)
myArr.pop()

myArr.unshift(9)// it adds 9(element) at the beginning of the array
myArr.shift() //it remove 9(element) from the beginning of the array 
console.log(myArr.includes(9))// check whether 9 is present in the array or not, returns true/false
console.log(myArr.indexOf(5))//return the index of element 5

const newArr = myArr.join() //it converts Array into String using comma seperated, DataType is String 

//Slice and Splice
console.log('A ', myArr)

console.log(myArr.slice(1,3))//Slice: Return copy of a section of Array. Outer range is not included,
                           //in this case it is 3. Also it does not modify the actual Array.
console.log('B ', myArr)

console.log(myArr.splice(1,3))//Splice: Removes elements from an array and, if necessary, 
                              //inserts new elements in their place, returning the deleted elements.
                              //Also it modify the original Array.
console.log('C ', myArr)









