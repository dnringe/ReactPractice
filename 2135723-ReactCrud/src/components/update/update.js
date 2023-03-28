import React, { useState, useEffect } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
import { useHistory } from 'react-router';
export default function Update() {
    let history = useHistory();
    const [topic, setTopic] = useState(''); 
    const [description, setDescription] = useState('');
    const [ID, setID] = useState(null);
    const sendDataToAPI = () => {
        axios.put(`https://6420494482bea25f6dfddfcb.mockapi.io/Crud/${ID}`, {
            topic,
            description
        }).then(() => {
            history.push('/read')
        })
    }

    useEffect(() => {
        setTopic(localStorage.getItem('topic'));
        setDescription(localStorage.getItem('description'));
        setID(localStorage.getItem('ID'))
    }, [])

    return (
        <div>
            <Form >
                <Form.Field>
                    <label>Topic</label>
                    <input name="fname"
                        value={topic}
                        onChange={(e) => setTopic(e.target.value)}
                        placeholder='' style={{ width:300}} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <input
                        name="lname"
                        value={description} 
                        placeholder=''
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI} color='blue'>Update</Button>
            </Form>
        </div>
    )
}