# Custom Event

* 개요
  * 사전에 정의된 이벤트 타입으로 이벤트를 설정하면 브라우저가 이벤트를 발생시켜 리스너를 호출하지만 CustomEvent는 개발자가 이벤트를 설정하고 이벤트를 발생시킴
  * DOM3와 DOM4의 CustomEvent 처리가 다름

## DOM3 Custom Event

### createEvent()

* 개요
  * Custom Event 오브젝트 생성
    * var eventObj = document.createEvent('이벤트명');

* Custom Event 오브젝트 프로퍼티
  * 오브젝트 제공 프로퍼티
    * bubbles, cancelBubble, ...
  * 개발자가 임의의 프로퍼티 사용 가능

### initEvent()

* 개요
  * Custom Event 오브젝트 초깃값 설정
    ```
    var node = document.getElementById('show');
    node.addEventListener("showText", function(event){}, false);
    document.createEvent("Event").initEvent(...)
    ```

### dispatchEvent()

* 이벤트를 발생시킴
initEnvent의 첫 번째 파라미터 값인 이벤트 타입과 addEventListener의 첫번째 파라미터인 이벤트명과 연결되어 리스너가 수행됨


## DOM4 Custom Event

* DOM4에서 정의
* CustomEvent를 생성하는 생성자 함수 (new CustomEvent())로 오브젝트 생성

* 파라미터 작성 방법
  * 첫번 째 파라미터에 이벤트 타입 지정
  * 두번째 파라미터에 Event 오브젝트 프로퍼티 지정

## bind()와 이벤트

* bind 메소드는 한 번에 처리하지 않고 나누어 처리
* 이후 부터 사진 참조
