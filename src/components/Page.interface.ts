import State from "../controller/State";

export type PageName = "Landing" | "Growth" | "Critiques" | "Visions" | "Pathways" | "Praxis" | "Future";

export type PageProps = {
  state: State;
};