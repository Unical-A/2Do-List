import { useHistory } from "react-router"

export const HomePage = () => {

    const history = useHistory()
    const ToDoListPage = (value) => {
        history.push(value)
    }

    return (
        <div>
            <h1>HomePage</h1>
            <h2 onClick={() => ToDoListPage("/ToDoListPage")} style={{cursor:"pointer"}}>ToDoList</h2>
        </div>
    )
}