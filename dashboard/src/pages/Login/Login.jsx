import React from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../store/apiRequests'
import './login.scss'

const Login = () => {
    const dispatch = useDispatch()
    const [userData, setUserData] = useState({ username: '', password: '' })

    const handleChange = (e) => {
        if (e.target.name === 'username') setUserData(prev => ({ ...prev, username: e.target.value }))
        if (e.target.name === 'password') setUserData(prev => ({ ...prev, password: e.target.value }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        login(dispatch, userData)
    }

    return (
        <div className="login-form-wrapper">
            <h1 className='logo'>Zakoo</h1>
            <form>
                <input type="text" name="username" placeholder='Username' onChange={e => handleChange(e)} />
                <input type="password" name="password" placeholder='Password' onChange={e => handleChange(e)} />
                <button type="submit" onClick={e => handleSubmit(e)}>Login</button>
            </form>
        </div>
    )
}

export default Login
