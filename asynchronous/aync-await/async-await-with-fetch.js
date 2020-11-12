async function getUsers() {
  const response = await fetch('http://api.icndb.com/jokes/random/3');

  response
    .then((res) => await res.json())
    .then((data) => data)
    .catch((err) => err);
    
  /*
    await has no effect of expressions like below:
    const res = await response;
  */
}

getUsers()
.then((res) => console.log(res))
.catch(err => console.log(err));
