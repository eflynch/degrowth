import { ReactElement } from "react";
import { PageProps } from "../Page.interface";
import useAction from "../../hooks/useAction";

export default function Growth(props:PageProps): ReactElement {
  const goToHome = useAction(["GoHome", {}])
  return (
    <>
      <button onClick={goToHome}>Go Home</button>
      <h1>Growth</h1>
    </>
  );
}
