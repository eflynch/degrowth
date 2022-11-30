import { ReactElement } from "react";
import useAction from "../../hooks/useAction";

export default function Landing(): ReactElement {
  const goToFirst = useAction(["GoToPage", { page: "First" }]);
  return (
    <>
      Landing
      <button onClick={goToFirst}>go to first</button>
    </>
  );
}
