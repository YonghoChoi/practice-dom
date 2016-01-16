// IE:window.location.href
js.log('URL : ', document.URL);

// document.defaultView.location.origin과 같음
js.log('documentURI : ', document.documentURI || window.location.href);

js.log('origin : ', document.origin);

// strict mode : CSS1Compat, quirks mode : BackCompat
// strict 모드인지 여부를 판단하는 값으로 사용.
// quirks 모드인 경우는 HTML5 이전 버전이라는 의미.
js.log('compatMode : ', document.compatMode);

// IE < 9 : document.character
js.log('characterSet : ', document.characterSet || documnet.character);
js.log('contentType : ', document.contentType);

// HTMLHtmlElement 반환
js.log('documentElement.nodeName : ', document.documentElement.nodeName);
