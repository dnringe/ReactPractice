import React, {useState} from 'react';
import axios from 'axios';
import { useNavigate } from "react-router"


const Create = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    axios.post("https://6413eb02c469cff60d6dc398.mockapi.io/react-crud", {
        name: name,
        email: email,
      })
      .then(() => {
        history("/");
      });
    };
    return(
        <>
        <form id="form">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input type="text" className="form-control" onChange={(e) => setName(e.target.value)}/>
        </div>

        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" aria-describedby="emailHelp"  onChange={(e) => setEmail(e.target.value) }/>
        </div>

        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </form>
        </>
    )
};
export default Create;