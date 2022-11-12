import React, { useEffect, useState, } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom'


export const Read = () => {
    const [apiData, setApiData] = useState([]);
    useEffect(() => {
        axios.get(`https://636dd76cb567eed48acaa59d.mockapi.io/CRUD`)
        .then((getData) => {
            setApiData(getData.data)
        })
    }, []);

    const setID = (id) => {
        localStorage.setItem('ID', id)
    }

    const getData = () => {
        axios.get(`https://636dd76cb567eed48acaa59d.mockapi.io/CRUD`)
        .then((getData) => {
            setApiData(getData.data)
        })
    }

    const onDelete = (id) => {
        axios.delete(`https://636dd76cb567eed48acaa59d.mockapi.io/CRUD/${id}`)
        .then (() => {
            getData();
        })
    }

  return (

  <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>#</Table.HeaderCell>
        <Table.HeaderCell>First Name</Table.HeaderCell>
        <Table.HeaderCell>Last Name</Table.HeaderCell>
        <Table.HeaderCell>Update</Table.HeaderCell>
        <Table.HeaderCell>Delete</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {apiData.map((data) => {
            return(     
                <Table.Row>
                    <Table.Cell>{data.id}</Table.Cell>
                    <Table.Cell>{data.firstName}</Table.Cell>
                    <Table.Cell>{data.lastName}</Table.Cell>
                    <Table.Cell>
                        <Link to = '/Update'>
                            <Button color="green" onClick={() => setID(data.id)}>Update</Button>
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

 
)
}
export default Read
  

