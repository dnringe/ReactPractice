import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

export default function Create() {
  let history = useHistory();
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  const sendDataToAPI = () => {
    axios.post(`https://6420494482bea25f6dfddfcb.mockapi.io/Crud`, {
        topic,
        description
    }).then(() => {
      history.push('/read')
    })
  }
  return (
    <div>

      <Form>
        <Form.Field>
          <label>Topic</label>
          <input name="fname" 
          onChange={(e) => setTopic(e.target.value)} 
          placeholder='' style={{ width:300}} />
        </Form.Field>
        <Form.Field>
          <label>Description</label>
          <input 
          name="lname" 
          placeholder='' 
          onChange={(e) => setDescription(e.target.value)} 
          />
        </Form.Field>
        <Button type='submit' onClick={sendDataToAPI} color="blue" >Submit</Button>
        <Link to="/read"><Button>View</Button></Link>
      </Form>
    </div>
  )
}