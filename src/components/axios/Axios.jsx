import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useHistory } from "react-router";

export const Axios = () => {
  const history = useHistory();

  const [state, setState] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setState(res.data));
  }, []);

  return (
    <div>
      <h1 onClick={() => history.push("/")} style={{ cursor: "pointer" }}>
        To Home
      </h1>
      <h1>Persons List</h1>
      <table border="">
        <thead>
          <tr>
            <th>ID</th>
            <th>TITLE</th>
            <th>BODY</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.title}</td>
              <td>{item.body}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
