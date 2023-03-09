import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { Input, Typography } from '@mui/material';
import '../App.css'
import { useState } from 'react';
import { Container } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router-dom';
import { loginUser } from '../Configuration/FirebaseMethods';

const Login = () => {
    const [model, setModel] = useState({});

    let signIn = () => {
        loginUser(model)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          });
      };
    
  const navigation = useNavigate();
  const navigationTwo = useNavigate();
  return (
    <div>
      <Box>
    <Container className='d-flex rounded shadow my-3 p-2'>
        <div className='firstPara mx-5 my-auto'>
        <Typography className='p-2 mb-2 text-center' variant='h2'>
           <u> Login Page </u>
        </Typography>
        <Input className='inputEmail'
        placeholder='Enter the username or Email '
        onChange={(e) => setModel({ ...model, email: e.target.value })}
        />
        <br/>
        <Input className='inputEmail'
        placeholder='Enter your Pasword'
        onChange={(e) => setModel({ ...model, password: e.target.value })}
        />
        <br/>
        <button onClick = {signIn} className='btn btn-outline-dark p-3 mt-2 mb-3 w-50 ms-5'>Log In</button>
        <br/>
        <Typography variant='h6'>
            Don't have an account ?
        </Typography>
        <button onClick={()=>{
          navigation("/")
        }} className='btn btn-outline-primary p-3 mt-3 mb-3'>Create One !</button>
        </div>
        <div className='secondPara ms-auto'>
         <img src='https://img.freepik.com/free-vector/access-control-system-abstract-concept_335657-3180.jpg' className='w-100 mt-0 p-2'/>
        </div>
    </Container>
      </Box>
    </div>
  )
}

export default Login