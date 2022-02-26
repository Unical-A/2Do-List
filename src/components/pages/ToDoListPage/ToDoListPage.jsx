import ToDoListBody from "./ToDoListBody";
import ToDoListFooter from "./ToDoListFooter";
import ToDoListHeader from "./ToDoListHeader";
import { useHistory } from "react-router";
import { ToDoListModal } from "./ToDoListModal";
import { InviteFriends } from "../Formik/Formik";
import { Counter } from "../../counter/Counter";

export const ToDoListPage = () => {
  const history = useHistory();
  const goToHomePage = (value) => {
    history.push(value);
  };

  return (
    <div>
      <div>
        <p>This is ToDoListPage</p>
        <p onClick={() => goToHomePage("/")} style={{ cursor: "pointer" }}>
          GO TO HomePage
        </p>
      </div>
      <div>
        <ToDoListHeader />
        <ToDoListBody />
        <ToDoListFooter />
        <ToDoListModal />
      </div>
    </div>
  );
};
