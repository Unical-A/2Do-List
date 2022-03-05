import { useHistory } from "react-router";

export const HomePage = () => {
  const history = useHistory();
  const ToDoListPage = (value) => {
    history.push(value);
  };
  const Formik = (value) => {
    history.push(value);
  };
  const counter = (value) => {
    history.push(value);
  };
  const axios = (value) => {
    history.push(value);
  };

  return (
    <div>
      <h1>HomePage</h1>
      <h2
        onClick={() => ToDoListPage("/ToDoListPage")}
        style={{ cursor: "pointer" }}
      >
        ToDoList
      </h2>
      <h2 onClick={() => Formik("/Formik")} style={{ cursor: "pointer" }}>
        Formik
      </h2>
      <h2 onClick={() => counter("/Counter")} style={{ cursor: "pointer" }}>
        Counter
      </h2>
      <h2 onClick={() => axios("/Axios")} style={{ cursor: "pointer" }}>
        Axios
      </h2>
    </div>
  );
};
