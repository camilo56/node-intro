const fs = require("fs");
const path = require('path');
const root = path.dirname(__filename); 

const file = fs.readFileSync(`${root}/files/test.json`, {encoding: "utf-8"});
const newJson = JSON.parse(file);

console.log("I'm a toString outcome", file.toString())
console.log("I'm a toJSON outcome", newJson)

fs.writeFileSync(`${root}/files/outcome.ign.json`, JSON.stringify([...newJson, {"name": "made by Node"}]))