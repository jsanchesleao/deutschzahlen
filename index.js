// Import stylesheets
import './style.css';
import "bulma";

let nextNumber = 0;

function doListen() {
  var msg = new SpeechSynthesisUtterance(String(nextNumber));
  msg.lang = 'de';
  speechSynthesis.speak(msg);
}

function doChange() {
  document.getElementById("numberinput").value = "";
  nextNumber = Math.floor(Math.random() * 1000);
}

function doSubmit() {
  var typedNumber = Number(document.getElementById("numberinput").value);
  if (typedNumber === nextNumber) {
    alert('Right! ' + nextNumber);
  }
  else {
    alert('Wrong! Number was ' + nextNumber);
  }
  doChange();
}

doChange();
window.doSubmit = doSubmit;
window.doListen = doListen;
window.doChange = doChange;