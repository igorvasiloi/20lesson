var elems = document.querySelectorAll("div, section, p");

var numberOfClicks = 0;

function clickHandlerCapture(evt) {
  console.log("numberOfClicks: ", numberOfClicks);
  function highlightElement(evt) {
    var phase = evt.eventPhase;
    var el = evt.currentTarget;

    debugger;

    console.log("el:", el, phase);

    setTimeout(() => {
      el.style = "background-color: green";
    }, numberOfClicks * 1000);

    numberOfClicks++;
  }

  highlightElement(evt);
}

function clickHandler(evt) {
  console.log("numberOfClicks: ", numberOfClicks);

  function highlightElement(evt) {
    var phase = evt.eventPhase;
    var el = evt.currentTarget;

    console.log("el:", el, phase);

    setTimeout(() => {
      el.style = "background-color: red";
    }, numberOfClicks * 1000);

    numberOfClicks++;
  }

  highlightElement(evt);
}

for (var i = 0; i < elems.length; i++) {
  elems[i].addEventListener("click", clickHandler);
  elems[i].addEventListener("click", clickHandlerCapture, { capture: true });
}

// var arr = [0, 5, 8, 10, 100, -1];

// console.error(arr);

// console.log("FOR: starting from first element till last element");
// for (var index = 0; index < arr.length; index++) {
//   console.log("array with index = ", index, " = ", arr[index]);
// }

// console.log(
//   "FOR: starting from last element till first element (reverse order)"
// );
// for (var index = arr.length - 1; index >= 0; index--) {
//   console.log("array with index = ", index, " = ", arr[index]);
// }

// console.log("FOR: starting from last element till first element (step: 2)");
// for (var index = 0; index < arr.length; index = index + 2) {
//   console.log("array with index = ", index, " = ", arr[index]);
// }

// console.log("WHILE: starting from first element till last element");
// index = 0;
// while (index < -1) {
//   console.log("array with index = ", index, " = ", arr[index]);
//   index++;
// }

// console.log("WHILE: starting from first element till last element");
// index = 0;
// do {
//   console.log("array with index = ", index, " = ", arr[index]);
//   index++;
// } while (index < -1);

// var car = {
//   model: "toyota",
//   volum: "1.5",
//   power: 100
// };

// console.log("our object: ", car);
// for (var key in car) {
//   console.log("car has key = ", key, " with value = ", car[key]);
// }

// console.log("iterate through object by using simple for");
// var keys = Object.keys(car);
// for (let index = 0; index < keys.length; index++) {
//   var currentKey = keys[index];
//   console.log("car has key = ", currentKey, " with value = ", car[currentKey]);
// }