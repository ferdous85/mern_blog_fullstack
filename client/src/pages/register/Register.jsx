import './register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function Register() {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)


    const handleSubmit = async (e)=>{
        e.preventDefault()
        try {
            setError(false)
            const res = await axios.post('/auth/register',{
                username,
                email, 
                password
            })
            res.data && window.location.replace('/login')
        } catch (err) {
            
            setError(true)
        }
    }
        
    return (
        <div className='register'>
            <span className="registerTitle">Register</span>
            <form onSubmit={handleSubmit}  className="registerForm">
            <label >Username</label>
                <input type="text" 
                className='registerInput' 
                placeholder='Enter your Username .. '
                onChange={e=>setUsername(e.target.value)}
                 />

                <label >Email</label>
                <input  type="email" className='registerInput' placeholder='Enter your email' onChange={e=>setEmail(e.target.value)} />
                <label>Password</label>
                <input type="password" className='registerInput' placeholder='Enter your Password' onChange={e=>setPassword(e.target.value)} />
                <button type='submit' className="registerLoginButton">Register</button>
            </form>
            <button className="loginButton">
            <Link to='/login' className='link'>Login</Link>
            </button>
            {error && <span style={{color:'red', marginTop:'10px'}}  >Something went wrong..</span>}

        </div>
    )
}
