const fetch = require('node-fetch');
let url = "https://nonimageapi.apenasigor.repl.co/api/v1/";
const superagent = require('superagent');
class Image {
  constructor() {
    this.ImageApi = Image;

  }
async memes() {
const {body} = await superagent.get(url + "memes");
return body;
}
async cats() {
const {body} = await superagent.get(url + "cats");
return body;
}
}
module.exports = Image;