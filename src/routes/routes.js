import {HomePage} from "../components/pages/HomePage";
import {ToDoListPage} from "../components/pages/ToDoListPage/ToDoListPage"


export const routes = [
    {
        path: "/",
        exact: true ,
        page: () => <HomePage/>
    },
    {
        path: "/ToDoListPage",
        exact: true ,
        page: () => <ToDoListPage/>
    },
]
