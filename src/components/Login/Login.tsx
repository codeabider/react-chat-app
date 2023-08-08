import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../common/Input/Input';
import CustomButton from '../common/Button/Button';

import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: any) => {
    e.preventDefault();
    if (username && password) {
      localStorage.setItem('userID', '1'); // hardcoded userID for APIs
      navigate('/conversations');
    }
  };

  return (
    <div className='login-container'>
      <h1 className='heading'>Login</h1>
      <form onSubmit={handleLogin}>
        <div className='form-group'>
          <Input
            type='text'
            label='User name'
            value={username}
            error={!username}
            fullWidth
            onChange={(e: any) => setUsername(e.target.value)}
            required
          ></Input>
        </div>
        <div className='form-group'>
          <Input
            type='password'
            label='Password'
            value={password}
            fullWidth
            error={!password}
            onChange={(e: any) => setPassword(e.target.value)}
            required
          ></Input>
        </div>
        <CustomButton
          type='submit'
          variant='outlined'
          disabled={!username || !password}
          onClick={handleLogin}
        >
          Login
        </CustomButton>
      </form>
    </div>
  );
};

export default Login;
