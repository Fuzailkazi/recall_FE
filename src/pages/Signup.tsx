import { useRef } from 'react';
import { Button } from '../components/ui/Button';
import { Input } from '../components/Input';
import axios from 'axios';
import { BACKEND_URL } from '../config';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const usernameRef = useRef<HTMLInputElement>();
  const passwordRef = useRef<HTMLInputElement>();
  const navigate = useNavigate();

  const api = axios.create({
    baseURL: BACKEND_URL,
  });

  async function signup() {
    const username = usernameRef.current?.value;
    const password = passwordRef.current?.value;

    console.log(BACKEND_URL);
    try {
      // Make API request
      const response = await api.post(`${BACKEND_URL}/signup`, {
        username,
        password,
      });

      // Handle 204 explicitly
      if (response.status === 204) {
        alert('You have signed up successfully!');
      } else {
        alert(response.data?.message || 'You have signed up!');
      }
      navigate('/signin');
    } catch (error) {
      console.error('Error Details:', error); // Log the full error object

      alert('Failed to sign up. Please try again.');
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
            text='signup'
            size='md'
            fullWidth={true}
            onClick={signup}
          />
        </div>
      </div>
    </div>
  );
};

export default Signup;
