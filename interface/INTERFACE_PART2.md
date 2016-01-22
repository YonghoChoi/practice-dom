#Interface Part 2

## DOM Parsing and Serialization

### DOM Parsing

* Element 인터페이스 확장
* DOM3에서는 비표준이었으나 HTML5부터 표준
* 처리 속도가 느렸으나 현재는 괜찮음

#### innerHTML

* node 위치에 엘리먼트 오브젝트 지정
* node의 차일드에 있는 모든 콘텐치를 지우고 innerHTML에 할당하는 문자열을 HTML로 파싱하여 설정

#### outerHTML

* node 위치에 엘리먼트 오브젝트 지정
* node 자신과 차일드를 모두 지우고 outerHTML에 할당하는 문자열을 HTML로 파싱하여 설정

#### insertAdjacentHTML

* 문자열을 파싱하여 HTML로 삽입
  * beforebegin : 기준 엘리먼트의 직전 형제 노드로 삽입
  * afterbegin : 기준 엘리먼트의 첫 번째 차일드 노드 앞에 삽입 (첫번째 차일드노드는 Text노드)
  * afterend : 기준 엘리먼트의 직후 형제 노드로 삽입
  * beforeend : 기준 엘리먼트의 마지막 차일드로 삽입

형제노드 : <div></div>
        (beforebegin)
기준노드 : <div>(afterbegin)Text(afterend)</div>
        (beforeend)
형제노드 : <div></div>

#### insertBefore()

* 첫번째 파라미터
  * 삽입할 엘리먼트
  * 기본적으로 두 번째 파라미터의 노드 앞에 엘리먼트를 삽입

* 두번째 파라미터
  * 삽입할 상대 위치
  * 두 번째 파라미터에 따라 삽입하는 위치가 달라짐
  * 이를 활용하면 insertAdjacentHTML의 4가지 위치에 엘리먼트 삽입 가능

## Mutation Observer

* DOM 트리 변화(mutation)을 관찰(모니터링, 인식, 기록)
  * 변화 : 노드/텍스트/속성 값의 추가, 삭제, 변경
* 변화 발생을 인식하여 지정한 callback 함수 호출
  * 호출한 함수에 변화 기록을 파라미터로 넘겨줌

* DOM3의 Events에서 Mutation Event로 지원했었으나 처리 속도 등의 이유로 폐지 됨
* DOM3 문제를 개선한 것이 DOM4의 MutationObserver
* IE11 부터 지원

### [MutationObserverInit]

|이름|형태|디폴트 값|개요|
|-------------------|--------|------|------------|
|childList|Boolean|false|차일드의 추가, 삭제|
|subtree|Boolean|false|자손 노드 변화|
|characterData|Boolean||텍스트 변경|
|characterDataOldValue|Boolean||변경전 텍스트 기록|
|attributes|Boolean||속성 변화|
|attributeOldValue|Boolean||변경 전 속성값 기록|
|attributeFilter|Array||관찰 대상 속성 이름|

* 모니터링 항목
  * MutationObserverInit : 스펙에서 dictionary로 구분
    * 모니터링 옵션을 저장하는 곳
  * 모든 항목을 모니터링 하는 것이 아니라 지정한 항목만 모니터링
    * 모니터링 항목에 true 지정
  * attributeFilter : 배열로 모니터링 할 속성 이름 작성 가능
  * subtree에 true를 지정하면 childList도 true 지정
  * attributeFilter의 스펙타입은 DOMString이나 Array로 지정해야 에러가 나지 않음

### MutationRecord

|이름|형태|개요|
|-------------------|-------|-----------------|
|type|DOMString|모니터링 옵션 중에서 발생한 타입|
|target|Node|변경된 노드|
|addedNodes|NodeList|추가된 노드 리스트|
|removeNodes|NodeList|삭제된 노드 리스트|
|previousSibling|Node|추가/삭제된 노드의 직전 노드|
|nextSibling|Node|추가/삭제된 노드의 다음 노드|
|attributeName|DOMString|변경된 속성 이름|
|attributeNamespace|DOMString|변경된 속성의 네임스페이스|
|oldValue|DOMString|변경 전 값|

* MutationRecord 인터페이스
  * 발생한 변화를 기록하는 오브젝트
  * 변화가 발생했을 때 callback 함수의 파라미터로 기록을 넘겨 줌
  * callback 함수에서 파라미터 값으로 받아 처리

## Composition Event

* 개요
  * IME 전용 이벤트 타입
  * IME(Input Method Editor). Mac은 IM으로 부르기도 함
  * ex) 한글을 한자로 변환
  * <input>,<textarea>, contentedtable=true에서 사용

* 이벤트 사용 형태
  * "한"을 입력하고 "한자"버튼을 누르면 "한"에 해당하는 한자가 리스트 형태로 표시되며 리스트에서 원하는 한자를 선택
  * 브라우저에 따라 차이가 있음

|이벤트 타입|개요|
|---------------|-----------------------------|
|compositionstart|composition session이 시작 될 때|
|compositionupdate|IME 문자 입력 및 처리 할 때|
|compositionend|composition session이 종료 될 때|

* 입력 값 받기
  * 이벤트가 발생했을 때 Event 오브젝트의 data 프로퍼티에서 입력한 값을 받을 수 있음
  * IME 스펙 진행 중

[MutationObserverInit]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit
