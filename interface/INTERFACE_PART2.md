#Interface Part 2

## DOM Parsing and Serialization

### DOM Parsing

#### innerHTML

#### outerHTML

#### insertAdjacentHTML

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

## Mutation Observer

### [MutationObserverInit]

### MutationRecord

## Composition Event

[MutationObserverInit]: https://developer.mozilla.org/en-US/docs/Web/API/MutationObserver#MutationObserverInit
