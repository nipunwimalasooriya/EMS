import './style.css';
import { useState } from 'react';
import axios from 'axios';


const Login = () => {
        const [values, setValues] = useState(
        {
            email: '',
            password: ''
        }
        );
        const handleSubmit = (event) => {
            event.preventDefault()
            axios.post('http://localhost:3000/auth/adminlogin')
            .then(result => console.log(result))
            .catch(err => console.log(err))
        }

        return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded 2-25 border loginForm'>
                <h2 className = 'text-center text-primary'>Login Page</h2>
                <form onSubmit={handleSubmit}>
                    <div className ='mb-3'>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name="email" autoComplete='off' placeholder='Enter email' 
                        onChange = {(e)=> setValues({...values, email : e.target.value})} className='form-control rounded-3'/>
                    </div>
                    <div className ='mb-2'>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" name="password" autoComplete='off' placeholder='Enter password' 
                        onChange = {(e)=> setValues({...values, password : e.target.value})}className='form-control rounded-3'/>
                    </div>
                    <div className = 'mb-2'>
                        <input type="checkbox" name="tick" id="tick" className = 'me-1'/>
                        <label htmlFor="password">Agree with our terms & conditions</label>
                    </div>
                    <button type="submit" className='btn btn-primary w-100 rounded-3'>Log in</button>
                </form>
            </div>
        </div>
    );

}

export default Login;

