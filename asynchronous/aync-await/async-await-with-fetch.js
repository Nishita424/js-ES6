async function getUsers() {
  const response = await fetch('http://api.icndb.com/jokes/random/3');
  const res = await response.json();
  return res;

  /*
    await has no effect of expressions like below:
    const res = await response;
  */
}

getUsers()
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
