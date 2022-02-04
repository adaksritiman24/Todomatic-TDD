import React from 'react';
import "./App.css";
import Form from "./components/form/Form";
import TaskFilter from './components/taskfilter/TaskFilter';
import Todo from './components/todos/Todo';
import { nanoid } from 'nanoid';

const TASK_FILTERS = [
  (task)=>true,
  (task)=>task.completed === true,
  (task)=>task.completed === false,
]

const App = ()=>{
  const [tasks, setTasks] = React.useState([]);
  const [filter, setFilter] = React.useState(0);


  const toggleCompleted=(id)=>{
    const modifiedTasks = tasks.map(task=>{
      if(task.id === id)
        return {...task, completed : !task.completed};
      return task;  
    })
    setTasks(modifiedTasks);
  }

  const editName=(id, newName)=>{
    const modifiedTasks = tasks.map(task=>{
      if(task.id === id)
        return {...task, name : newName};
      return task;  
    })
    setTasks(modifiedTasks);
  }

  const saveTask = (task)=>{
    const newTask = {id: nanoid() ,name : task, completed : false};
    setTasks([...tasks, newTask]);
    console.log(tasks);
  }

  const deleteTask = (id)=>{
    const newTasks = tasks.filter(task=> task.id !== id);
    setTasks(newTasks);
  }

  let taskList = tasks.filter(task=>TASK_FILTERS[filter](task)).map(task=>(
    <Todo
    key = {task.id}

    name = {task.name}
    id = {task.id}
    completed = {task.completed}

    toggleCompleted = {toggleCompleted}
    deleteTask = {deleteTask}
    editName = {editName}
    />
  ));


  let heading = taskList.length + " "+ (taskList.length === 1? "Task": "Tasks");




  return(
    <div id = "main_app">
      <h2 data-testid="heading">Todomatic -TDD</h2>
      <hr/>
      <Form
        saveTask={saveTask}
      />
      <TaskFilter
        setFilter = {setFilter}
        filterValue ={filter}
      />
      <fieldset className='todo-holder'>
        <legend><h4>{heading}</h4></legend>
        {taskList}
      </fieldset>
    </div>
  );
}

export default App;