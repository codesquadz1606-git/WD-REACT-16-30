import React from 'react'
import { useForm } from "react-hook-form"
const Seventh = () => {
    const {
        register, // it is used to handle input change
        handleSubmit, // it handles when form is getting submit.
        watch, 
        reset,
        formState:{errors,isSubmitting} // Handling all the input errors.
    }=useForm();

    async function formData(data){
        
        await new Promise((resolve)=>setTimeout(resolve,3000));
        console.log(data)
        reset()
    }
  return (
    <div>
        <h1>Forms</h1>

        <form onSubmit={handleSubmit(formData)}>
            <label htmlFor="">Name :</label>
            <input type="text" {...register("name",
                {required : true , 
                maxLength :{
                    value:10,
                    message:"Max lenght has breched"
                },
                minLength:{
                    value:5,
                    message:"Minimum 5 Characters Needed"
                }
                })}/>

                {
                    errors.name && <span style={{color:"red"}}>{errors.name.message}</span>
                }
            <br />
            <label htmlFor="">Age :</label>
            <input type="number" {...register("contact")}/>
            <br />
            <label htmlFor="">Email :</label>
            <input type="email" {...register("email")}/>
            <br />
            <input type="submit" 
            disabled={isSubmitting} 
            value={isSubmitting?"Submitting....":"Submit"}
            />
        </form>
    </div>
  )
}

export default Seventh
