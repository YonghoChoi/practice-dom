var clickNode = document.getElementById('clickID');
if(clickNode.addEventListener) {
  clickNode.addEventListener('click', handleClick, false);
} else {
  clickNode.attachEvent('onclick', handleClick);
}

function handleClick() {
  var node = document.getElementById('handle');
  node.style.backgroundColor = 'yellow';
  node.textContent = '이벤트 발생';
}
