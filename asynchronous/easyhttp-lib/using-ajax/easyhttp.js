// Using ES5 and callbacks

// constructor
function EasyHttp() {
  this.http = new XMLHttpRequest();
}

// Make http GET request
EasyHttp.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);
  let self = this;

  this.http.onload = function () {
    //  Error: Cannot read property status of undefined at XMLHttpRequest.http.onload
    /* Arrow function will fix this :
    Since normal function callback will change the scope, whereas inside arrow function scope doesnt change
   this.http.onload =  () => { */
    //    or
    if (self.http.status === 200) {
      //   console.log(self.http.responseText);
      // return self.http.responseText; returns undefined so we use callback
      callback(null, self.http.responseText);
      // Gives undefined response because data is returned even before it is fetched
    } else {
      callback(self.http.status, null);
    }
  };

  this.http.send();
};

// Make http POST request
EasyHttp.prototype.post = function (url, new_post, callback) {
  this.http.open('POST', url, true);

  //   For post, include http header
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(new_post));
};

// Make http PUT request
EasyHttp.prototype.put = function (url, updated_post, callback) {
  this.http.open('PUT', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');

  let self = this;
  this.http.onload = function () {
    callback(null, self.http.responseText);
  };

  this.http.send(JSON.stringify(updated_post));
};

// Make http DELETE request
EasyHttp.prototype.delete = function (url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback(null, 'Post deleted');
    } else {
      callback(self.http.status, null);
    }
  };

  this.http.send();
};
