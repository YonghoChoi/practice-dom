// id 속성 값이 같은 엘리먼트가 있는 경우 <html>에 가장 가까운 엘리먼트가 반환됨
var node = document.getElementById('sports');
js.log(node.textContent);

// #check가 존재하지 않으므로 null 반환
node = document.getElementById('check');
js.log(node);
