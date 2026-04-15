import { useState } from "react"
import "./second.css"

export default function Second1(){
    let [count,setCount]=useState(0)
    console.log(count)

    function inc(){
        setCount(count+1)
    }

    function dec(){
        setCount(count-1)
    }
    return(
        <>
            <button style={{width:"40px"}} onClick={inc}>+</button>
            <h1>{count}</h1>
            <button style={{width:"40px"}} onClick={dec}>-</button>
        </>
    )
}