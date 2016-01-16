// getElementsByTagName의 반환값이 array이기 때문에 명확하게 하기 위해 item(0)을 해줌
var iframeNode = document.getElementsByTagName('iframe').item(0);

// iframe의 document 오브젝트를 구합니다.
// contentDocument는 IE8 이하에서 지원하지 않습니다.
var doc = iframeNode.contentDocument || iframeNode.contentWindow.document;

// 복제 대상 엘리먼트를 생성한다.
doc.body.innerHTML = "<ul id=fromNode><li>복제 대상 노드</li></ul>";

// 복제할 엘리먼트 오브젝트 생성
var fromNode = doc.getElementById("fromNode");
js.log('fromNode : ', fromNode.firstElementChild.textContent);

// 엘리먼트를 복제하여 toNode의 차일드로 첨부
var importNode = doc.adoptNode(fromNode, true);  // 두번째 파라미터가 true이면 차일드까지 복제
var toNode = document.getElementById('toNode');
toNode.appendChild(importNode);

// 복제하여 첨부했으므로 count 증가
js.log('childElementCount : ', toNode.childElementCount);
