const fetch = require('node-fetch');
let url = "https://nonimageapi.apenasigor.repl.co/api/v1/";
const superagent = require('superagent');
class Image {
  constructor() {
    this.ImageApi = Image;

  }
fakemsg(msg, username, avatar, bot) {
    if(!bot) bot = false; // Retorna falso caso usuário não coloque "bot"
    if(!username) username="User"; // Caso usuário não colocar nome
    if(!avatar) avatar="https://cdn.discordapp.com/embed/avatars/0.png?size=2048" // Caso usuário não colocar o url do avatar
    if(!msg) new TypeError("Invalid message text") // caso o texto for inválido
    
return url + `fake-message?avatar=${avatar}&username=${username}&text=${msg}&bot=${bot}`; // Retorna link da mensagem
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