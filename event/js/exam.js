//window.addEventListener('resize', resizePrint);

document.addEventListener('DOMContentLoaded', function(event){
  var myForm = document.getElementById('myForm');
  myForm.addEventListener('submit', onSubmit);
});

function resizePrint(event) {
  js.log(event.target.innerWidth, ', ', event.target.innerWidth);
}

function onSubmit() {
  debugger;
  var one = document.getElementById('one');
  var two = document.getElementById('one');
  js.log('one : ', one.value);
  js.log('two : ', two.value);
  two.focus();
}
