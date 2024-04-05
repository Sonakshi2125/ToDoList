import React, { useState } from 'react'

const Form = () => {
let [fullName , setfullName] = useState("");

let handleChange=(event)=>{
    setfullName(event.target.value);
}

  return (
    <div>
    <form>
    <label htmlFor='username'>FullName</label>
    <input placeholder='enter your fullname' type="text" value={fullName} onChange={handleChange} id="username"></input> 
    <button>Submit</button>
    </form>
     
    </div>
  )
}

export default Form
