const urls = [
  "https://www.google.com",
  "https://stackoverflow.com",
  "https://www.reddit.com"
];

const ax = require("axios");

(async () => {
  for await (const urlAndResp of urls
                                  .map(async url => {
                                    return { url: url, resp: await ax.get(url) }
                                  }))
    console.log(urlAndResp.resp.status);
  }
)();
