import { useReducer, useEffect } from "react";
import "./App.css";
import Context from "../controller/Context";
import Page from "./Page";

import reducer from "../controller/Reducer";
import { initialState } from "../controller/State";

function App() {
  const [state, dispatcher] = useReducer(reducer, initialState);

  useEffect(()=>{
    window.localStorage.setItem("state", JSON.stringify(state)) 
  }, [state])

  return (
    <div className="App">
      <Context.Provider value={dispatcher}>
        <Page state={state} />
      </Context.Provider>
    </div>
  );
}

export default App;
