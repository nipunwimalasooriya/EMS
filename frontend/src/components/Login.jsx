import './style.css';
const Login = () => {
    return (
        <div className='d-flex gap-3 justify-content-center  align-item-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <h2>Login Page</h2>
                <form action="submit">
                    <div>
                        <label htmlFor="email"><strong>Email:</strong></label>
                        <input type="email" name="email"  autoComplete = 'off' placeholder = 'Enter email'  
                        className='form-control rounded-2'/>
                    </div>
                    <div>
                        <label htmlFor="password"><strong>Password:</strong></label>
                        <input type="password" name="password"  autoComplete = 'off' placeholder = 'Enter password'  
                        className='form-control rounded-2'/>
                    </div>
                    <button type="submit" className='btn btn-success w-100 rounded-2'>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Login;