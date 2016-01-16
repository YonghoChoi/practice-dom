var addClick = document.getElementById('add');
var removeClick = document.getElementById('remove');
var showNode = document.getElementById('show');

if(addClick.addEventListener) {
  addClick.addEventListener('click', showChoice, false);
  removeClick.addEventListener('click', setRemove);
} else {
  addClick.attachEvent('onclick', showChoice);
  removeClick.attachEvent('onclick', setRemove);
}

function showChoice() {
  showNode.style.backgroundColor = 'yellow';
}

function setRemove(e) {
  showNode.style.backgroundColor = '';
  if(addClick.removeEventListener) {
    addClick.removeEventListener('click', showChoice, false);
  }
}
