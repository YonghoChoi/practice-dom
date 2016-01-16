var wrapNode = document.getElementById('wrap');
wrapNode.addEventListener('click', clickWrap, false);
function clickWrap() {
  var el = document.getElementById('sports');

  // true 차일드까지 복사
  var cloneNodes = el.cloneNode(true);
  var target = document.getElementById('clone');
  target.appendChild(cloneNodes);

  // id가 중복되므로 변경
  target.firstChild.id = 'cloneID';
  js.log('childElementCount : ', target.firstChild.childElementCount);
}
