import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button } from 'semantic-ui-react'
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { postApi } from './P';

const Update = () => {
    const {id} = useParams();
    useEffect(() => {
        axios.get(`http://localhost:4000/api/getapi/${id}`)
        .then (res => console.log(res.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <Form>
      <Form.Field>
        <label>User Name : </label>
        <input placeholder='User Name'  />
      </Form.Field>
      <Form.Field>
        <label>E-Mail : </label>
        <input placeholder='E-Mail ID' />
      </Form.Field>
      <Form.Field>
        <label>Password : </label>
        <input placeholder='Password'/>
      </Form.Field>
      <Button>Submit</Button>
    </Form>
  )
}

export default Update