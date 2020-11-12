// Problem & why we need callback
// After 1 second, posts are fetched, but new post is created after 2s
/*
let posts = [
  { title: 'Post1', body: 'This is post one' },
  { title: 'Post2', body: 'This is post two' },
];

function createPost(post) {
  setTimeout(function () {
    posts.push(post);
  }, 2000);
}

function getPosts() {
  let output = '';
  setTimeout(function () {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    console.log(output);
    document.querySelector('ul').innerHTML = output;
  }, 1000);
}

const new_post = { title: 'Post3', body: 'This is post three' };
createPost(new_post);
getPosts();
*/

// Solution using callback
// After 2 secs ill get all three posts
let posts = [
  { title: 'Post1', body: 'This is post one' },
  { title: 'Post2', body: 'This is post two' },
];

function createPost(post, callback) {
  setTimeout(function () {
    posts.push(post);
    callback();
  }, 2000);
}

function getPosts() {
  let output = '';
  setTimeout(function () {
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
    });
    console.log(output);
    document.querySelector('ul').innerHTML = output;
  }, 1000);
}

const new_post = { title: 'Post3', body: 'This is post three' };
createPost(new_post, getPosts);
