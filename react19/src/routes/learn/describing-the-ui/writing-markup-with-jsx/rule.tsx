import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/learn/describing-the-ui/writing-markup-with-jsx/rule")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    /* 여러 엘리먼트를 반환하려면 Fragment로 감사기 */
    <>
      {/* 모든 태그는 닫아주기 */}
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" />
      {/* 거의 대부분 camel case */}
      {/* data-x, aria-x 예외 */}
      <div data-x="value" aria-x="value"></div>
    </>
  );
}
