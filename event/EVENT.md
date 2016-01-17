# Event

* 이벤트 처리
  * 이벤트 설정, 발생, 해제

* 이벤트 설정, 해제 형태
  * 이벤트 타입
  * 이벤트 리스너(핸들러)
  * 캡처/버블

* 이벤트 전파
  * 이벤트 버블링 방지
  * 디폴트 액션
    * ex) <a> 의 경우 링크 경로로 이동하는 것이 디폴트 액션

* [DOM Spec]

## 이벤트 설정

* DOM 형태
  * element.addEventListener(1, 2, 3);
  1. 이벤트 type : click, mousedown
  2. 이벤트 리스너
  3. 버블/캡처 : default(capture: false)
    * capture를 사용할 수 없다.

* IE < 9 형태
  * element.attachEvent(1, 2);
  1. 이벤트 type : onclick, onmousedown
  2. 이벤트 리스너
    * 버블/캡쳐 지정할 수 없음. 캡쳐만 사용 가능

## 이벤트 해제

* 이벤트를 설정했던 이벤트 타입과 핸들러 해제

* 이벤트 해제 함수 작성 기준
  * 이벤트 설정과 파라미터를 같게 작성

## 메모리 누수

* Memory Leak
  * 설정한 이벤트를 해제하지 않았을 때 메모리가 완전히 지워지지 않고 남는 현상

* 대책
  * unload 이벤트가 발생했을 때 일괄 해제
  * 설정한 이벤트 인식 필요
  * 이벤트 설정 내역을 별도 저장
  * IE8 이하에서 발생
  * 처리가 복잡하므로 Framework 사용

## 리스너 작성 형태

* 엘리먼트에 작성
  * <input type="button" onclick="showSports()">
  * HTML5에서 표준으로 채택
  * 장점 : 별도로 이벤트를 설정하지 않아도 됨
  * 단점 : 구조와 제어 혼합

* js 파일에 작성
  * 마크업과 코딩 분리
  * 구조와 제어 분리, 복잡한 처리에 사용

## 버블링 방지

* 버블링
  * 이벤트가 엘리먼트에서 <html> 방향으로 전파되는 것
  * 이벤트가 발생하지 않았는데 이벤트가 발생함

  * 필요할 때도 있음
    * Grid에서 많은 엘리먼트 각각에 이벤트를 설정하고 버블링을 사용하여 자손 위치에서 이벤트 발생을 인식

* 버블링 방지
  * DOM : stopPropagation()
  * IE : cancelBubble = true

## 디폴트 액션

* default action
  * <a>의 텍스트를 클릭하면 href 속성의 URL로 이동
    * <a> 엘리먼트의 기본 기능

* 디폴트 액션 방지
  * DOM : preventDefault()
  * IE : returnValue = true

## Event  속성

* type
* target
* currentTarget
*  eventPhase
* bubbles
* cancelable
* defaultPrevented
* timeStamp

## 마우스 이벤트 타입

* click
* dbclick
* mousedown
* mouseup
* mouseover
* mousemove
* mouseout

## 마우스 이벤트 프로퍼티

* altKey
* ctrlKey
* shiftKey
* metaKey
* screenX
* screenY
* clientX
* clientY
* x
* y
* pageX
* pageY
* offsetX : target의 padding-left에서 떨어진 X축 값
* offsetY : target의 padding-top에서 떨어진 Y축 값
* button : 클릭한 마우스의 버튼 값 반환
* relatedTarget : 마우스 이벤트가 발생한 엘리먼트와 관계된 엘리먼트

## 키보드 이벤트 타입

* keydown : 키를 눌렀을 때
* keyup : 눌렀던 키를 놓았을 때
* keypress : 자판의 키가 눌려진 상태일 때 (키와 브라우저에 따라 차이가 있으며 문제가 있으므로 사용 주의)


## 키보드 이벤트 프로퍼티

* altKey
* ctrlKey
* shiftKey
* metaKey
* keyIdentifier
* location

## HTML 이벤트

* abort
* focus
* blur
* error
* select
* change
* load
* unload
* resize
* scroll
* reset
* submit

* window > document > HTML element > tag element
[DOM Spec]: https://dom.spec.whatwg.org/#event
