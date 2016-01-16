var el = document.getElementById('parent');
js.log('nodeType : ', el.nodeType);

var parent = el.parentNode;
js.log('el.parentNode.id : ', parent.id);

var doc = document.documentElement;
js.log('doc.parentNode : ', doc.parentNode.nodeName);
js.log('doc.parentElement : ', doc.parentElement);
