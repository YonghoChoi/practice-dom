# [DOM Traversal]

* DOM 트리
  * Document에 노드가 좌우상하로 연결된 형태

* DOM Traversal

## parentNode

* 부모 위치의 엘리먼트 반환
  * 부모 엘리먼트가 아닌 부모 위치의 엘리먼트
  * HTML document에서 최상위 parent는 document

* parentElement
  * parentNode와 같음
  * 단, \<html\>의 parent를 구할 때는 차이가 있음.

## firstChild

* 첫 번째 차일드 반환
  * Text Node가 반환됨

## firstElementChild

* 첫 번쨰 차일드 위치의 엘리먼트 반환
  * Text Node가 아닌 Element가 반환

## lastChild

* 마지막 차일드 위치의 노드 반환
  * 마지막 차일드는 text 노드

## lastElementChild

* 마지막 차일드 엘리먼트 노드 반환

## nextSibling

* 오른쪽 노드 반환
  * 기준 엘리번트에서 오른쪽 위치의 노드 반환
  * text node 포함

## nextElementSibling

* 오른쪽 엘리먼트 노드 반환
  * 기준 엘리먼트에서 오른쪽 위치의 엘리먼트 노드 반환
  * text노드 제외

## previousSibling

* 왼쪽 노드 반환

## previousElementSibling

* 왼쪽 엘리먼트 노드 반환

[DOM Traversal]: https://www.w3.org/TR/domcore/#traversal
