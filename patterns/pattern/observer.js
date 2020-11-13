// Observer pattern

class Observer {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
    console.log(`You're now subscribed to this function: ${fn.name}`);
  }
  unsubscribe(fn) {
    this.observers = this.observers.filter(function (observer) {
      if (observer !== fn) {
        return observer;
      }
      console.log(`You're now unsubscribed from: ${fn.name}`);
    });
  }
  fire() {
    this.observers.forEach((observer) => observer.call()); // or observer()
  }
}

const getMilliSeconds = function () {
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
};
const getSeconds = function () {
  console.log(`Current seconds: ${new Date().getSeconds()}`);
};

const obs = new Observer();

document.querySelector('.sub-1').addEventListener('click', function (e) {
  obs.subscribe(getMilliSeconds);
});
document.querySelector('.sub-2').addEventListener('click', function (e) {
  obs.subscribe(getSeconds);
});
document.querySelector('.unsub-1').addEventListener('click', function (e) {
  obs.unsubscribe(getMilliSeconds);
});
document.querySelector('.unsub-2').addEventListener('click', function (e) {
  obs.unsubscribe(getSeconds);
});
document.querySelector('.fire').addEventListener('click', function (e) {
  obs.fire();
});
