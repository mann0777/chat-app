import React from 'react'
import Add from '../img/luxury.jpg';

export const Register = () => {
  return (
    <div className='formContainer'>
        <div className='formWrapper'>
        <span className='logo'>Psychoholic Chat</span>
        <span className='title'>Register</span>
            <form>
            <input type= "text" placeholder='Display Name'/>
            <input type="email" placeholder='Email'/>
            <input type="password" placeholder='Password'/>
            <input style ={{display:"none"}} type="file" id = "file"/>
            <label htmlFor='file'>
                <img src={Add} alt='' />
                <span>Add an Avtar</span>
            </label>
            <button>Sign Up</button>

            </form>
            <p>You do have an account ? Login here</p>
        </div>
    </div>
  )
}


