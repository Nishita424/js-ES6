const http = new EasyHttp();

// Get posts
http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
  if (err) {
    console.log(err);
  } else {
    console.log(posts);
  }
});
// console.log(posts);

// Create post
http.post(
  'https://jsonplaceholder.typicode.com/posts/',
  {
    title: 'New post',
    body: 'Hello post',
  },
  function (err, new_post) {
    if (err) {
      console.log(err);
    } else {
      console.log(new_post);
    }
  }
);

// Update post
http.put(
  'https://jsonplaceholder.typicode.com/posts/1',
  {
    title: 'Updated post',
    body: 'Hello updated',
  },
  function (err, updated_post) {
    if (err) {
      console.log(err);
    } else {
      console.log(updated_post);
    }
  }
);

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1/', function (
  err,
  response
) {
  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});
