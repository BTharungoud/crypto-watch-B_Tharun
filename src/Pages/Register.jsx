import React, { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import './auth.css'
import LoginPage from './LoginPage'
const Register = () => {

    const [credentials, setCredentials] = useState({ email: '', password: '', name: '', })

    const history = useHistory()
    
    const obj={ email: '', password: '', name: '', };
    const handleRegister = (e) => {
        e.preventDefault();
       // console.log(e);
        obj.email=e.target.email.value;
        obj.password=e.target.password.value;
        obj.name=e.target.name.value;
      
      history.push('/login');
      history();
       
        // set the user data to the localStorage
        
    }
    const handleChange = (e) => {
        e.preventDefault();
        //console.log(e);
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }

    return (
        <>
        <div className='container'>
            <form onSubmit={handleRegister}>
                <h1>Register</h1>
                <div className="input name-input">
                    <input type="text" placeholder='Enter you name' required value={credentials.name} name="name" onChange={handleChange} />
                </div>
                <div className="input email-input">
                    <input type="email" placeholder='Enter you email..' required value={credentials.email} name="email" onChange={handleChange} />
                </div>
                <div className="input password-input">
                    <input type="password" placeholder='Enter you password' required value={credentials.password} name="password" onChange={handleChange} />
                </div>
                <button type='submit'>Register</button>
                <div className="account">
                    <span>Already have an account?</span>
                    <Link to="/login">Login</Link>
                </div>
            </form>
            </div>
            <LoginPage data={obj.email}/>
        </>
        
    )
}

export default Register