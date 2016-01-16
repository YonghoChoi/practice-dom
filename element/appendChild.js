var appendChildNode = document.getElementById('append_child');
appendChildNode.addEventListener('click', clickNode, false);
function clickNode() {
  var afterNode = document.getElementById('after');
  afterNode.appendChild(document.createElement('div'));
  js.log(afterNode.firstElementChild.nodeName);

  var el = document.getElementById('append_child');
  afterNode.appendChild(el);
  el.style.top = '30px';
  el.style.left = '10px';

  // 차일드를 추가했으므로 두개의 차일드 엘리먼트가 존재
  js.log('childElementCount : ', afterNode.childElementCount);
  // 속성도 이동
  js.log(afterNode.lastElementChild.id)
}
