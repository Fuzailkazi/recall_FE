import React, { useRef } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/Input';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const Signin = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: BACKEND_URL,
  });

  async function signin() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;
    console.log(BACKEND_URL);
    try {
      // Make API request
      const response = await api.post(`${BACKEND_URL}/signin`, {
        username,
        password,
      });

      const jwt = response.data.token;
      localStorage.setItem('token', jwt);
      //redirect user to the dashboard
      navigate('/dashboard');
    } catch (error) {
      console.error('Error Details:', error); // Log the full error object

      alert('Failed to sign in. Please try again.');
    }
  }
  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
      <div className='bg-white rounded border min-w-48'>
        <Input reference={usernameRef} placeholder='username' />
        <Input reference={passwordRef} placeholder='password' />
        <div className='flex justify-center items-center p-4'>
          <Button
            variant='primary'
            text='signin'
            size='md'
            fullWidth={false}
            onClick={signin}
          />
        </div>
      </div>
    </div>
  );
};

export default Signin;
