import Header from "./components/Header";
import Tasks from "./components/Tasks";
import {useState} from 'react';
function App() {

  const[tasks, setTasks] = useState([
    {
        id :1,
        text:"Food Shoping 1",
        date:"Feb 5th at 2:30pm",
        reminder:false,
    },
    {
        id :2,
        text:"Food Shoping 22",
        date:"Feb 5th at 2:30pm",
        reminder:false,
    },
    {
        id :3,
        text:"Food Shoping 3",
        date:"Feb 5th at 2:30pm",
        reminder:false,
    },
    {
        id :4,
        text:"Food Shoping 4",
        date:"Feb 5th at 2:30pm",
        reminder:false,
    }
  ])

  ;

  const onDelete = (id) =>{
    setTasks(tasks.filter((task)=> task.id!==id))
  }

  // console.log("task is "+tasks)
  return (
    
    <div className="container">
      <Header title = {"header"} paragraph = "this is just the first paragraph"/>

      {tasks.length > 0? (<Tasks tasks = {tasks} onDelete = {onDelete}/>):("No Task to show")}
    </div>
  );
}

export default App;
