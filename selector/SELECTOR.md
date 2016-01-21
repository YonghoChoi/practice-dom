# Selectors

## Selector

* 다큐먼트 구조에 패턴을 매치하여 엘리먼트 추출

* 패턴(pattern)
  * 엘리먼트를 매치하기 위한 기준
  * 영문 대소문자 구분
  * ex) E|foo|
    * foo 속성을 가진 E 엘리먼트 추출 패턴

* 패턴 매치(pattern match)
  * 패턴 조건을 다큐먼트 구조의 엘리먼트에 매치하는 것


## querySelector

* querySelector()
  * Selector 패턴에 매치되는 엘리먼트 반환
  * 차일드/자손 중에서 매치하는 첫 번째 엘리먼트 반환
  * 첫 번째 기준은 document order
  * 하나가 매치되면 더 이상 매치하지 않음
  * 예 : document.querySelector("div");

* querySelectorAll
  * Selector 패턴에 매치되는 모든 엘리먼트 반환
  * ex) documnet.querySelectorAll("div");

* 사용 가능 오브젝트 (인터페이스)
  * Document, DocumentFragment, Elements


## Type Selecotr

* 패턴에 엘리먼트 타입 지정
  * 엘리먼트 타입 : HTML의 엘리먼트 이름
  * ex) div


## Universal Selector

* 매치되는 모든 엘리먼트 반환
  * document.querySelectorAll("*");
    * document의 모든 엘리먼트 반환

  * *[class=sportsClss]
    * class 이름이 sportsClass인 모든 엘리먼트


## ID Selector

* 지정한 아이디에 해당하는 엘리먼트 반환
  * document.querySelectorAll("#id, #id, ..");

## Combinator

|패턴|개요|
|E F|E 엘리먼트의 차일드와 자손의 모든 F 엘리먼트|
|E > F|E 엘리먼트의 차일드인 F 엘리먼트 자손 제외|
|E + F|E의 형제 엘리먼트 중에서 바로 다음의 F 엘리먼트|
|E - F|E의 형제 엘리먼트 중에서 다음에 있는 모든 F 엘리먼트|

* 다큐먼트 트리에서 계층을 지정하여 엘리먼트 추출
* 차일드 기준 엘리먼트의 1단계 아래 엘리먼트
* 자손 : 차일드를 제외하지만 Selector에서는 차일드를 포함한 모든 엘리먼트
* 형제 : 페어런트가 같은 모든 엘리먼트
