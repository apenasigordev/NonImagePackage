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
`memes()` - Return a reddit meme image url (json)
`cats()` - Return a reddit cat image url (json)

# Coming Soon
- More functions for our API
- Typescript 
- AND MORE!!

# Thanks to contributors

[M. Experimental](https://github.com/experimentaljs)

[ImmaUGC](https://github.com/ImmaUgc)

[ApenasIgorDev](https://github.com/apenasigordev)