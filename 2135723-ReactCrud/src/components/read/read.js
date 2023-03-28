import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Read() {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://6420494482bea25f6dfddfcb.mockapi.io/Crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }, [])

    const setData = (id, topic, description) => {
        localStorage.setItem('ID', id)
        localStorage.setItem('topic', topic)
        localStorage.setItem('description', description)
    }

    const getData = () => {
        axios.get(`https://6420494482bea25f6dfddfcb.mockapi.io/Crud`)
            .then((getData) => {
                setApiData(getData.data);
            })
    }

    const onDelete = (id) => {
        axios.delete(`https://6420494482bea25f6dfddfcb.mockapi.io/Crud/${id}`)
        .then(() => {
            getData();
        })
    }

    return (
        <div>
            <Table celled>
                <Table.Header>
                    <Table.Row>
                        {/* <Table.HeaderCell>ID</Table.HeaderCell> */}
                        <Table.HeaderCell>Topic</Table.HeaderCell>
                        <Table.HeaderCell>Description</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {apiData.map((data) => {
                        return (
                            <Table.Row>
                                {/* <Table.Cell>{data.id}</Table.Cell> */}
                                <Table.Cell>{data.topic}</Table.Cell>
                                <Table.Cell>{data.description}</Table.Cell>
                                <Table.Cell>
                                    <Link to='/update'>
                                        <Button
                                            color="green"
                                            onClick={() => setData(data.id, data.topic, data.description)}>
                                            Update
                                        </Button>
                                    </Link>
                                </Table.Cell>
                                <Table.Cell>
                                    <Button color="red" onClick={() => onDelete(data.id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}

                </Table.Body>
            </Table>
            <Link to="/"><Button color='yellow'>Add Todo +</Button></Link>
        </div>
        
    )
}