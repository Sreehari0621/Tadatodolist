//import ToDoList from './ToDoList.jsx';
import React, { useState } from 'react'
import Header from './Header.jsx';
import AddTask from './AddTask';
import List from './List';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleInputChange(event){
    setNewTask(event.target.value);

  }

  function addtask()
  {
    if(newTask.trim() !== ""){
      setTasks(t => [...t, newTask]);
      setNewTask("");
    }
  }

  function deleteTask(index)
  {
    const updatedTasks = tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks);
  }
  return(
    <>
      <Header/>
      <AddTask
        tasks={tasks} 
        setTasks={setTasks}
        newTask={newTask}
        setNewTask={setNewTask}
        handleInputChange={handleInputChange}
        addtask={addtask}/>
      <List tasks={tasks}
        deleteTask={deleteTask}/>
    </>
  );
}

export default App
