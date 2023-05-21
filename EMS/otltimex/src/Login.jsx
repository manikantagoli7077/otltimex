 import React, {useState} from 'react'
 import 'bootstrap/dist/css/bootstrap.min.css' 
 import './style.css'
 import axios from 'axios'
 function Login() {

    const [values, setValues]=useState({
        email:'',
        password:''
    })

    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('',values)
        .then(res=>console.log(res))
        .catch(err=>console.log(err));

    }

   return (
     <div>
       <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
        <div className=' p-3 rounded w-25 border loginForm'>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-3'>
                    <label htmlFor="email"><strong>Email</strong></label>
                    <input type="email" placeholder="Enter Email" name='email' onChange={e=>setValues({...values, email:e.target.value})} className='form-control rounded-0'/>
                </div>
                <div className='mb-3'>
                    <label htmlFor="password"><strong>Password</strong></label>
                    <input type="password" placeholder="Enter Password" name='password' onChange={e=>setValues({...values, password:e.target.value})} className='form-control rounded-0'/>
                </div>
                <button type='submit' className='btn btn-success w-100 rounded-0'>Log in</button>
                <p>You are agreeing to out terms and policies</p>
                <button className='btn btn-default border w-100 bg-light rounded-0 text-decoration-0'>Create Account</button>

            </form>
        </div>
       </div>
     </div>
   )
 }
 
 export default Login
 