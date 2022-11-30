import { ReactElement } from "react";
import Landing from "./pages/Landing";
import First from "./pages/First";

export type PageName = "Landing"|"First"

const getPage = (name:PageName):()=>ReactElement => {
    switch(name) {
        case "Landing":
            return Landing
        case "First":
            return First
    }
}

type PageProps = {
    name:PageName
}
export default function Page(props:PageProps):ReactElement {
    const {name} = props
    const ThisPage = getPage(name)
    return <ThisPage />
}