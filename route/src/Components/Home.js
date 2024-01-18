import React from 'react'
import {useNavigate} from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { useState } from 'react';
import {postApi} from './P';

const Home = () => {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

  const n = useNavigate();

  const send = async() =>{
    await axios.post(postApi, {
      name,
      email,
      password
    })
    n('/about')
  }

  return (
    <div>
      <h1>SIGN IN</h1>
        <Form>
          <Form.Field>
            <label>User Name : </label>
            <input placeholder='User Name' value={name} onChange={e=>setname(e.target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>E-Mail : </label>
            <input  placeholder='E-Mail' value={email} onChange={e=>setemail(e.target.value)}/>
          </Form.Field>

          <Form.Field>
            <label>Password : </label>
            <input  placeholder='Password' value={password} onChange={e=>setpassword(e.target.value)}/>
          </Form.Field>

          <Button onClick={send}>Submit</Button>
        </Form>
    </div>
  )
}

export default Home