# Document

## DOM 구성 요서

* Document
  * 최상위 요소, !DOCTYPE

* 엘리먼트(Element)
  * Element Interface를 Object로 생성한 것
  * <div id=sports>텍스트</div>
    * <div>는 요소가 아님
    * <div>는 Element Object의 약칭

* 노드(Attribute)
  * 하나의 엘리먼트를 노드 단위로 쪼갤 수가 있다. (구분용)
    * 12개의 노드 타입
  * <div id=sports>텍스트</div>
    * 엘리먼트 노드 : <div>
    * 속성 노드 : id=sports
    * 텍스트 노드 : "텍스트"

## document

* Document 인터페이스로 생성한 오브젝트
* 브라우저에서 HTML/XML Document 제어를 위한 메서드, 속성, 이벤트 제공
* document.doctype 형태로 접근
* [document], [Interface Document]

* 브라우징 콘텍스트
  * Document 단위의 웹 페이지
    * documnet.open()
    * <iframe> : 브라우징 콘텍스트
      * 하나의 탭을 더 연 것과 같다.
      * 사용을 지양해야 한다. 지금은 <div>로 대체 가능

* ducument 구성 프로퍼티
```
window.onload = function() {
  // document 할당
  var doc = document
}
```

## Element 구성

* method
  * Function도 같은 의미로 사용하지만 자바스크립트에서는 차이가 있음

* attribute
  * name: value
  * DOM, HTML 에서 사용

* property
  * 속성과 같음
  * 자바스크립트는 프로퍼티와 속성의 구분이 필요

## doctype

* Document Type Definition(DTD)
* HTML5
  * <!DOCTYPE html>
  * 대소문자 구분하지 않음
  * 대문자 사용은 관례
* 프로퍼티
  * DocumentTYpe 인터페이스 반환

## impementation

* Document 생성 관련 메소드 제공
* 브라우저 지원 feature(DOM 레벨) 반환
* DOMImplementation 반환
* javascript 외 다른 언어를 위함.

## documnet 메소드

### get

* 특정 엘리먼트가 아닌 Document 전체가 대상
* 파라미터에 지정한 조건과 같은 엘리먼트 반환

#### getElementById()

  * id 속성 값이 같은 엘리먼트 반환
    * document에 존재하지 않으면 null 반환
      * undefined가 아님에 주의
      * javascript는 에러를 최대한 내지 않으려고 하는 특성이 있다.
    * 엘리먼트를 생성만 하고 document에 첨부하지 않으면 검색하지 못함
      * 즉 DOM Tree에 존재해야 함
#### getElementsByTagName()

* tag 이름이 같은 모든 엘리먼트 반환
  * 태그 이름이 같은 엘리먼트가 없더라도 빈 HTMLCollection 반환
  * 따라서 연속해서 for문을 사용하더라도 에러가 발생하지 않음

* NodeList
  * 엘리먼트가 배열로 반환되는 형태
  * Collection은 일반적으로 배열, 오브젝트 형태에서 사용

#### getElementsByTagNameNS()

* Namespace에 속한 엘리먼트 반환
  * XML 형태를 처리할 때 사용
    * 현재는 필요없는 개념이 되었음.

#### getElementsByClassName()

* 클래스 이름이 같은 모든 엘리먼트 반환

### Create

* 엘리먼트 생성, 복사, 이동 메소드

#### createElelment()

* 엘리먼트 생성

#### createTextNode()

* 텍스트 노드 생성

#### createAttribute()

* 속성 노드 생성
  * DOM에서 지원하는 엘리먼트 속성은 속성 노드를 생성하지 않아도 값을 설정할 수 있으나 개발자가 속성 이름을 만들어 속성값을 설정하려면 속성 노드를 생성한 후에 값을 설정한다.
  * 웹페이지 렌더링 후 출력에는 노출되지 않고, 소스를 통해서 확인 할 수 있다. (user define attribute)

#### importNode()

* 다른 document의 node를 복제
  * 다른 Document의 노드를 복제하여 현재의 Document에 삽입
  * 두 번째 파라미터에 true를 지정하면 차일드 노드도 복제 (연결된 차일드들은 모두 복제됨)
  * 복제한 다른 Document의 노드는 삭제되지 않음

#### adoptNode()

* 다른 document의 node를 이동

#### createDocumentFragment()

* DocumentFagment 오브젝트 생성

#### createRange()

* Range 오브젝트 생성


[document]: https://html.spec.whatwg.org/multipage/dom.html#document
[Interface Document]: https://www.w3.org/TR/domcore/#interface-document
