/*let person = {
    fname: "Gerald",
    lname: "Durrance",
    fullname: function(){
        return this.fname + " " + this.lname
    }
}
console.log(person.fullname())

 */
//const fruit = ["apple", "banana", "Apple", "Orange", "Apricote", "Orange"];
//fruits.sort();
//console.log();

let array1 = ["apple", "banana", "Apple", "orange", "Apricote", "Orange"]

let sortarray = (array1) => {
    let newarray = array1.sort();

    return newarray;
}
console.log(sortarray(array1))
