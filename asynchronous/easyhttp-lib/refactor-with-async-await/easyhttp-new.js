// Using fetch api and promises

class EasyHttp {
  // Get posts
  async get(url) {
    const response = await fetch(url);
    const res = await response.json();
    return res;
    
    // wrong because if error is raised it is anyways caught in app-new.js
    // await fetch(url)
    //   .then(res => await res.json())
    //   .then(resp => resp)
    //   .catch(err => err);
  }

  // Create post
  async post(url, data) {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();
    return response;
  }

  // Update post
  async put(url, data) {
    const res = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    const response = await res.json();
    return response;
  }

  // Delete post
  async delete(url) {
    const res = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
      },
    });
    
    const response = await res.json();
    return response;
  }
}
