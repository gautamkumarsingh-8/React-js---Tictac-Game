import React, { useState } from 'react';
import "../components/Todo.css";
import { MdDelete } from "react-icons/md";
const Todo = () => {
    const [initial, setInitial] = useState("");
    const [data, setData] = useState([])
    const getInput = (e) => {
        console.log(e.target.value);
        setInitial(e.target.value)
    }

    const getData = () => {
        console.log(initial)
        let store = [...data, initial]
        setData(store)
        setInitial("")
        if (initial == "") {
            alert("Please Your Enter Task")
        }
    }

    const deleteData = (index) => {
        let filterData = data.filter((elem, id) => {
            return index != id;
        })
        setData(filterData)
    }
    return (
        <div className='container'>
            <h1>Todo List App</h1>
            <div className='inputTask'>
                <input type="text" placeholder='Enter Your Task' value={initial} onChange={getInput} />
                <button onClick={getData}>Add</button>
            </div>
            {
                data != [] && data.map((value, index) => {
                    return (
                        <>
                            <p key={index}>
                                <div className='taskData'>
                                    <p>{value} </p>
                                    <MdDelete id='deleteIcon' onClick={() => deleteData(index)} ></MdDelete>
                                </div>
                            </p>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Todo