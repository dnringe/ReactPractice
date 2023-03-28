
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button } from 'semantic-ui-react';


const Delete=() => {
  const [name,setName]=useState("sandeep")
  const [fname,setFname]=useState("")
  const [fname2,setFname2]=useState("")
  const onchangehandler=(e)=>{
   setName(e.target.value)
   
  }
  const handler2=(e)=>{
    setFname2(fname)

  }
  const onc2=(e)=>{
    setFname(e.target.value)
  }
  const [fnum,setFnum]=useState()
  const [snum,setSnum]=useState()
  const [res,setRes]=useState()
  const onchangehandler2=(e)=>{
    setFnum(e.target.value)
   }
  const add=(e)=>{
    setRes(fnum+snum)
  }
  return (

    <><p>My First Name is {fname2}</p><diV>
      
      <h1> onchange Handler hello  {name}</h1>
      <input type="text"  className='bg-primary' onChange={onchangehandler} value={name}></input><br/><br/>
      <input type="text"   name="fname" placeholder='First Name' onChange={onc2}></input>
      <Button onClick={handler2}>Submit</Button>

    
    </diV>
    <div>
    <center>
      <h1>Addition of two number</h1>
      <input type="number" onChange={onchangehandler2}  ></input><br/><br/>
      <input type="number" ></input><br/><br/>
      <Button className='btn btn-primary' onClick={add}>Add</Button>
      <h2> Addition of two number is {res}</h2>
      </center>
    </div>

    </>
  )
}

export default Delete;

