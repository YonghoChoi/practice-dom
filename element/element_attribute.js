// Element 속성

var el = document.getElementById('sports');
js.log('nodeName : ', el.nodeName);
js.log('tagName : ', el.tagName);

js.log('nodeType : ', el.nodeType);
js.log('nodeValue : ', el.nodeValue);
js.log('textContent : ', el.textContent);

// class 리스트
for(var k = 0; k < el.classList.length; k++) {
  js.log('classList : ', el.classList[k]);
}
