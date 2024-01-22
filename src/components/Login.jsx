import './login.css';
import React from 'react';

export default function Login() {
  return (
    <div id='Login'>
      <h1>Login</h1>
      <form>
        <div className='input'>
          
          <input type='text' id='username' name='username' placeholder='username'></input>
        </div>

        <div className='input'>
          
          <input type='password' id='password' name='password' placeholder='password'/>
        </div>

        <button type='submit'>Log In</button>
      </form>
    </div>
  );
}
