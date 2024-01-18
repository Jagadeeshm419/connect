import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
// import { useParams } from 'react-router-dom';
import { useState } from 'react';

const Edit = () => {

  // const {id} = useParams();
  const [id, setid] = useState('')
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const n = useNavigate();

  const upData1 = async () => {
    console.log('API Endpoint:', `http://localhost:4000/api/updatesingleuser/${id}`);
    console.log('Data:', { id, name, email, password });

    await axios.get(`http://localhost:4000/api/updatesingleuser/'${id}`, {
      id,
      name,
      email,
      password,
    })

    n('/about')
  }

  useEffect((id) => {
    setid(localStorage.getItem('id', id))
    setname(localStorage.getItem('name', name))
    setemail(localStorage.getItem('email', email))
    setpassword(localStorage.getItem('password', password))
    // eslint-disable-next-line
  }, [])

  return (
    <Form>
      <Form.Field>
        <label>User Name : </label>
        <input placeholder='User Name' value={name} onChange={e => setname(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>E-Mail : </label>
        <input placeholder='E-Mail ID' value={email} onChange={e => setemail(e.target.value)} />
      </Form.Field>
      <Form.Field>
        <label>Password : </label>
        <input placeholder='Password' value={password} onChange={e => setpassword(e.target.value)} />
      </Form.Field>
      <Button onClick={upData1}>Submit</Button>
    </Form>
  )
}

export default Edit