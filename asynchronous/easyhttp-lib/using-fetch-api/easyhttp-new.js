// Using fetch api and promises

class EasyHttp {
  // Get posts
  get(url) {
    return new Promise(function (resolve, reject) {
      fetch(url)
        .then((response) => resolve(response.json()))
        .catch((err) => reject(err));
    });
  }

  // Create post
  post(url, data) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((data) => resolve(data))
        .catch((err) => reject(err));
    });
  }

  // Update post
  put(url, data) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((response) => response.json())
        .then((res) => resolve(res))
        .catch((err) => reject(err));
    });
  }

  // Delete post
  delete(url) {
    return new Promise(function (resolve, reject) {
      fetch(url, {
        method: 'DELETE',
        headers: {
          'Content-type': 'application/json',
        },
      })
        /*.then((response) => response.json())
        .then((res) => resolve(res))*/
        .then((response) => resolve('Resource deleted'))
        .catch((err) => reject(err));
    });
  }
}
