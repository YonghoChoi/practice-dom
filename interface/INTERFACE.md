# Interface

## DocumentFragment

1. 자바스크립트로 <li>를 생성하여 <ul>의 차일드로 첨부하면 첨부할 때마다 렌더링을 하게 되므로 처리 속도가 떨어진다.

2. DocumentFragment 오브젝트는 작은 Document로 메모리에 존재하며 DOM Tree에 연결되어 있지 않다.
  * 생성한 <li>를 DocumentFragment에 첨부하면 랜더링 하지 않음.

3. 첨부가 완료된 후 DocumentFragment를 document에 첨부하면 랜더링을 한번만 하게 되므로 처리 속도가 향상된다.

* ex) font-size의 경우 차일드에까지 반영이 되므로 element를 타고 들어가며 렌더링 하게 된다.
하나하나 랜더링 하게 되면 비효율 적이므로 fragment (메모리)에 랜더링할 내용들을 완성시킨 후 결과물로 한번에 랜더링을 수행한다.

* template에 사용하면 효율이 높다.
  * react.js나 angular.js 와 같은 컴포넌트 기반 프레임워크가 강세이므로 template를 쓸 일이 많아질 것이다.

### createDocumentFragment()

* DocumentFragment 오브젝트 생성


## NodeIterator

|이름|구분|형태|개요|
|--------------|---------|--------|--------------|
|root|속성|Node|최상위 노드|
|whatToShow|속성||처리 대상 노드 타입|
|filter|속성|Function|조건을 처리하는 filter 함수|
|createNodeIterator()|Function||NodeIterator 오브젝트 생성|
|nextNode()|Function||다음 노드로 filter 함수 호출|
|previousNode()|Function||이전 노드로 filter 함수 호출|
|acceptNode()|Function||함수에서 처리할 기준 Node|

* NodeIterator 인터페이스
  * Node를 Tree Order 순서로 리스트를 만들고 반복하여 노드 처리
  * DOM4에서 detach()는 deprecated

### createNodeIterator

* NodeIterator 오브젝트 생성
  1. 1번째 파라미터 : 반복 기준이 되는 최상위 노드 지정
    * 최상위 노드의 차일드/자손 노드가 반복 대상이 됨
  2. 2번째 파라미터 : 반복 대상이 되는 노드 타입 지정
    * 비트 값으로 지정할 수 있으며, 이를 나타내는 프로퍼티로도 지정 가능
    * NodeFilter 인터페이스 참조
  3. 3번째 파라미터 : 필터링 조건을 처리하는 함수 지정
    * 필터링 통과 : NodeFilter.FILTER_ACCEPT(1)
    * 미통과 : NodeFilter.FILTER_REJECT(2)
    * 스킵 : NodeFilter.FILTER_SKIP(3)
  4. 4번째 파라미터가 DOM4에는 없지만 IE에서 사용하며 false 지정


### nextNode()

* 자손 레벨까지 타고 내려간다.
  * DOM tree 순으로

* 다음 노드 처리
  * createNodeIterator()로 생성한 오브젝트를 오브젝트로 사용
    * obj.nextNode()

* 다음 노드 처리 방법
  * root로 지정한 노드로 filter 함수 호출
  * filter 함수에서 반환한 노드의 다음 노드로 filter 함수 호출

### previousNode()

* 코드 참조

### acceptNode()

* 코드 참조

## TreeWalker

|이름|구분|형태|개요|
|---------------|-------|-------|------------------------------|
|root|속성|Node|최상위 노드|
|whatToShow|속성||처리 대상 노드 타입|
|filter|속성|Function|조건을 처리하는 filter 함수|
|currentNode|속성|Node|현재 노드|
|createTreeWalker()|Function||TreeWalker 오브젝트 생성|
|parentNode()|Function||페어런트 노드로 filter 함수 호출|
|firstChild()|Function||첫 번째 차일드로 filter 함수 호출|
|lastChild()|Function||마지막 차일드로 filter 함수 호출|
|nextNode()|Function||다음 노드로 filter 함수 호출|
|previousNode()|Function||이전 노드로 filter 함수 호출|
|nextSibling()|Function||다음 형제 노드로 filter 함수 호출|
|previousSibling|Function||이전 형제 노드로 filter 함수 호출|

* TreeWalker 인터페이스
  * Node를 Tree Order 순서로 리스트를 만들고 반복하여 노드 처리

### createTreeWalker

|파라미터|설명|
|---------|------------------|
|Node|반복의 최상위 노드|
|Number|처리 대상 노드 타입|
|Function|조건을 처리하는 함수|
|Boolean|false. IE만 사용|

* TreeWalker 오브젝트 생성
  1. 1번째 파라미터 : 반복 기준이 되는 최상위 노드 지정
    * 최상위 노드의 차일드/자손 노드가 반복 대상이 됨
  2. 2번째 파라미터 : 반복 대상이 되는 노드 타입 지정
    * 비트 값으로 지정할 수 잇으며, 이를 나타내는 프로퍼티로도 지정 가능
    * NodeFilter 인터페이스 참조
  3. 3번째 파라미터 : 필터링 조건을 처리하는 함수 지정
    * 필터링 통과 : NodeFilter.FILTER_ACCEPT(1)
    * 미통과 : NodeFilter.FILTER_REJECT(2)
    * 스킵 : NodeFilter.FILTER_SKIP(3)
  4. 4번째 파라미터가 DOM4에는 없지만 IE에서 사용하며 false 지정

### firstChild() / lastChild()

* 코드 참조

### nextNode() / parentNode()

* 코드 참조

### nextSibling() / previousSibling()

* 코드 참조

## DOMTokenList

|이름|구분|형태|개요|
|----------|----------|---------|----------------------|
|length|속성|Number|토큰 수 반환|
|item()|Function||인덱스 번째의 토큰 반환|
|contains()|Function||토큰 텍스트가 존재하면 true, 아니면 false|
|add()|Function||문자열을 토큰으로 추가|
|remove()|Function||문자열을 토큰 리스트에서 삭제|
|toggle()|Function||토큰의 존재하면 삭제하고 아니면 추가|

* 개요
  * class="one two three"와 같이 공백으로 토큰을 구분한 형태에서 공백으로 각 토큰을 분리하고 토큰의 추가, 삭제, 변경.
  * 엘리먼트의 classList에서 분리된 형태 제공
  * HTML5에서 지원했으나 DOM4로 이동

### 토큰 속성

### 토큰 메소드

* add() : 토큰 추가. 콤마로 구분하여 다수 작성 가능
* remove() : 토큰 리스트에서 삭제. 콤마로 구분하며 다수 작성 가능
* toggle() : 토큰이 존재하면 삭제하고 아니면 추가
* replace() : DOM4에는 없지만 Living Standard로 진행 중
