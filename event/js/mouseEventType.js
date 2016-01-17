// 클릭하면 mousedown, mouseup, click 순서로 발생
var node = document.getElementById('mouseID');
node.addEventListener('click', showMouse);
node.addEventListener('mousedown', showMouse);
node.addEventListener('mouseup', showMouse);
node.addEventListener('mouseover', showMouse);
node.addEventListener('mouseout', showMouse);

// dbclick은 click이 연속해서 두번 발생
node.addEventListener('dbclick', showMouse);

function showMouse(event) {
  js.log('type : ' + event.type);
}
