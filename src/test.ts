import nonimageapi from './index';
const images = new nonimageapi();
 
 async function test() {
let json = await images.memes();
console.log(json);
}