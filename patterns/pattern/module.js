// Module

const UICtrl = (function () {
  // Private
  let text = 'Hello';
  const changeText = function () {
    const element = document.querySelector('h1');
    element.textContent = text;
  };
  return {
    // public
    callChangeText: function () {
      changeText();
      console.log(text);
    },
  };
})();

UICtrl.callChangeText();
// UICtrl.changeText();
// console.log(UICtrl.text); // undefined

// Revealing module pattern
const Item = (function () {
  let items = [];
  function add(item) {
    items.push(item);
  }
  function get(id) {
    return items.filter((item) => item.id === id);
  }

  return {
    add: add,
    get: get,
  };
})();
Item.add({ id: 100, name: 'John' });
Item.add({ id: 101, name: 'Doe' });
console.log(Item.get(101));
