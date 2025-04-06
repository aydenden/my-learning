import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/writing-markup-with-jsx/syntax-error")({
  component: RouteComponent,
});

const ErrorComponent = () => {
  return (
    <div>
      {" "}
      {
        // 이것은 동작하지 않습니다!
        //   <h1>Hedy Lamarr's Todos</h1>
        // <img
        //     src="https://i.imgur.com/yXOvdOSs.jpg"
        //     alt="Hedy Lamarr"
        //     class="photo"
        // >
        //     <ul>
        //         <li>Invent new traffic lights
        //             <li>Rehearse a movie scene
        //                 <li>Improve the spectrum technology
        //     </ul>
        //     );
      }
    </div>
  );
};

function RouteComponent() {
  return (
    /* 여러 엘리먼트를 반환하려면 Fragment로 감사기 */
    <>
      <ErrorComponent />
      {/* 모든 태그는 닫아주기 */}
      <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="Hedy Lamarr" />
    </>
  );
}
