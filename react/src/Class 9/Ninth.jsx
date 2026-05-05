import {nanoid} from 'nanoid';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify';
import './ninth.css'

const Ninth = () => {

    const [allTodo,setAllTodo]=useState([]);

    const{
        register,
        handleSubmit,
        reset,
        formState:{errors}
    }=useForm()

    function getTodo(data){
        data.id=nanoid() // random id generate kar rahee h
        data.isCompleted=false // for now task is incompleted.

        // iss step pa : allTodo open huaa and then data(object) that is entered in allTodo.

        setAllTodo([...allTodo,data]);
        reset()

        toast.success("Todo Created")
    }

    function deleteTodo(id){
        let filteredTodo=allTodo.filter((el)=>el.id !==id);
        setAllTodo(filteredTodo)
        toast.error("Todo Deleted");
    }

    function toggleTask(id){
        setAllTodo((prev)=>(
            prev.map((el)=>el.id===id ? {...el , isCompleted:!el.isCompleted}:el)
        ))
        toast.success("Task Completed")
    }


    console.log(allTodo)

  return (
    <div>
        <h1>Todo List</h1>
        <form onSubmit={handleSubmit(getTodo)}>
            <input type="text" placeholder='Enter Todo' {...register("todo")}/>
            <input type="submit" value="Create Todo" />
        </form>

        <div className="all">
            {
                allTodo.map((el)=>(
                    <div key={el.id} style={{display:"flex",justifyContent:"flex-start",alignItems:"center",gap:"20px"}}>
                        <div onClick={()=>{toggleTask(el.id)}}
                            className={el.isCompleted?"line":""}
                            >{el.todo}</div>
                        <button onClick={()=>{deleteTodo(el.id)}}>Delete Todo</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Ninth
