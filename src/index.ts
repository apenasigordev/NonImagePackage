import fetch = from 'node-fetch';
let url = "https://nonimageapi.apenasigor.repl.co/api/v1/";
declare class Image {
  ImageApi: string;
  constructor(Image: string) {
    this.ImageApi = Image;
  }
fakemsg(msg: string, username: string, avatar: string, bot: boolean) {
    if(!bot) bot = false; // Retorna falso caso usuário não coloque "bot"
    if(!username) username="User"; // Caso usuário não colocar nome
    if(!avatar) avatar="https://cdn.discordapp.com/embed/avatars/0.png?size=2048" // Caso usuário não colocar o url do avatar
    if(!msg) new TypeError("Invalid message text") // caso o texto for inválido
    
return url + `fake-message?avatar=${avatar}&username=${username}&text=${msg}&bot=${bot}`; // Retorna link da mensagem
}
async memes() {

    fetch(url + `memes`).then(res => res.json()).then(data => {
      return data;
    });
};
async cats() {
    fetch(url + `cats`).then(res => res.json()).then(data => {
      return data;
    });
};
}
export = Image;