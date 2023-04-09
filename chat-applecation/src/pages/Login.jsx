import React from 'react'
import {Link} from 'react-router-dom'



const Login = () => {
  const handelEmail = (e)=>{
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value

  }
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
            <span className='logo'>Hemo Chat</span>
            <span className='regester'>Login</span>
            <form onSubmit={handelEmail}>
                <input type="email" placeholder='email'/>
                <input type="password" placeholder='password' />
                <button>Login</button>
            </form>
            <span className='fotter'>You dont have account? <Link to="/regester">Regester</Link></span>
        </div>
    </div>
  )
}

export default Login