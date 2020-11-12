document.getElementById('txt').addEventListener('click', loadTextData);

function loadTextData() {
  fetch('./input/text.txt')
    .then(function (response) {
      // response.text() is the prototype method that has the actual content in input file
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      document.getElementById('output1').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}
