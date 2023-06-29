import React, { useState } from 'react'

function Forms() {

  const [name, setName] = useState("");
  const [fullName,setFullName] = useState();

  const inputEvent = (event) => {

    console.log(event.target.value);
    setName(event.target.value);
  };

  const onSubmit = () => {
    setFullName(name);
  }

  return (
    <>
    <h1>Hello {fullName}</h1>
    <input type='text' placeholder='Enter Text' onChange={inputEvent} value={name}/>
    <button onClick={onSubmit}>Submit</button>
    </>
    
  )
}

export default Forms