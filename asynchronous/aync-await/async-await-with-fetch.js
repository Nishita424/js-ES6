async function getUsers() {
  const promise = fetch('http://api.icndb.com/jokes/random/3');

  const res = await promise;

  return res;
}

getUsers().then((res) => console.log(res));
