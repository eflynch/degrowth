import { ReactElement } from "react";
import { PageProps } from "../Page.interface";
import useAction from "../../hooks/useAction";

export default function Landing(props:PageProps): ReactElement {
  const goToGrowth = useAction(["GoToPage", { page: "Growth" }]);
  return (
    <>
      <h1>Degrowth is Dope</h1>
      <button onClick={goToGrowth}>Learn About Growth</button>
    </>
  );
}
