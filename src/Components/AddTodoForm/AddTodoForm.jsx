import { useState } from "react";
import useTodoStore from "../../Stores/useStore";


const AddTodoForm = () => {
    const [text, setText] =useState('')

    const addTodo = useTodoStore(state => state.addTodo)

    const handleSubmit = e =>{
        e.preventDefault()
        console.log(text)
        if(!text.trim()) return
        addTodo(text)
        setText('')
    }
    return (
        <form onSubmit={handleSubmit} className="flex justify-between p-2">
            <input className=" flex-1 p-2 border rounded-md" type="text" name="" value={text} id="" onChange={(e)=> setText(e.target.value)} placeholder="Enter a task"/>
            <button type="submit" className="transition duration-200 ease-in-out transform hover:bg-blue-500 px-5 bg-blue-400 text-white ml-2 rounded-md">Add</button>
        </form>
    );
};

export default AddTodoForm;