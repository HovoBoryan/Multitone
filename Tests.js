const Multiton = require('./Multitone')

function testforaddObjects() {
let obj1 = new Multiton();
//let obj2 = new Multiton();

if(obj1) {
    console.log("test for Multiton failed !!!... ");
} else {
    console.log("Test for Multitone passed .");
}
}

testforaddObjects();