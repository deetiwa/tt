import React, { useState } from 'react'

function Degital() {

    const time = new Date().toLocaleTimeString();

    const [ctime, setCtime] = useState(time);

    const UpdateTime = () => {

        const time = new Date().toLocaleTimeString();

        setCtime (time);
    }

    setInterval(UpdateTime,1000)

  return (
    <>
        <h1>{ctime}</h1>
    </>
  )
}

export default Degital