// setAttribute

var el = document.getElementById('set_attribute');
el.setAttribute('class', 'greenClass');

// 엘리먼트에 정의되지 않은 속성을 설정
el.setAttribute('sports-baseball', '야구');
js.log(el.getAttribute('sports-baseball'));
