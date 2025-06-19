import '@fontsource/work-sans'; // Defaults to weight 400
import '@fontsource/work-sans/700.css'; // Optional: bold weight
import { ThemeProvider, CssBaseline, Typography, Stack } from '@mui/material';
import './App.css';
import theme from "./components/theme"
import AddToDo from './components/AddToDo';
import BreadCrumb from './components/BreadCrumb';
import Task from './components/Task';
import { useEffect, useState, useMemo } from 'react';

function App() {
     const [isSelected, setIsSelected] = useState([
        {name: "All", selected: true},
        {name: "Done", selected: false},
        {name: "Not Done", selected: false},
    ])
    function handleIsSelected(name){
      setIsSelected(isSelected.map((obj)=>{
                if(obj.name === name){
                    return {name: name, selected: !obj.selected}
                }else{
                  return {...obj, selected: false}
                }
            }))}
    
  const [tasks, setTasks] = useState(() => {
  const stored = localStorage.getItem("tasks");
  return stored ? JSON.parse(stored) : [];
});
//Filtering arrays//

const tasksList = useMemo(() => {
  return tasks.map((task) => {
    if (isSelected[0].selected && task.task !== "") {
      console.log("all todos");
      return (
        <Task
          key={task.id}
          task={task}
          handleDoneInput={handleDoneInput}
          handleDeleteTask={handleDeleteTask}
          handleEditButton={handleEditButton}
        />
      );
    } else if (isSelected[1].selected && task.done && task.task !== "") {
      return (
        <Task
          key={task.id}
          task={task}
          handleDoneInput={handleDoneInput}
          handleDeleteTask={handleDeleteTask}
          handleEditButton={handleEditButton}
        />
      );
    } else if (isSelected[2].selected && !task.done && task.task !== "") {
      return (
        <Task
          key={task.id}
          task={task}
          handleDoneInput={handleDoneInput}
          handleDeleteTask={handleDeleteTask}
          handleEditButton={handleEditButton}
        />
      );
    }
    return null; // In case no condition matches
  });
}, [tasks, isSelected]);

//Filtering arrays//
 
  const [taskInput, setTaskInput] = useState("")
  function handleDoneInput(taskId){
    setTasks(tasks.map((task)=>{
      if(task.id === taskId){
        return {...task, done: !task.done}
      }else{
        return task
      }
    }))
  }
  function handleDeleteTask(taskId) {
  setTasks(tasks.filter(task => task.id !== taskId));
}
function handleEditButton(newTask, taskId){
  setTasks(tasks.map((task)=>{
    if(task.id === taskId && newTask !== ""){
      return {...task, task: newTask}
    }else{
      return task
    }
  }))
}

  function handleAddTask(task,e){
    e.preventDefault();
    const newTask = {id:  crypto.randomUUID(), task:task, done: false}
    setTasks([...tasks, newTask])
    setTaskInput("")
  }
  function handleTaskInput(e){
    setTaskInput(e.target.value)
  }

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  },[tasks])


  return (
   <ThemeProvider theme={theme}>
    <CssBaseline />
      <Stack className="App-container" alignItems="center" paddingY="100px">
        <Typography  sx={{   fontSize: {
      xs: '60px',   // phones
      sm: '70px', // tablets
      md: '80px',   // small laptops
      lg: '90px', // desktops
      xl: '110px',   // big screens
    },
    }}>
          Just do it.
        </Typography>
        <AddToDo handleAddTask={handleAddTask} taskInput={taskInput} handleTaskInput={handleTaskInput}/>
        <BreadCrumb handleIsSelected={handleIsSelected} isSelected={isSelected}/>
        {tasksList}
      </Stack>
   </ThemeProvider>
  );
}

export default App;
