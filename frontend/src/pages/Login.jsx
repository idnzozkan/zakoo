import React from 'react'
import styled from 'styled-components'
import LoginRegisterForm from '../components/LoginRegisterForm'
import MainLayout from '../layouts/MainLayout'
import { xsmall } from '../responsive'

const Login = () => {
    return (
        <MainLayout>
            <Container>
                <LoginRegisterForm title="Login" description="Please login using the account details bellow." formType="login" />
            </Container>
        </MainLayout>
    )
}

const Container = styled.div`
    padding: 100px 370px;

   ${xsmall({ padding: '50px 0' })}
`

export default Login
