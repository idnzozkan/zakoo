import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { xsmall } from '../responsive'
import { login } from '../store/apiRequests'

const LoginForm = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const dispatch = useDispatch()

    const handleSignInButton = (e) => {
        e.preventDefault()
        login(dispatch, { username, password })
    }

    return (
        <Form>
            <Input placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <Input placeholder="Password" type="password" onChange={(e) => setPassword(e.target.value)} />
            <Link>Forgot your password?</Link>
            <Button onClick={(e) => handleSignInButton(e)}>Sign In</Button>
            <Link textAlign="center">Don’t you have an account? Create one now!</Link>
        </Form>
    )
}

const Form = styled.form`
    display: flex;
    flex-direction: column;
`

const Input = styled.input`
    padding: 10px;
    margin-bottom: 20px;
    outline-color: #a3a8d3;
    border: 1px solid #C2C5E1;
    border-radius: 2px;
    font-size: 16px;
`

const Button = styled.button`
    outline: none;
    border: none;
    border-radius: 3px;
    background: #FB2E86;
    color: white;
    font-weight: 700;
    font-size: 17px;
    margin: 20px 0;
    cursor: pointer;
    height: 47px;
    transition: all 200ms;

    &:hover {
        background: #eb277c;
    }
`

const Link = styled.a`
    cursor: pointer;
    font-size: 17px;
    color: #9096B2;
    text-align: ${props => props.textAlign};

    &:hover {
        color: #7c83a3;
    }

   ${xsmall({ fontSize: '15px' })}
`

export default LoginForm
