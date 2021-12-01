import React from 'react'
import styled from 'styled-components'
import LoginRegisterForm from '../components/LoginRegisterForm'
import MainLayout from '../layouts/MainLayout'

const Login = () => {
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
`

export default Login