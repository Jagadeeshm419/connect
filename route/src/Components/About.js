import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHeader, TableHeaderCell, TableRow, Button } from 'semantic-ui-react';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { BiSolidTrashAlt } from "react-icons/bi";
import { MdEdit } from "react-icons/md";
import { getApi } from './G';
import { postApi } from './P'

const About = () => {
  const [apiData, setapiData] = useState([]);
  const a = useNavigate();

  const getData = async () => {
    const res = await axios.get(getApi);
    setapiData(res.data.result);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(apiData, '----data');

  const upData = async ({ id, name, email, password }) => {
    console.log('API Endpoint:', postApi);
    console.log('Data:', { id, name, email, password });
    a('/edit');
  };

  const b = () => {
    a('/home');
  };

  const delData = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/api/deletesingleuser/${id}`);
      getData();
    }
    catch (error) {
      console.error('Error deleting data:', error);
    }
  }
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>User Name</TableHeaderCell>
            <TableHeaderCell>E-Mail</TableHeaderCell>
            <TableHeaderCell>Password</TableHeaderCell>
            <TableHeaderCell>Edit</TableHeaderCell>
            <TableHeaderCell>Delete</TableHeaderCell>
          </TableRow>
        </TableHeader>

        {Array.isArray(apiData) &&
          apiData.map((item, key) => {
            return (
              <TableBody>
                <TableRow key={key}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.email}</TableCell>
                  <TableCell>{item.password}</TableCell>
                  <TableCell><MdEdit className='style' onClick={() => upData(item)} /></TableCell>
                  <TableCell><BiSolidTrashAlt className='style' onClick={() => item._id && delData(item._id)} /></TableCell>
                </TableRow>
              </TableBody>
            )
          }
          )}
      </Table>
      <Button onClick={b}>Back</Button>
    </>
  );
};

export default About