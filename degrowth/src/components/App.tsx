import { useReducer } from "react";
import "./App.css";
import Context from "../controller/Context";
import Page from "./Page";

import reducer from "../controller/Reducer";
import { initialState } from "../controller/State";

function App() {
  const [state, dispatcher] = useReducer(reducer, initialState);
  return (
    <div className="App">
      <Context.Provider value={dispatcher}>
        <Page name={state.page} />
      </Context.Provider>
    </div>
  );
}

export default App;
