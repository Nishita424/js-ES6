document.getElementById('api').addEventListener('click', loadApiData);

function loadApiData() {
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(function (response) {
      console.log(response);
      return response.json();
    })
    .then(function (data) {
      output = '';
      data.forEach(function (item) {
        output += `<li>${item.name}</li>`;
      });
      document.getElementById('output3').innerHTML = output;
    })
    .catch(function (err) {
      console.log('Error is: ' + err);
    });
}
