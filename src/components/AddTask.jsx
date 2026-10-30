import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../redux/slices/taskSlice'

const AddTask = () => {
    const [description, setDescription] = useState("")
    const dispatch = useDispatch()
return (
    <div>
        <input type="text" value={description} onChange={(event) => setDescription(event.target.value)} />
<button onClick={() => dispatch(add(description))}>Add Task</button>
    </div>
)}

export default AddTask