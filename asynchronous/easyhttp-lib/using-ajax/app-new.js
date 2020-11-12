const http = new EasyHttp();

// const res = http.get('http://api.icndb.com/jokes/random/3');
// getting response as undefined because data is being fetched asyncly, so use callbacks/promises
// console.log(res);

http
  .get('https://jsonplaceholder.typicode.com/posts')
  .then((response) => {
    response.forEach((item) => console.log(item));
  })
  .catch((err) => console.log(err));

const data = {
  title: 'New posting',
  userid: 423,
};
http
  .post('https://jsonplaceholder.typicode.com/posts', data)
  .then((response) => console.log(response))
  .catch((err) => console.log(err));

http
  .put('https://jsonplaceholder.typicode.com/posts/1/', data)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));

http
  .delete('https://jsonplaceholder.typicode.com/posts/1/')
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
