'use strict';

const readline = require('readline');
// const fs = require('fs');

async function processLineByLine(filePath) {
  const rli = readline.createInterface({
    input: require('fs').createReadStream(filePath),
  });

  for await (const line of rli) {
    console.log(line);
  }
}

processLineByLine('c:/temp/blah2.txt').catch(console.error);