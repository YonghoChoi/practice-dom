# [Element]

* 엘리먼트 범위
  * 시작 태그에서 종료 태그까지.

* 엘리먼트 접근 사상
  * 오브젝트 관점
  * 데이터 관점

## Element attributes

* 엘리먼트의 속성 반환
* nodeName과 tagName 차이
  * 일반 엘리먼트에는 차이가 없으나 \<!DOCTYPE html\>를 나타내는 document 엘리먼트에 nodeName은 '#document' 형태로 값이 있지만 tagName은 속성 자체가 없다.
  * nodeName 사용 권장

### NamedNodeMap

* NamedNodeMap 인터페이스
  * 속성 오브젝트를 collection 형태로 반환
  * 속성의 작성 순서는 의미가 없음
  * Array와 같이 인덱스로 접근 및 반환

### child

* 페어런트 엘리먼트 기준으로 차일드 엘리먼트 추출

## Element method

### 엘리먼트 속성을 제어하는 메소드

#### getAttribute()

* 속성 이름이 같은 속성 값 반환
  * IE8 이하에서 4개 속성은 이름을 바꿔 사용해야한다.
    * class -> className
    * for -> htmlFor
    * accept-charset -> accept-charset
    * http-Equip -> http-Equip
  * 일반적으로 element.id 형태로 작성하면 값이 반환되지만 오래된 브라우저는 이 형태를 지원하지 않으므로 getAttribute() 사용
  * 사전에 정의된 속성이 아닌 개발자 정의 속성은 getAttribute() 사용

#### setAttribute()

* 속성에 값 설정

#### hasAttribute()

* 엘리먼트에 속성 작성 여부 체크

#### removeAttribute()

* 엘리먼트에서 속성 삭제
  * 속성을 삭제하는 것과 속성 값을 삭제하는 것은 다름
  * 4대 브라우저와 IE9 이상 버전 : undefined 반환
  * IE < 9 버전에서는 삭제 성공시 true, 실패시 false 반환

### 노드 제어를 위한 메소드

* node.appendChild(document.createElement('div'));
  * node 위치에는 반드시 parent element를 지정

#### appendChild()

* 엘리먼트를 마지막 차일드로 첨부
  * 복사가 아닌 이동

#### removeChild()

* 차일드 엘리먼트 삭제
  * DOM에서 remove관련 메소드는 삭제 대상을 반환
* remove와 delete의 차이
  * remove는 복원할 수 있도록 삭제된 값을 반환
  * delete는 반환 없이 삭제

#### replaceChild()

* old node를 new node로 대체. (차일드 노드까지 생각해줘야 하므로 사용 시 주의)
  * 첫번째 파라미터의 엘리먼트로 두번째 파라미터의 엘리먼트를 대체
  * 따라서 첫 번째 파라미터가 웹 페이지에 표시

#### hasChildNodes()

* 차일드 노드의 존재 여부

#### cloneNode()

* 노드 복사 (파라미터에 true 전달 시 child 까지 복사)
  * 현재의 Document에 있는 노드를 현재의 Document로 복제
  * id 속성도 복사되므로 복사 후에 변경 필요
  * 복제 대상 노드는 삭제되지 않음.

#### remove()

* element 삭제
  * 파라미터 값을 지정하지 않음
  * node 위치의 엘리먼트 삭제
  * 차일드 엘리먼트가 있으면 모두 삭제 됨
  * remove()의 반환 값은 undefined로 삭제한 엘리먼트를 반환하지 않음.

#### isEqualNode()

* 같은 노드 여부 비교

#### normalize()

* textNode의 일반화/정규화

## HTMLCollection

* HTMLCollection 인터페이스
  * 엘리먼트 컬렉션 관련 인터페이스
  * 스펙에 Elements가 더 정확한 표현이나 오래 전부터 관례로 사용했기 떄문에 그대로 사용한다고 기술되어 있음.


[Element]: https://dom.spec.whatwg.org/#interface-element
