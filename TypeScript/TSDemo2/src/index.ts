let dog = "woof"
console.log(dog)

//this is a comment
let number: number = 5

let isMarried= false
let wasMarried: boolean;

//functions
//think about parameter data types and return data types
const getFullName = (fname: string, lname: string) => {
    return `${fname} ${lname}`
}
console.log(getFullName("JM", "Secret"))


//Array
let names: string[] = ["George","Martha","Bob"]
let newNames: Array<string> = ["Ben", "Johnny", "Sue"]
let nums: number[] = [1,2,3]
let nums2: Array<number> = [4,5,6,]
console.log(nums2)