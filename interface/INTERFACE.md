# Interface

## DocumentFragment

* ex) font-size의 경우 차일드에까지 반영이 되므로 element를 타고 들어가며 렌더링 하게 된다.
하나하나 랜더링 하게 되면 비효율 적이므로 fragment (메모리)에 랜더링할 내용들을 완성시킨 후 결과물로 한번에 랜더링을 수행한다.

* template에 사용하면 효율이 높다.
  * react.js나 angular.js 와 같은 컴포넌트 기반 프레임워크가 강세이므로 template를 쓸 일이 많아질 것이다.

## NodeIterator

### createNodeIterator

### nextNode()

* 자손 레벨까지 타고 내려간다.
  * DOM tree 순으로

### previousNode()

### acceptNode()

## TreeWalker

### createTreeWalker

### firstChild() / lastChild()

### nextNode() / parentNode()

### nextSibling() / previousSibling()

## DOMTokenList

* 개요
  * class="one two three"와 같이 공백으로 토큰을 구분한 형태에서 공백으로 각 토큰을 분리하고 토큰의 추가, 삭제, 변경.
  * 엘리먼트의 classList에서 분리된 형태 제공
  * HTML5에서 지원했으나 DOM4로 이동

### 토큰 속성

### 토큰 메소드
