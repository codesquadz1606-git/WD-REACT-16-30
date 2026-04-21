import React from 'react'
import New from './props/New';

const Fourth = () => {
    let details={
        name:"Shivam",
        age:24,
        city:"Gurgaon"
    }
  return (
    <div>
        <New name={details.name} age={details.age} city={details.city}/>
        {/* <New details={details}/> */}
    </div>
  )
}

export default Fourth
