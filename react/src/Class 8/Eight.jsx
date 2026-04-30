import React, { useState } from 'react'

const Eight = () => {
    const [value,setValue]=useState({
        name:"",
        email:""
    })

    function handleChange(e){
        const{name,value}=e.target // destructuring 

        setValue((prev)=>({
            ...prev,[name]:value
        }))
    }

    let [errors,setErrors]=useState({});

    function validate(){
        let newErrors={};
        if(!value.name.trim()){
            newErrors.err="Input is empty"
        }

        else if(value.name.length<=4){
            newErrors.err="Length is less";
        }

        else if(value.name.length>10){
            newErrors.err="Lenght is exceded"
        }

        setErrors(newErrors);
        return Object.keys(errors).length==0;
    }

    function handleSubmit(e){
        e.preventDefault()
        if(validate()){
            console.log(value)
        }
    }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="">Name :</label>
            <input name="name" value={value.name} type="text" onChange={handleChange}/>
            {errors && <span>{errors.err}</span>}
            <br />
            <label htmlFor="">Email :</label>
            <input name="email" value={value.email} type="email" onChange={handleChange}/>
            <br />
            <input type="submit" disabled={value.name.length<=4 || value.name.length>10}/>
        </form>
    </div>
  )
}

export default Eight
