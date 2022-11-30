import { PageName } from "../components/Page"

type GoToPage = ["GoToPage", {
    page:PageName
}]

type GoHome = ["GoHome", {}]

type Action = GoToPage|GoHome

export default Action;
