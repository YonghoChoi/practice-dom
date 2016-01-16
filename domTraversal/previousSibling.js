var el = document.getElementById('baseball');
var prevNode = el.previousSibling;
js.log(prevNode.nodeType);
js.log(prevNode.id);

js.log(prevNode.prevSibling.nodeType);
js.log(prevNode.prevSibling.id);
