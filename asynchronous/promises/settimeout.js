let posts = [
  { title: 'Post1', body: 'Post-one' },
  { title: 'Post2', body: 'Post-two' },
];

function createPost(post) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      posts.push(post);

      const error = true;
      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong');
      }
    }, 2000);
  });
}

function getPosts() {
  setTimeout(function () {
    let output = '';
    posts.forEach((post) => {
      output += `<li>${post.body}</li>`;
    });
    document.querySelector('ul').innerHTML = output;
  }, 1000);
}

const new_post = { title: 'post-3', body: 'Post three' };
createPost(new_post)
  .then(getPosts)
  .catch(function (err) {
    console.log(err);
  });
