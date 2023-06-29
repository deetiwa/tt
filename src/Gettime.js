import React, { useState } from 'react'

function Gettime() {

    let newTime = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(newTime);

    const UpdateTime = () => {
        
        newTime = new Date().toLocaleTimeString();

        setCtime(newTime);
    }
 
  return (
    <>
    <h1>{ctime}</h1>
    <button className='btn' onClick={UpdateTime}>Get Time</button>
    </>
  )
}

export default Gettime