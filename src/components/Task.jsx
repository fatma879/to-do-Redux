import React from 'react'
import { useDispatch } from 'react-redux'
import { update } from '../redux/slices/taskSlice'

const Task = ({ task }) => {
    const dispatch = useDispatch()
return (
    <div className='task-card'>
        <h2>{task.id}</h2>
        <p>{task.description}</p>
        <input type="checkbox" checked={task.isDone} onChange={() => {dispatch(update(task.id))} } />
    </div>
)}

export default Task