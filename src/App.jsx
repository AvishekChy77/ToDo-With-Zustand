
import './App.css'
import AddTodoForm from './Components/AddTodoForm/AddTodoForm'
import ToDoList from './Components/ToDoList/ToDoList'

function App() {

  return (
    <div className='container mx-auto max-w-md h-screen py-6'>
      <div className='flex flex-col p-4 border rounded shadow-lg h-full'>
        <h1 className='text-2xl font-bold mb-4'>Todo List</h1>
        <AddTodoForm/>
        <ToDoList />
      </div>
    </div>
  )
}

export default App
