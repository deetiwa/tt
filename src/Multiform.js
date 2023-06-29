import React, {useState} from 'react'

function Multiform() {

    const [fullName, setFullName] = useState({

        fname:"",
        lname:"",
    });


    const inputEvent = (event) => {

        console.log(event.target.value);
        console.log(event.target.name);

        const value = event.target.value;
        const name = event.target.name;
        
        setFullName((preValue) => {
           if (name === "fName")
           {
            return {
                fname: value,
                lname: preValue.lname,
            };
           }
           else if (name === "lName")
           {
            return{
            fname: preValue.fname,
            lname: value,
            };
           }
        })
          
        };

    const onSubmit = (event) => {
        event.preventDefault();
        alert("form submitted")
    };



  return (
    <>
    <div>
        <form onSubmit={onSubmit}>
         <div>  
     <h1>Hello {fullName.fname} {fullName.lname}</h1>

    <input type='text' placeholder='Enter Text' name='fName' onChange={inputEvent} value={fullName.fname}/>
    <input type='text' placeholder='Enter Text' name='lName' onChange={inputEvent} value={fullName.lname}/>

    <button onClick={onSubmit}>Submit</button>
    </div>
        </form>
    </div>
    </>
  )
}

export default Multiform