import useTodoStore from "../../Stores/useStore";



const ToDoItem = ({todo}) => {
    const {removeTodo, toggleTodo} = useTodoStore()
    
    return (
        <li className="flex items-center p-2">
            <input type="checkbox" checked={todo.completed} name="" id="" onChange={()=> toggleTodo(todo.id)} className=" h-5 w-5"/>
            <span className={` flex-1 ml-2 ${todo.completed? 'line-through': ''}`}>{todo.text}</span>
            <button onClick={()=> removeTodo(todo.id)} className="px-2 py-1 bg-red-500 text-white rounded-md">Delete</button>
        </li>
    );
};

export default ToDoItem;