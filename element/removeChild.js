var childNode = document.getElementById('remove_child');
childNode.addEventListener('click', removeChild, false);
function removeNode() {
  var el = document.getElementById('remove_child');
  var remove = el.parentNode.removeChild(el);

  // 삭제되었으므로 null 반환
  js.log(document.getElementById('remove_child'));

  // 변수에 남아 있으므로 사용할 수 있다.
  js.log(remove.id);
}
