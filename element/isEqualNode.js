var computerNode = document.getElementById('computer');
var bookNode = document.getElementById('book');
var result = bookNode.isEqualNode(computerNode);
js.log(result);

var cloneNode = bookNode.cloneNode();
result = bookNode.isEqualNode(cloneNode);
js.log(result);

var liNode = document.getElementsByTagName('li').item(1);
result = bookNode.isEqualNode(liNode);
js.log(result);
