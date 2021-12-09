import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom'
import styled from 'styled-components'
import RegisterForm from '../components/RegisterForm'
import MainLayout from '../layouts/MainLayout'
import { xsmall } from '../responsive'

const Login = () => {
    const loggedInUser = useSelector(state => state.reducer.user.loggedInUser)

    if (loggedInUser) return <Navigate to="/" />

    return (
        <MainLayout>
            <Container>
                <Wrapper>
                    <TextContainer>
                        <Title>Register</Title>
                        <Description>Please enter the required fields.</Description>
                    </TextContainer>
                    <RegisterForm />
                </Wrapper>
            </Container>
        </MainLayout>
    )
}

const Container = styled.div`
    padding: 100px 370px;

   ${xsmall({ padding: '50px 0' })}
`

const Wrapper = styled.div`
    margin: auto;
    padding: 50px 56px;
    width: 40%;
    background: #FFFFFF;
    box-shadow: 0px 0px 25px 10px #F8F8FB;

   ${xsmall({ padding: 0, width: '70%' })}
`

const TextContainer = styled.div`
    text-align: center;
`

const Title = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 32px;
    line-height: 37.5px;
    color: #000;
`

const Description = styled.p`
    font-size: 17px;
    line-height: 37.5px;
    color: #9096B2;
    margin-bottom: 20px;

   ${xsmall({ lineHeight: 1.75 })}
`

export default Login
