var el = document.getElementById('remove_attribute');
// 삭제를 성공하면 undefined 반환
js.log(el.removeAttribute('class'));

// 작성하지 않은 속성도 undefined 반환
js.log(el.removeAttribute('not_exist'));

el.removeAttribute('userDefine');

// 속성이 존재하지 않을경우 null 반환
js.log(el.getAttribute('userDefine'));
