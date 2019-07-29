const urls = [
  "https://www.google.com",
  "https://stackoverflow.com",
  "https://www.reddit.com"
];

const ax = require("axios");

(async () => {
  for await (const resp of urls.map(async url => await ax.get(url))) {
    console.log(resp.status);
  }
})();
