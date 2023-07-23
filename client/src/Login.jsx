import { useState } from "react"
import { Link } from "react-router-dom"
import axios from 'axios'
import { useNavigate } from "react-router-dom"

function Login() {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()  
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email, password})
        .then(result => {
            console.log(result)
            if(result.data === "Succsess"){
                navigate('/home')
            }
        })
        .catch(err=> console.log(err))
    }
    return (
        <div>
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='Email'>
                        Email
                    </label>
                    <input 
                    type='text'
                    placeholder=''
                    autoComplete=''
                    className=''
                    onChange={(e) => setEmail(e.target.value)} 
                    />
                </div>
                <div>
                    <label htmlFor='Password'>
                        Password
                    </label>
                    <input 
                    type='password'
                    placeholder=''
                    autoComplete=''
                    className=''
                    onChange={(e) => setPassword(e.target.value)} 
                    />
                </div>
                <button type='' className=''>
                    Login
                </button>
                </form>
                <p>Dont have account mate</p>
                <Link to="/register" className=''>
                    Sign up Now
                </Link>   
        </div>
    </div>
  )
}
export default Login
