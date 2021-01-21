const chronometer = new Chronometer();

// get the buttons:
const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
let minDec = document.getElementById('minDec');
let minUni = document.getElementById('minUni');
let secDec = document.getElementById('secDec');
let secUni = document.getElementById('secUni');
let milDec = document.getElementById('milDec');
let milUni = document.getElementById('milUni');
let splits = document.getElementById('splits');


function printTime() {
  print = setInterval(() =>{
  printMinutes();
},1000);
console.log(print);
}

function printMinutes() {
  minDec.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[0];
  minUni.innerText = chronometer.twoDigitsNumber(chronometer.getMinutes())[1];

  console.log(minDec.innerText)
}

function printSeconds() {
  secDec.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[0];
  secUni.innerText = chronometer.twoDigitsNumber(chronometer.getSeconds())[1];

  console.log(secDec.innerText)
}

// ==> BONUS
function printMilliseconds() {
 
}

function printSplit() {
  // ... your code goes here
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  // ... your code goes here
}

function setSplitBtn() {
  splits.innerHTML +=`
  <li>
  ${chronometer.twoDigitsNumber(chronometer.getMinutes())}:${chronometer.twoDigitsNumber(
    chronometer.getSeconds())}
  </li>`
}

function setStartBtn() {
  // ... your code goes here
}

function setResetBtn() {
  // ... your code goes here
}

// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if(btnLeft.className == "btn start"){
  chronometer.startClick(printMinutes)
  } else{
  chronometer.startClick(printSeconds)
}
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.className == "btn reset"){
    chronometer.resetClick()
  } else {
     chronometer.splitClick()
  }
})
