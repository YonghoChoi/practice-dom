var nodes = document.getElementsByClassName('sports');
show(nodes);

nodes = document.getElementsByClassName('sports swim');
show(nodes);

var el = document.getElementById('middle');
nodes = el.getElementsByClassName('sports');
show(nodes);
function show(nodes) {
  for(var k=0; k < nodes.length; k++) {
    js.log(nodes[k].id);
  }
}
