import ToDoListBody from "./ToDoListBody";
import ToDoListFooter from "./ToDoListFooter";
import ToDoListHeader from "./ToDoListHeader";
import { useHistory } from "react-router";
import { ToDoListModal } from "./ToDoListModal";
import { InviteFriends } from "../Formik/Formik";
import { Counter } from "../../counter/Counter";
import { Axios } from "../../axios";

export const ToDoListPage = () => {
  const history = useHistory();
  const goToHomePage = (value) => {
    history.push(value);
  };

  return (
    <div>
      <div>
        <h1>ToDoList</h1>
      </div>
      <div>
        <ToDoListHeader />
        <ToDoListBody />
        <ToDoListFooter />
        <ToDoListModal />
      </div>
      <h2 onClick={() => goToHomePage("/")} style={{ cursor: "pointer" }}>
        TO Home
      </h2>
    </div>
  );
};
