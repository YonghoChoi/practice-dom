var node = document.getElementById('inBox');
node.addEventListener('mouseover', showMouse);
node.addEventListener('mouseout', showMouse);

function mouseOver(event) {
  js.log('over, releatedTarget : ' + event.relatedTarget.id);
  js.log('over, target : ' + event.target.id);
}

function mouseOut(event) {
  js.log('out, relatedTarget : ' + event.relatedTarget.id);
  js.log('out, target : ' + event.target.id);
}
