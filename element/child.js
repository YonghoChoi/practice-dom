// parent element 기준으로 child element 추출
var middle = document.getElementById('middle');

// IE8 이하는 지원하지 않음
js.log('childElementCount : ', middle.childElementCount);

// parent의 text node를 포함한 모든 child node
js.log('childNodes : ', middle.childNodes.length);

// child Node 중에서 Element Node를 Collection으로 반환
js.log('children : ', middle.children.length);
