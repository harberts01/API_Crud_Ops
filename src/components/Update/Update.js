import React, { useState, useEffect } from 'react';

import { Button, Form } from 'semantic-ui-react';
import axios from 'axios';

export const Update = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [ID, setID] = useState(null);

    console.log(firstName);
    console.log(lastName);

    const sendDataToAPI = () => {
        axios.put(`https://636dd76cb567eed48acaa59d.mockapi.io/CRUD/${ID}`, {
            firstName,
            lastName
        });
    };

    useEffect(() => {
        setFirstName(localStorage.getItem('firstName'));
        setFirstName(localStorage.getItem('lastName'));
        setID(localStorage.getItem('ID'))
        console.log(firstName)
    }, [])
    

return (
        <div>
        <Form>
            <Form.Field>
            <label>First Name</label>
            <input 
            name="fname"
            value={firstName} 
            onChange={(e) => setFirstName(e.target.value)} 
            placeholder='First Name' />
            </Form.Field>
            <Form.Field>
            <label>Last Name</label>
            <input 
            name="lname"
            value={lastName}  
            onChange={(e) => setLastName(e.target.value)} 
            placeholder='Last Name' />
            </Form.Field>
            <Button type='submit' onClick={sendDataToAPI}>Update</Button>
        </Form>
        </div>
)

}