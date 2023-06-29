import React, { useState } from 'react'

function Clickevent() {

    const purple = "#8e44ad";
    const [bg, setBg] = useState(purple);
    const [name, setName] = useState('Click Me');

const bgChange = () => {
    // console.log("clicked")
    let newBg = '#34495e';
    setBg(newBg);
    setName("WOW !! ")
};

const bgBack = () => {
    setBg(purple);
    setName("Back")
}

  return (
    <>
    <div style={{ backgroundColor: bg }}>
        <button onClick={bgChange} onDoubleClick={bgBack} >{name}</button>
    </div>
    </>
  )
}

export default Clickevent