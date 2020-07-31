import React ,{ useState,} from 'react';
import './App.css';
import TodoInput from './component/TodoInput';
import TodoList from './component/TodoList';
import "bootstrap/dist/css/bootstrap.min.css";
import uuid from 'react-uuid'; 


function App() {
const [useTask, setTask] = useState("");
const [todos, setodos] = useState([]);
const [useTaskEdit, setTaskEdit] = useState(null);


  const handleChange=(x)=>{
    setTask(x);
  };
  const addTask = () =>{
    if (useTask === "") return;
    if (useTaskEdit === null) {
    setodos([...todos, {title: useTask,id:uuid()}])
    setTask('')
    }else {
      editTask();
      setTask("");
    }
  }
 
  const handleDelete=(id)=>{
  setodos(todos.filter((todo) => todo.id !== id));
  };
const handleEdit =(id)=>{

  const item = todos.find((e) => e.id === id);
  setTaskEdit(item);
  setTask(item.title);
  };
  
  const editTask = (title, id) => {
    var newtask = todos.map((task) =>
      task.id === useTaskEdit.id ? {...task  , title: useTask } : task
    );
    setodos(newtask);
    setTaskEdit(null);
  };
  

 return(
    <div className="App">

      <TodoInput
      useTask={useTask}
      handleChange={handleChange}
      addTask={addTask}
      />
      <TodoList
      todos={todos}
      handleDelete={handleDelete}
      handleEdit={(id)=>handleEdit(id)}
      />
    </div>
     );
}

export default App;
