
좋은 질문입니다! 실제로 key를 통한 "리렌더링 방지"의 핵심 로직은 React의 reconciler(조정기) 레이어에 구현되어 있습니다.

### 핵심 구현 위치
- **ReactChildFiber.js**  
  이 파일에서 key를 비교하여, 기존 컴포넌트와 새로 들어온 컴포넌트가 "같은 것"인지 판단합니다.
    - key가 같으면 기존 fiber(컴포넌트 인스턴스)를 재사용하고, 그렇지 않으면 새로 만듭니다.
    - 이 과정이 바로 "key가 같으면 리렌더링이 일어나지 않는" 원리의 핵심입니다.

#### 관련 코드 예시
- `warnForMissingKey`, `ownerHasKeyUseWarning` 등은 key가 없을 때 경고를 띄우는 역할이고,
- 실제 비교 및 재사용 로직은 이 파일의 child reconciliation 함수들(예: `reconcileChildrenArray`)에서 key를 기준으로 동작합니다.

### 요약
- **JSX 파싱/생성**: ReactJSXElement.js (key 추출 및 저장)
- **실제 비교/재사용**: ReactChildFiber.js (key로 fiber 재사용 결정)

---

ReactChildFiber.js에서 key를 사용하여 fiber를 비교하고 재사용하는 동작은 React의 reconciliation(조정) 과정에서 이루어집니다. 이 과정은 기존의 fiber 트리와 새로운 fiber 트리를 비교하여 변경 사항을 효율적으로 처리합니다. 아래는 key를 활용한 동작을 순서대로 설명한 내용입니다.

---

### 1. **기존 children을 Map으로 변환**
- 함수: `mapRemainingChildren`
- 역할: 기존 children을 key 또는 index를 기준으로 `Map`에 저장합니다. 이를 통해 새로운 children과 빠르게 비교할 수 있습니다.
- 코드:
  ```javascript
  function mapRemainingChildren(currentFirstChild: Fiber): Map<string | number, Fiber> {
    const existingChildren: Map<string | number, Fiber> = new Map();
    let existingChild: Fiber | null = currentFirstChild;
    while (existingChild !== null) {
      if (existingChild.key !== null) {
        existingChildren.set(existingChild.key, existingChild);
      } else {
        existingChildren.set(existingChild.index, existingChild);
      }
      existingChild = existingChild.sibling;
    }
    return existingChildren;
  }
  ```

---

### 2. **새로운 children과 기존 children 비교**
- 함수: `updateFromMap`
- 역할: 새로운 child의 key를 기준으로 기존 children의 Map에서 일치하는 fiber를 찾습니다.
    - key가 일치하면 기존 fiber를 재사용합니다.
    - key가 일치하지 않으면 새로운 fiber를 생성합니다.
- 코드:
  ```javascript
  function updateFromMap(
    existingChildren: Map<string | number, Fiber>,
    returnFiber: Fiber,
    newIdx: number,
    newChild: any,
    lanes: Lanes,
  ): Fiber | null {
    const matchedFiber = existingChildren.get(
      newChild.key === null ? newIdx : newChild.key,
    ) || null;
    return updateElement(returnFiber, matchedFiber, newChild, lanes);
  }
  ```

---

### 3. **key를 기준으로 fiber 재사용 또는 생성**
- 함수: `updateSlot`
- 역할: 기존 fiber의 key와 새로운 child의 key를 비교하여 다음을 수행합니다.
    - key가 같으면 기존 fiber를 재사용합니다.
    - key가 다르면 새로운 fiber를 생성합니다.
- 코드:
  ```javascript
  function updateSlot(
    returnFiber: Fiber,
    oldFiber: Fiber | null,
    newChild: any,
    lanes: Lanes,
  ): Fiber | null {
    const key = oldFiber !== null ? oldFiber.key : null;
    if (newChild.key === key) {
      return updateElement(returnFiber, oldFiber, newChild, lanes);
    }
    return null;
  }
  ```

---

### 4. **새로운 fiber를 리스트에 배치**
- 함수: `placeChild`
- 역할: 새로운 fiber를 리스트에 배치하고, 기존 fiber와의 위치를 비교하여 이동 여부를 결정합니다.
- 코드:
  ```javascript
  function placeChild(newFiber: Fiber, lastPlacedIndex: number, newIndex: number): number {
    newFiber.index = newIndex;
    const current = newFiber.alternate;
    if (current !== null) {
      const oldIndex = current.index;
      if (oldIndex < lastPlacedIndex) {
        newFiber.flags |= Placement;
        return lastPlacedIndex;
      } else {
        return oldIndex;
      }
    } else {
      newFiber.flags |= Placement;
      return lastPlacedIndex;
    }
  }
  ```

---

