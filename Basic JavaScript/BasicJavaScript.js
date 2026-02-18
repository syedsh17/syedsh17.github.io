function getCounterValue() {
  return parseInt(document.getElementById("counter").textContent, 10);
}

function setCounterValue(val) {
  document.getElementById("counter").textContent = val;
}

//Function for Simple Functions
function tickUp() {
  setCounterValue(getCounterValue() + 1);
}

function tickDown() {
  setCounterValue(getCounterValue() - 1);
}

//Function for Simple For Loop
function runForLoop() {
  const n = getCounterValue();
  let output = "";

  for (let i = 0; i <= n; i++) {
    output += i + (i === n ? "" : " ");
  }

  document.getElementById("forLoopResult").textContent = output;
}

//Function for Repetition with Condition
function showOddNumbers() {
  const n = getCounterValue();
  let output = "";

  for (let i = 1; i <= n; i++) {
    if (i % 2 !== 0) {
      output += i + " ";
    }
  }

  document.getElementById("oddNumberResult").textContent = output.trim();
}

//Function for Arrays
function addMultiplesToArray() {
  const n = getCounterValue();
  const arr = [];

  for (let i = 5; i <= n; i += 5) {
    arr.push(i);
  }

  arr.reverse();

  console.log(arr);
}

//Function for Objects and Form Fields
function printCarObject() {
  const carObj = {
    cType: document.getElementById("carType").value,
    cMPG: document.getElementById("carMPG").value,
    cColor: document.getElementById("carColor").value
  };

  console.log(carObj);
}

//Function for Objects and Form Fields pt.2
function loadCar(carNum) {
  let carData = null;

  if (carNum === 1) carData = carObject1;
  if (carNum === 2) carData = carObject2;
  if (carNum === 3) carData = carObject3;

  if (!carData) return;

  document.getElementById("carType").value = carData.cType;
  document.getElementById("carMPG").value = carData.cMPG;
  document.getElementById("carColor").value = carData.cColor;
}

//Function for Changing Styles
function changeColor(colorNum) {
  const p = document.getElementById("styleParagraph");

  if (colorNum === 1) p.style.color = "red";
  if (colorNum === 2) p.style.color = "green";
  if (colorNum === 3) p.style.color = "blue";
}
