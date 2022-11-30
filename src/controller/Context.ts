import React from "react";
import Action from "./Actions";

const Context = React.createContext<React.Dispatch<Action>>((action) => {});

export default Context;
