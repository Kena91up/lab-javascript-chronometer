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
  printSeconds();
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
  let time = chronometer.splitClick()
    let li = document.createElement('li')
    li.innerHTML = time 
    splits.appendChild(li)
}

function clearSplits() {
  // ... your code goes here
}

function setStopBtn() {
  btnLeft.innerText = 'STOP'
  btnLeft.className = 'btn stop'
}

function setSplitBtn() {
  btnRight.innerText = 'SPLIT'
  btnRight.className = 'btn split'
}

function setStartBtn() {
  btnLeft.innerText = 'START'
  btnLeft.className = 'btn start'
}

function setResetBtn() {
  btnRight.innerText = 'RESET'
  btnRight.className = 'btn reset'
}
// Start/Stop Button
btnLeft.addEventListener('click', () => {
  if (btnLeft.classList.contains('start')) {
          setStopBtn();
          setSplitBtn();
          chronometer.startClick(printTime)
  }
    else {
          setStartBtn();
          setResetBtn(); 
          chronometer.stopClick();
  }
  
});

// Reset/Split Button
btnRight.addEventListener('click', () => {
  if(btnRight.classList.contains('split') )
  {
     printSplit();
  }  
     else {
     chronometer.resetClick()
     splits.innerHTML = ""
     printTime()
    }
})
