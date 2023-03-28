import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './crud.css';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://641befaf1f5d999a446d1806.mockapi.io/reactcrud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, firstName, lastName) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('firstName', firstName)
        localStorage.setItem('lastName', lastName)
    }

    const getData = () => {
        axios.get(`https://641befaf1f5d999a446d1806.mockapi.io/reactcrud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://641befaf1f5d999a446d1806.mockapi.io/reactcrud/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        

        <div className='tone'>

            <Table id="tab" class="ui compact table">
                <Table.Header class="ui inverted violet table">
                    <Table.Row >
                        <Table.HeaderCell>ID</Table.HeaderCell>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell colspan="2">Actions</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                <Table.Cell>{data.id}</Table.Cell>
                                <Table.Cell>{data.firstName}</Table.Cell>
                                <Table.Cell>{data.lastName}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.id, data.firstName, data.lastName)}>
                                            Update
                                        </Button>
                                    </Link>
                                
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
            <Link to="/"><Button color='green'>Home</Button></Link>

        </div>
    )
}