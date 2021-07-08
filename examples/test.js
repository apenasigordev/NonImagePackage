const nonimageapi = require("../index.js");
const images = new nonimageapi();
async function test() {
   let img = await images.memes()
   console.log(img.url)
};
test();