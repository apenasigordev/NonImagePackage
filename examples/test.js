const nonimageapi = require("../index.js");
const images = new nonimageapi();
let test = images.fakemsg("bomdia", "nome-legal", null, true);
console.log(test); 
let json = images.memes(true);
console.log(json);