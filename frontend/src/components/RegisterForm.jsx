import React from 'react'
import styled from 'styled-components'
import { xsmall } from '../responsive'

const RegisterForm = () => {
    return (
        <Form>
            <Input placeholder="Name" />
            <Input placeholder="Surname" />
            <Input placeholder="Username" />
            <Input placeholder="Email" type="email" />
            <Input placeholder="Password" type="password" />
            <Input placeholder="Confirm Password" type="password" />
            <Aggreement textAlign="center">By creating an account, you agree to our <Link><b>Privacy Policy</b></Link></Aggreement>
            <Button>Register</Button>
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

const Aggreement = styled.span`
    font-size: 17px;
    color: #9096B2;
    text-align: ${props => props.textAlign};
`

export default RegisterForm
