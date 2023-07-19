import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Lock, MailOutline } from '@mui/icons-material';
import { Box, TextField } from '@mui/material';
import "../Assets/css/Login.css";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const validateForm = () => {
    let formValid = true;
    const newErrors = {};

    if (email.trim() === '') {
      formValid = false;
      newErrors.email = 'Email is required';
    }

    if (password.trim() === '') {
      formValid = false;
      newErrors.password = 'Password is required';
    }else if (password.length < 8) {
      formValid = false;
      newErrors.password = 'Password should be a minimum of 8 characters';
    }

    setErrors(newErrors);
    return formValid;
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Email:', email);
      console.log('Password:', password);

      setEmail('');
      setPassword('');
      navigate('/home');
    }
  };

  return (
    <div>
      <h2 className='log-h2'>Login</h2>
      <div className='log-Card'>
        <form className='log-form' onSubmit={handleSubmit}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <MailOutline />
            <TextField
              className='log-input'
              id='email'
              label='Enter Email'
              variant='standard'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={!!errors.email}
              helperText={errors.email}
              required
            />
          </Box>
          <br />
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Lock />
            <TextField
              className='log-input'
              id='password'
              label='Enter Password'
              variant='standard'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={!!errors.password}
              helperText={errors.password}
              required
            />
          </Box>
          <br />

          <button type='submit'>
            <span className='box'>Login</span>
          </button>
          <br />
          <Link to='#'>Forgot Password ?</Link>
          <br />
          <Link to='/Register'>Don't have an Account ? Sign Up</Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
