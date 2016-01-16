# Document Object Model

## 환경

* 브라우저에 탑재
* 브라우저에서 실행
* 브라우저의 목적은 콘텐츠 제공
* DOM의 목적
  * 역동적으로 콘텐츠 제공
    * HTML/CSS 동적 생성, 제어
  * 사용자와 만나는 접점
    * Event : 사용자 행동 인식, 요구/요청에 응답
  * UI/UX 표현
    * UI(User Interface) : 사용자 행동, 시스템 응답
    * UX(User eXperience) : 사용자 경험, 습관, 관습 중심

## DOM (Document Object Model)

* Document
  * <!DOCTYPE html>~</html>
  * html 파일 전체
* Object
  * 객체 개념으로 접근 (Mark up을 텍스트 개념으로 보면 안되고 객체 개념으로 봐야 한다.)
  * 객체 구성 : method, property
* Model
  * 객체를 Interface 형태로 제공
    * Java, JavaScript등 여러 언어에서 사용이 되므로 인터페이스만 제공한다.
  * 다수의 언어에서 사용
  * DOMString 형태로 표기

## DOM 5W1H

* 누가
  * 사용자, 브라우저
* 무엇을
  * <h1 id = "dom" style="color:blue">DOM</h1>
  * Element, Attribute, Event
* 어떻게
  * CRUD : Create, Read, Update, Delete
* 언제
  * HTML을 랜더링 할 때, CRUD 필요시, 이벤트 발생시
* 어디에
  * documnet, <!DOCTYPE html><html>~</html> (전체)
* 왜
  * 역동적으로 콘텐츠를 제공하기 위해서

## DOM API

* API
  * Application Programming Interface
  * 메소드, 속성(프로퍼티) 포함
  * 객체가 아닌 인터페이스 제공
* 인터페이스인 이유
  * 다수의 언어에서 DOM 사용
  * 언어에 의존하지 않고 중립 형태 제공
* API 구현
  * 오브젝트, 인스턴스
  * Javascript : 브라우저가 Built-in Object로 제공
  * Java : import 문을 소스 코드에 작성
* DOM의 기술적 의미는 API를 다루는 것

## DOM 출현 배경

* W3C
  * 웹 기술 표준 제정
  * 표준(Standard)이 아닌 권고(Recommendation) 사용
* DOM
  * W3C에서 표준 제정
* 브라우저 전쟁
  * 1990년대 후반
  * IE, Netscape 각각 개발
    * Netscape : W3C 권고 스펙 준수
    * IE : DHTML(Dynamic HTML) - 크로스 브라우징의 원인을 제공.
* 표준 필요성 대두

## DOM 레벨

* DOM 레벨
  * DOM은 버전이 아닌 레벨을 사용
  * HTML5에 통합
    * HTML5안에 DOM이 통합되었기 때문에 DOM Spec이 HTML Spec에 포함됨
    * DOM이 사라진 것이 아님.
  * 레벨4 : HTML5에서 분리

* DOM 레벨 0
  * 브라우저 전쟁 시기의 DOM 레벨
  * 정식 레벨이 아닌 구분을 위한 레벨

### DOM 레벨 1

* W3C에서 제정
  * IE, Netscape 참여
  * 1998.1 처음 발표, 2009.9 최종 발표
  * DOM Core (DOM의 기반), DOM HTML
* DOM Core
  * DOM 핵심 인터페이스
  * HTML/XML Document 제어
* DOM HTML
  * HTML 엘리먼트 제어
  * HTML 4.0 기준

### DOM 레벨 2

* DOM Core, HTML
  * 기능 향상, XHTML 1.0 기준 (닫는 태그가 필요 - XML 형식의 HTML)
* DOM Views, Style
  * CSS 속성 제어
* DOM Events
  * Mouse 이벤트 중심
* DOM Traversal and Range (미래지향적 - HTML의 UI를 더 파워풀하게 만들어줌)
  * DOM 트리 노드 제어
* IE 참여하지 않음
  * 크로스 브라우징 문제 발생

### DOM 레벨 3

* DOM Core, HTML
  * 기능 향상
  * XHTML 1.1 기준
* DOM XPath
  * XML 사용 효율성 향상
* DOM Events
  * 키보드 이벤트

### HTML5 (DOM4)

* DOM 워킹 그룹 분리
  * HTML, Web Apps, CSSOM
* 많은 이벤트 타입 추가
  * <video>, <audio> 제어 이벤트 타입
  * click을 onclick 형태로 사용
  * 엘리먼트에 이벤트 작성 (이 전에는 비표준이었음)
* [CSSOM] 분리
  * CSS Object Model
  * Media Query
  * Selector

## HTML5

### 핵심

* 오픈 플랫폼(Platform)
* 표준(Standard) 바탕
* 최종 목적은 콘텐츠 제공

### 분류

* 마크업
  * 추가
    * 콘텐츠 모델
    * <video>, <section> 등
  * 재정의

* API
  * 직접표현
  * 간접표현
  * 스크립팅

### [DOM 레벨 4]


[CSSOM]: https://www.w3.org/TR/cssom/
[DOM 레벨 4]: https://www.w3.org/TR/dom/
