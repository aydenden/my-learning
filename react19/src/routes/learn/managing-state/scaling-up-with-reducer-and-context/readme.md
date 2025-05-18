# Reducer와 Context로 앱 확장하기

이 페이지는 복잡한 애플리케이션에서 `useReducer`와 Context를 결합해 전역 상태를 효율적으로 관리하는 방법을 설명합니다.

## 주요 내용

1. **리듀서와 Context의 결합**
    - `useReducer`로 상태와 로직을 관리하고, Context로 여러 컴포넌트에 상태와 dispatch 함수를 전달

2. **전역 상태 관리 패턴**
    - Context를 통해 전역적으로 상태를 공유하고, 컴포넌트 어디서든 dispatch로 상태 변경 가능

3. **Provider 컴포넌트 구현**
    - 상태와 dispatch를 Context Provider로 감싸 하위 트리에 제공

4. **useContext로 값 사용**
    - 하위 컴포넌트에서 `useContext`로 상태와 dispatch를 쉽게 사용

5. **실전 예시**
    - Todo 앱 등에서 전역 상태 관리 구조를 코드로 설명

6. **주의점**
    - Context 값이 자주 바뀌면 성능 저하 가능, 필요한 경우만 Context 사용 권장

이 페이지는 리듀서와 Context를 조합해 대규모 앱의 상태를 일관성 있게 관리하는 방법과, 구현 시의 실전 팁을 안내합니다.