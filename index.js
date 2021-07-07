const fetch = require('node-fetch');
let url = "https://nonimageapi.apenasigor.repl.co/api/v1/";

class Image {
  constructor(Image) {
    this.ImageApi = Image;
  }
fakemsg(msg, username, avatar, bot) {
    if(!bot) bot = false; // Retorna falso caso usuário não coloque "bot"
    if(!username) username="User"; // Caso usuário não colocar nome
    if(!avatar) avatar="https://cdn.discordapp.com/embed/avatars/0.png?size=2048" // Caso usuário não colocar o url do avatar
    if(!msg) new TypeError("Invalid message text") // caso o texto for inválido
    
return url + `fake-message?avatar=${avatar}&username=${username}&text=${msg}&bot=${bot}`; // Retorna link da mensagem
}
async memes(json) {
  if(json) {
    fetch(url + `memes?json=true`).then(res => res.json()).then(data => {
      return data.post;
    });
  } else return url + `memes`;
};
async cats(json) {
  if(json) {
    fetch(url + `cats?json=true`).then(res => res.json()).then(data => {
      return data.post;
    });
  } else return url + `cats`;
};
}
module.exports = Image;