var nodes = document.getElementById('items').children;
js.log('length : ', nodes.length);

js.log('nodes.item(1).id : ', nodes.item(1).id);
js.log('nodes[0].id : ', nodes[0].id);

js.log('4번 : ', nodes.namedItem('basketball').id);
js.log('5번 : ', nodes.namedItem('swimName').textContent);

js.log('nodes['basketball'].id : ', nodes['basketball'].id);
js.log('nodes['swimName'].name', nodes['swimName'].textContent)
