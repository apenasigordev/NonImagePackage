# NonImageApi (Beta)

- An api for your Discord bot, for FREE!

# How to use?
```
const NonImageApi = require('nonimageapi');
const images = new NonImageApi();
async function memes() {
let meme = await images.memes();
console.log(meme); // Returns json url
}
meme();
```

```
const NonImageApi = require('nonimageapi');
const images = new NonImageApi();

async function cats() {
  let cat = await images.cats();
  console.log(cat)
}
cats()
```
-----

# All functions

`memes(<Json>)` - Take meme from a reddit and turn it into an image (Json optional).
`cats(<Json>)` - Take pictures of cats from reddit [Cats](https://www.reddit.com/r/cats) (Json optional).
`fakemsg(<message>, <username>, <avatar>, <bot>)` - Creates a fake Discord message / Direct from our api website (Bot optional) : (In construction...);

# Coming Soon
- More functions for our API
- Typescript 
- AND MORE!!

# Thanks to contributors

[M. Experimental](https://github.com/experimentaljs)

[ImmaUGC](https://github.com/ImmaUgc)

[ApenasIgorDev](https://github.com/apenasigordev)