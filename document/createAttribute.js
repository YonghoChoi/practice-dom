var node = document.createAttribute('memoNode');
node.nodeValue = '생성한 속성 노드';

var el = document.getElementById('sports');
el.setAttributeNode(node);  // 속성 노드를 id가 sports인 엘리먼트에 설정

// 엘리먼트 속성이므로 표시되진 않지만 설정되어 있다.
js.log(el.getAttribute('memoNode'));
