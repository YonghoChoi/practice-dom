var node = document.getElementById('inputID');
node.addEventListener('keydown', keyDown);

function keyDown(event) {
  js.log('altKey : ' + event.altKey);
  js.log('ctrlKey : ' + event.ctrlKey);
  js.log('shiftKey : ' + event.shiftKey);
  js.log('metaKey : ' + event.metaKey);
  js.log('keyIdentifier : ' + event.keyIdentifier);
  js.log('location : ' + event.location);
}
