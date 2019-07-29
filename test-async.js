const list = []; //...an array filled with values

const functionWithPromise = item => {
  //a function that returns a promise
  return Promise.resolve("ok");
};

const anAsyncFunction = async item => {
  return await functionWithPromise(item);
};

const getData = async () => {
  return await Promise.all(list.map(item => anAsyncFunction(item)));
};

(async () => {
  const data = getData();
  console.log(data);
})();
