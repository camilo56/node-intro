const {sumOne, sumOther } = require("./closure");

module.exports = () =>{
    console.log("I'm a Clusure Test: -----")

    console.log("closure", sumOne())
    console.log("closure", sumOne())
    console.log("closure", sumOne())
    console.log("closure", sumOther(10))
}
