import { HomePage } from "../components/pages/HomePage";
import { ToDoListPage } from "../components/pages/ToDoListPage/ToDoListPage";
import { Formik, InviteFriends } from "../components/pages/Formik/Formik";
import { Counter } from "../components/counter/Counter";

export const routes = [
  {
    path: "/",
    exact: true,
    page: () => <HomePage />,
  },
  {
    path: "/ToDoListPage",
    exact: true,
    page: () => <ToDoListPage />,
  },
  {
    path: "/Formik",
    exact: true,
    page: () => <InviteFriends />,
  },
  {
    path: "/counter",
    exact: true,
    page: () => <Counter />,
  },
];
