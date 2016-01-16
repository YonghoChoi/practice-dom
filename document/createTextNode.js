var el = document.getElementById('sports');
var node = document.createTextNode('생성한 텍스트 노드');

el.appendChild(node);   // dom tree에 추가
js.log(el.textContent);
