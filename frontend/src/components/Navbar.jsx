import React from 'react'
import styled from 'styled-components'
import { Search } from '@material-ui/icons'
import { xsmall } from '../responsive'

const Navbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Logo>Zakoo</Logo>
                </Left>
                <Center>
                    <MenuItem isActive="true">Home</MenuItem>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>Register</MenuItem>
                </Center>
                <Right>
                    <SearchContainer>
                        <Input placeholder="Search products" />
                        <SearchIconContainer>
                            <Search />
                        </SearchIconContainer>
                    </SearchContainer>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 78px;
    background: #fff;

    ${xsmall({ height: 'fit-content' })}
`

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 370px;

    ${xsmall({ padding: '20px 0', flexDirection: 'column' })}
`

const Left = styled.div`
    flex: 1;
`

const Logo = styled.h1`
    color: #0D0E43;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 34px;
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
`

const Center = styled.div`
    display: flex;
    flex: 2;
    
    ${xsmall({ flex: 1, margin: '14px 0' })}
`

const MenuItem = styled.div`
    color: ${props => props.isActive === 'true' ? '#FB2E86' : '#0D0E43'};
    font-size: 16px;
    margin-right: 36px;
    cursor: pointer;

    ${xsmall({ margin: '0 18px' })}
`

const Right = styled.div`
    flex: 1;
`

const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Input = styled.input`
    border: none;
    outline: none;
    width: 100%;
    border: 2px solid #E7E6EF;
    border-right: none;
    padding: 5px;
    font-size: 16px;
`

const SearchIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FB2E86;
    border: 2.5px solid #FB2E86;
    color: white;
    cursor: pointer;
    padding: 2px 7px;
`

export default Navbar
