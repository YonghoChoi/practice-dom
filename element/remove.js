var sportsNode = document.getElementById('sports');
sportsNode.addEventListener('click', clickNode, false);

function clickNode() {
  var value = document.getElementById('soccer').remove();
  js.log('childElementCount : ', target.firstChild.childElementCount);
  js.log(value);
}
