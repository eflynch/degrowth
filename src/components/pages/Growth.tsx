import { ReactElement } from "react";
import { PageProps } from "../Page.interface";
import useAction from "../../hooks/useAction";

export default function Growth(props:PageProps): ReactElement {
  const goToHome = useAction(["GoHome", {}])
  return (
    <>
      <h1>Growth Sucks</h1>
      <button onClick={goToHome}>Go Home</button>
    </>
  );
}