### 5. **삭제되지 않은 기존 children 제거**
- 함수: `deleteRemainingChildren`
- 역할: 새로운 children에 포함되지 않은 기존 children을 삭제합니다.
- 코드:
  ```javascript
  function deleteRemainingChildren(returnFiber: Fiber, currentFirstChild: Fiber | null): null {
    let childToDelete = currentFirstChild;
    while (childToDelete !== null) {
      deleteChild(returnFiber, childToDelete);
      childToDelete = childToDelete.sibling;
    }
    return null;
  }
  ```

---

### 6. **전체 reconciliation 과정**
- 함수: `reconcileChildrenArray`
- 역할: 새로운 children 배열을 순회하며 기존 fiber와 비교하고, 재사용 또는 새로 생성합니다.
- 코드:
  ```javascript
  function reconcileChildrenArray(
    returnFiber: Fiber,
    currentFirstChild: Fiber | null,
    newChildren: Array<any>,
    lanes: Lanes,
  ): Fiber | null {
    const existingChildren = mapRemainingChildren(currentFirstChild);
    for (let newIdx = 0; newIdx < newChildren.length; newIdx++) {
      const newFiber = updateFromMap(existingChildren, returnFiber, newIdx, newChildren[newIdx], lanes);
      if (newFiber !== null) {
        placeChild(newFiber, lastPlacedIndex, newIdx);
      }
    }
    deleteRemainingChildren(returnFiber, currentFirstChild);
    return resultingFirstChild;
  }
  ```

---

### 요약
1. 기존 children을 `Map`으로 변환 (`mapRemainingChildren`).
2. 새로운 children의 key를 기준으로 기존 children과 비교 (`updateFromMap`).
3. key가 같으면 기존 fiber를 재사용, 다르면 새로운 fiber 생성 (`updateSlot`).
4. 새로운 fiber를 리스트에 배치 (`placeChild`).
5. 새로운 children에 포함되지 않은 기존 children을 삭제 (`deleteRemainingChildren`).
6. 전체 과정을 `reconcileChildrenArray`에서 수행.

이 과정이 React가 key를 사용하여 효율적으로 DOM을 업데이트하는 핵심입니다. 추가 질문이 있으면 말씀해주세요!

---
네, 맞습니다! React의 reconciliation 과정에서 fiber가 새로 생성되거나 기존 fiber가 대체되면, React는 해당 fiber에 연결된 DOM 노드도 업데이트합니다. 이는 다음과 같은 이유 때문입니다:

1. **Fiber와 DOM의 연결**:
    - Fiber는 React의 내부 데이터 구조로, 컴포넌트의 상태와 DOM 노드에 대한 참조를 포함합니다.
    - Fiber가 변경되면 React는 해당 fiber에 연결된 DOM 노드도 변경해야 합니다.

2. **DOM 업데이트 조건**:
    - Fiber가 새로 생성되거나 기존 fiber가 대체되면, React는 이를 "삽입", "삭제", 또는 "이동"으로 간주합니다.
    - 이 과정에서 React는 DOM 노드를 추가하거나 제거하거나 위치를 변경합니다.

3. **Key의 역할**:
    - Key는 React가 기존 fiber와 새로운 fiber를 비교하는 기준입니다.
    - Key가 다르면 React는 기존 fiber를 삭제하고 새로운 fiber를 생성합니다. 이로 인해 DOM 업데이트가 발생합니다.

### 예시: Fiber 변경으로 인한 DOM 업데이트
- **Key가 동일한 경우**:
    - Fiber가 재사용되므로 DOM 업데이트가 최소화됩니다.
- **Key가 다른 경우**:
    - Fiber가 새로 생성되므로 React는 기존 DOM 노드를 제거하고 새로운 DOM 노드를 삽입합니다.

### 코드에서 확인
ReactChildFiber.js의 `placeChild` 함수에서 fiber가 새로 생성되거나 이동되면 `Placement` 플래그가 설정됩니다. 이 플래그는 React가 DOM 업데이트를 수행해야 함을 나타냅니다:
```javascript
function placeChild(newFiber: Fiber, lastPlacedIndex: number, newIndex: number): number {
  newFiber.index = newIndex;
  const current = newFiber.alternate;
  if (current !== null) {
    const oldIndex = current.index;
    if (oldIndex < lastPlacedIndex) {
      // This is a move.
      newFiber.flags |= Placement;
      return lastPlacedIndex;
    } else {
      // This item can stay in place.
      return oldIndex;
    }
  } else {
    // This is an insertion.
    newFiber.flags |= Placement;
    return lastPlacedIndex;
  }
}
```

### 결론
- Fiber가 변경되면 React는 DOM 업데이트를 수행합니다.
- Key를 적절히 사용하면 불필요한 DOM 업데이트를 줄이고 성능을 최적화할 수 있습니다.
