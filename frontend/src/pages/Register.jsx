import React from 'react'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import LoginRegisterForm from '../components/LoginRegisterForm'
import MainLayout from '../layouts/MainLayout'
import { xsmall } from '../responsive'

const Login = () => {
    let isUserLoggedIn = true

    if (isUserLoggedIn) return <Navigate to="/" />

    return (
        <MainLayout>
            <Container>
                <LoginRegisterForm title="Register" description="Please enter the required fields." formType="register" />
            </Container>
        </MainLayout>
    )
}

const Container = styled.div`
    padding: 100px 370px;

   ${xsmall({ padding: '50px 0' })}
`

export default Login
