import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Box } from '@mui/system';
import { Input, Typography } from '@mui/material';
import { useState } from 'react';
import '../App.css'
import { Container } from 'react-bootstrap'; 
import { signUpUser } from '../Configuration/FirebaseMethods';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [model, setModel] = useState({});

    let createUser = () => {
      console.log(model);
      signUpUser(model)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
    };

  const navigation = useNavigate();
  const navigationThree = useNavigate();
  return (
    <div>
    <Box>
  <Container className='d-flex rounded shadow my-3 p-2'>
      <div className='firstPara mx-5 my-auto'>
      <Typography className='p-2 mb-2 text-center' variant='h2'>
         <u> SignUp Page </u>
      </Typography>
      <Input className='inputEmail'
      placeholder='Enter the FirstName '
      onChange={(e) => setModel({ ...model, userName: e.target.value })}
      />
      <br/>
      <Input className='inputEmail'
      placeholder='Enter your Last Name'
      />
      <br/>
      <Input className='inputEmail'
      placeholder='Enter your Email'
      onChange={(e) => setModel({ ...model, email: e.target.value })}
      />
      <br/>
      <Input className='inputEmail'
      placeholder='Enter your Password'
      onChange={(e) => setModel({ ...model, password: e.target.value })}

      />
      <br/>
      <Input className='inputEmail'
      placeholder='Re-Enter your Password'
      />
      <br/>
      <button onClick = {createUser} className='btn btn-outline-dark p-3 mt-2 mb-3 w-50 ms-5'>Sign Up</button>
      <br/>
      <Typography variant='h6'>
          Already have an account ?
      </Typography>
      <button onClick={()=>{
        navigation("/loginpage")
      }} className='btn btn-outline-primary p-3 mt-3 mb-3'>Log In to that account !</button>
      </div>
      <div className='secondPara ms-auto'>
       <img src='https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7885.jpg?w=2000' className='w-100 mt-0 p-2'/>
      </div>
  </Container>
    </Box>
  </div>
  )
}

export default Signup