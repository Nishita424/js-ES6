document.getElementById('api').addEventListener('click', loadApiData);

function loadApiData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((data) => {
      output = '';
      data.forEach((item) => (output += `<li>${item.name}</li>`));

      document.getElementById('output3').innerHTML = output;
    })
    .catch((err) => console.log('Error is: ' + err));
}
