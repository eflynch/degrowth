import { useContext } from "react";
import Action from "../controller/Actions";
import Context from "../controller/Context";

export default function useAction(action:Action) {
    const dispatcher = useContext(Context)
    return () =>{
        dispatcher(action)
    }
}