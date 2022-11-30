import { PageName } from "../components/Page.interface";

type State = {
  page: PageName;
};


const sessionState = window.localStorage.getItem("state")

export const initialState: State = sessionState ? JSON.parse(sessionState) as State : {
  page: "Landing",
};



export default State;
