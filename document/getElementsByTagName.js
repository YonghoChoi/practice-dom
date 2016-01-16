var nodes = document.getElementsByTagName('input');
show(nodes);

nodes = document.getElementsByTagName('table');
js.log(nodes);
js.log(nodes.length);

var el = document.getElementById('checkNode');
nodes = el.getElementsByTagName('input');
show(nodes);
function show(nodes) {
  for(var k=0; k < nodes.length; k++) {
    js.log(nodes[k].nodeName);
  }
}
