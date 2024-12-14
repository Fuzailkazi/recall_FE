import React from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/Input';

const Signup = () => {
  return (
    <div className='h-screen w-screen bg-gray-200 flex justify-center items-center'>
      <div className='bg-white rounded border min-w-48'>
        <Input placeholder='username' />
        <Input placeholder='password' />
        <div className='flex justify-center items-center p-4'>
          <Button variant='primary' text='signup' size='md' />
        </div>
      </div>
    </div>
  );
};

export default Signup;
