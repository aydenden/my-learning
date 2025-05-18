# Context를 사용해 데이터를 깊게 전달하기

이 페이지는 React의 Context를 사용해 여러 단계 아래의 컴포넌트까지 데이터를 효율적으로 전달하는 방법을 설명합니다.

## 주요 내용

1. **Context의 필요성**
    - props를 여러 단계로 전달하는 "prop drilling" 문제 해결
    - 전역적으로 공유해야 하는 데이터(테마, 사용자 정보 등)에 적합

2. **Context 생성과 사용**
    - `React.createContext()`로 Context 객체 생성
    - `Context.Provider`로 하위 트리에 값 제공
    - 하위 컴포넌트에서 `useContext(Context)`로 값 사용

3. **Provider 중첩**
    - 여러 Context를 중첩해 사용할 수 있음

4. **Context 사용 시 주의점**
    - 자주 바뀌는 값은 Context로 전달하지 않는 것이 성능에 유리
    - Context 값이 바뀌면 해당 값을 구독하는 모든 컴포넌트가 리렌더링됨

5. **실전 예시**
    - 테마, 언어, 인증 정보 등 다양한 예시 제공

이 페이지는 Context를 활용해 깊은 컴포넌트 트리에서도 효율적으로 데이터를 전달하는 방법과, Context 사용 시의 주의사항을 설명합니다.