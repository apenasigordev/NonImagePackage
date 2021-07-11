import * as request from 'superagent';
let url = "https://nonimageapi.apenasigor.repl.co/api/v1/";
 class Image {
  constructor(Image: string = "") {
    
    
  }
fakemsg(msg: string, username: string, avatar: string, bot: boolean) {
    if(!bot) bot = false;
    if(!username) username="User";
    if(!avatar) avatar="https://cdn.discordapp.com/embed/avatars/0.png?size=2048"
    if(!msg) new TypeError("Invalid message text")
    
return url + `fake-message?avatar=${avatar}&username=${username}&text=${msg}&bot=${bot}`;
}
async memes() {

const res = await request.get(url + `memes`);
return res.body;
};
async cats() {
const res = await request.get(url + `cats`);
return res.body;
};
}
export = Image;