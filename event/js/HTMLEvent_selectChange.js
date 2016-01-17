
var node = document.getElementById('inputID');
document.addEventListener('select', selectEvent);
document.addEventListener('change', changeEvent);

function selectEvent(event) {
  js.log('select : ', event.target.value);
}

function selectEvent(event) {
  js.log('change : ', event.target.value);
}
