import axios from 'axios'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

function Singup() {
    const [name,setName] = useState()
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/register', {name, email, password})
        .then(result => {console.log(result)
        navigate('/login')
        })
        .catch(err=> console.log(err))
    } 

  return (
    <div>
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className=''>
                    <label htmlFor='Email'>
                        Name
                    </label>
                    <input 
                    type='text'
                    placeholder=''
                    autoComplete=''
                    className='' 
                    onChange={(e) => setName(e.target.value)}
                    />
                </div>
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
                    Register
                </button>
                </form>
                <p>Already have an Account ?</p>
                <Link to="/login" className=''>
                    Login
                </Link>   
        </div>
    </div>
  )
}
export default Singup