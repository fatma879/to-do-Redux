import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'
const ListTask = () => {
    const tasks = useSelector((state) => state.tasks)
    const [show, setShow] =useState("All")
    const[filterTasks, setFilterTasks] = useState(tasks)
useEffect(() => {
    show === "All" ? setFilterTasks(tasks) : show == "done" ?
    setFilterTasks(tasks.filter(el => el.isDone== true)) : 
    setFilterTasks(tasks.filter(el => el.isDone== false))},[show])

return (
<div className='container'>
    <div>
        <button onClick={() =>setShow("All") }>All</button>
        <button onClick={() =>setShow("done") }>Done</button>
        <button onClick={() =>setShow("notDone") }>Not Done</button>
    </div>
    {filterTasks.map((task) => <Task key={task.id} task={task} />)}
</div>
)}
export default ListTask