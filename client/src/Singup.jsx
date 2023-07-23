import React from 'react'

function Singup() {
  return (
    <div>
        <div>
            <h2></h2>
            <form>
                <div className=''>
                    <label htmlFor='Email'>
                        Name
                    </label>
                    <input 
                    type='text'
                    placeholder=''
                    autoComplete=''
                    className='' 
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
                    />
                </div>
                <div>
                    <label htmlFor='Email'>
                        Password
                    </label>
                    <input 
                    type='text'
                    placeholder=''
                    autoComplete=''
                    className='' 
                    />
                </div>
                <button type='' className=''>
                    Register
                </button>
                <p>Already have an Account ?</p>
                <button type='' className=''>
                    Login
                </button>   
            </form>
        </div>
    </div>
  )
}
export default Singup