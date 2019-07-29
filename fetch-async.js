const ax = require ('axios');

async function getResp (url) {
    if (!url) return;
    const resp = await ax.get(url);
    return resp;
}

const urls = ['http://jsonplaceholder.typicode.com/photos',
              'http://www.google.com',
              'http://www.github.com',
              'http://www.gitlab.com',];

// async function go() {
//     // const resps = await Promise.all (urls.map (getResp));
//     const resps = await Promise.all (urls.map (url => ax.get(url)));
//     const statuses = resps.map(resp => resp.status);
//     console.log (statuses);
// }

(async () => {
    const resps1 = await urls.map (async url => await ax.get (url));
    const resps2 = await urls.map (url => getResp (url));
    // const resps = await urls.map (getResp);
    for await (const resp of resps1) {
        console.info ({ url: resp.config.url, status: resp.status });
    }

    for await (const resp of resps2) {
        console.info ({ url: resp.config.url, status: resp.status });
    }
})();