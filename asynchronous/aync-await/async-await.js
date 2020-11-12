async function myFunc() {
  const promise = new Promise(function (resolve, reject) {
    // setTimeout(() => resolve('Hello world'), 2000);
    setTimeout(() => reject('Hello world'), 2000);
  });

  return await promise.then((res) => res).catch((err) => err);

  //   const error = true;

  //   if (!error) {
  //     const res = await promise;
  //     return res;
  //   } else {
  //     return Promise.reject(new Error('Something went wrong'));
  //   }
}

myFunc()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
