import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';

export default function Create() {
  let history = useHistory();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const sendDataToAPI = () => {
    axios.post(`https://641bd5121f5d999a446ad81d.mockapi.io/CrudOperation`, {
      firstName,
      lastName
    }).then(() => {
      history.push('/')
    })
  }
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input name="fname" 
          onChange={(e) => setFirstName(e.target.value)} 
          placeholder='First Name' />
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input 
          name="lname" 
          placeholder='Last Name' 
          onChange={(e) => setLastName(e.target.value)} 
          />
        </Form.Field>
        <Button type='submit' id="submit" onClick={sendDataToAPI}>Submit</Button>
      </Form>
    </div>
  )
}