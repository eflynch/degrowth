import { ReactElement } from "react";
import { PageName, PageProps } from "./Page.interface";

import Landing from "./pages/Landing";
import Growth from "./pages/Growth";

import Critiques from "./pages/Landing";
import Visions from "./pages/Landing";
import Pathways from "./pages/Landing";
import Praxis from "./pages/Landing";
import Future from "./pages/Landing";



const getPage = (name: PageName): ((props:PageProps) => ReactElement) => {
  switch (name) {
    case "Landing":
      return Landing;
    case "Growth":
      return Growth;
    case "Critiques":
      return Critiques;
    case "Visions":
      return Visions;
    case "Pathways":
      return Pathways;
    case "Praxis":
      return Praxis;
    case "Future":
      return Future;
  }
};


export default function Page(props: PageProps): ReactElement {
  const { state} = props;
  const ThisPage = getPage(state.page);
  return <ThisPage state={state} />;
}
