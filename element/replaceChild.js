var childNode = document.getElementById('replace_child');
childNode.addEventListener('click', clickNode, false);
function clickNode() {
  var replace = document.createElement('div');
  replace.textContent = '대체한 노드';
  replace.setAttribute('class', 'greenClass');

  var wrapNode = document.getElementById('wrap');
  var el = document.getElementById('replace_child');
  wrapNode.replaceChild(replace, el);

  // 대체된 엘리먼트가 변수에 있으므로 사용할 수 있다.
  js.log(el.id);
}
