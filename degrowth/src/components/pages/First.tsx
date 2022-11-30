import { ReactElement } from "react";
import useAction from "../../hooks/useAction";

export default function First(): ReactElement {
  const goToLanding = useAction(["GoToPage", { page: "Landing" }]);
  return (
    <>
      First
      <button onClick={goToLanding}>go to landing</button>
    </>
  );
}
