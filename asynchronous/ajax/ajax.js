document.querySelector('.btn').addEventListener('click', getJokes);

function getJokes() {
  const count = Number(prompt('Enter number of jokes'));
  const xhr = new XMLHttpRequest();

  console.log(xhr.readyState);
  xhr.open('GET', `http://api.icndb.com/jokes/random/${count}`, true);
  console.log(xhr.readyState);
  
  xhr.onload = function () {
    // console.log(xhr.readyState);
    if (this.status === 200) {
      console.log(xhr.readyState);
      const jokes = JSON.parse(this.responseText);
      console.log(jokes);
      let output = '';
      jokes.value.forEach((joke) => {
        output += `<li>${joke.joke}</li>`;
      });
      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();
}
