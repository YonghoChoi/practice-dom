var node = document.getElementById('inputID');
node.addEventListener('keydown', keyDownUp);
node.addEventListener('keypress', keyDownUp);
node.addEventListener('keyup', keyDownUp);

function keyDownUp(event) {
  js.log('type : ', event.type, 'code : ', event.keyCode);
}
