import useTodoStore from "../../Stores/useStore";
import ToDoItem from "../ToDoItem/ToDoItem";


const ToDoList = () => {
    const todos = useTodoStore( state => state.todos)
    return (
        <ul>
            {
                todos?.map(todo =>(
                    <ToDoItem key={todo.id} todo={todo} />
                ))
            }
        </ul>
    );
};

export default ToDoList;