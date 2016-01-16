// 텍스트 노드를 제외한 첫 번째 엘리먼트 반환
var el = document.getElementById('sports');
var child = el.firstElementChild;
js.log('nodeType : ', child.nodeType);
js.log('id : ', child.id);

js.log('firstElementChild : ', child.firstElementChild);
