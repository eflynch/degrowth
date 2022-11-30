import { PageName } from "../components/Page.interface";

type GoToPage = [
  "GoToPage",
  {
    page: PageName;
  }
];

type GoHome = ["GoHome", {}];

type Action = GoToPage | GoHome;

export default Action;
