document.getElementById('json').addEventListener('click', loadJsonData);

function loadJsonData() {
  fetch('input/json-input.json')
    .then(function (response) {
      return response.json();
    })
    .then(function (objs) {
      output = '';
      objs.forEach((obj) => {
        output += `<li>${obj.title}, ${obj.body}</li>`;
      });
      document.getElementById('output2').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}
