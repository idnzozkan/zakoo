import React from 'react'
import styled from 'styled-components'
import { SendOutlined } from '@material-ui/icons'

const Newsletter = () => {
    return (
        <Container>
            <Wrapper>
                <Text>
                    Get Latest Updates By Subscribing To Our Newsletter
                </Text>
                <InputContainer>
                    <Input placeholder="Enter your email" />
                    <Button>
                        <SendOutlined />
                    </Button>
                </InputContainer>
            </Wrapper>
        </Container>
    )
}

const Container = styled.section`
    margin: 50px 0; 
    width: 100%;
    height: 40vh;
    background-image: url('https://i.imgur.com/otO9vCD.jpg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

const Text = styled.h3`
    color: white;
    text-shadow: 1px 2px 3px #15187550;
    text-align: center;
    line-height: 1.5;
    font-size: 35px;
    font-family: 'Josefin Sans', sans-serif;
    width: 30%;
`

const InputContainer = styled.div`
    display: flex;
    margin-top: 20px;
    width: 20vw;
`

const Input = styled.input`
    flex: 8;
    border: none;
    outline: none;
    padding: 10px;
    font-size: 18px;
`

const Button = styled.button`
    flex: 1;
    border: none;
    outline: none;
    color: white;
    background-color: #FB2E86;
    padding: 8px;
    cursor: pointer;
`

export default Newsletter
