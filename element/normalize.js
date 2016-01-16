var computerNode = document.getElementById('computer');
var textNode = document.getElementById('textClick');
textNode.addEventListener('click', clickText, false);
function clickText() {
  var node = document.createTextNode('텍스트 노드 추가');
  computerNode.appendChild(node);

  js.log('textContent : ', computerNode.textContent);
  js.log('length : ', computerNode.childNodes.length);
}

var normalizeNode = document.getElementById('normalizeClick');
normalizeNode.addEventListener('click', function() {
  computerNode.normalizeNode();

  js.log('normalize() : ', computerNode.textContent);
  js.log('length : ', computerNode.childNodes.length);
})
