// 스크롤 했을떄의 위치 정보도 만들어 놓는 것이 좋음.
var node = document.getElementById('mouseID');
node.addEventListener('click', showMouse);

function showMouse(event) {
  js.log('altKey : ' + event.altKey);
  js.log('ctrlKey : ' + event.ctrlKey);
  js.log('shiftKey : ' + event.shiftKey);
  js.log('screenX : ' + event.screenX);
  js.log('screenY : ' + event.screenY);
  js.log('clientX : ' + event.clientX);
  js.log('clientY : ' + event.clientY);
  js.log('x : ' + event.x);
  js.log('y : ' + event.y);
  js.log('pageX : ' + event.pageX);
  js.log('pageY : ' + event.pageY);
  js.log('offsetX : ' + event.offsetX);
  js.log('offsetY : ' + event.offsetY);
  js.log('button : ' + event.button);
  js.log('relatedTarget : ' + event.relatedTarget);
}
