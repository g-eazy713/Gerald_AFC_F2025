function add(num1, num2){
return num1 + num2;
}
function squaredNum(num1) {
return num1^2;
// return num1*num1;
}

// One way to export functions
// module.exports.add = add;
// module.exports.squaredNum = squaredNum()

module.exports = {
    add,
    squaredNum
}