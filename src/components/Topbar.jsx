import { Badge } from '@material-ui/core'
import { FavoriteBorderOutlined, MailOutlined, PhoneOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Topbar = () => {
    return (
        <Container>
            <Wrapper>
                <Left>
                    <Mail>
                        <MailOutlined />
                        contact@mail.com
                    </Mail>
                    <Phone>
                        <PhoneOutlined />
                        (12345)67890
                    </Phone>
                </Left>
                <Right>
                    <Language>
                        <select name="supported-languages" id="supported-languages">
                            <option value="English">English</option>
                        </select>
                    </Language>
                    <Wishlist>
                        Wishlist
                        <FavoriteBorderOutlined />
                    </Wishlist>
                    <Cart>
                        <Badge badgeContent={4} color="secondary" overlap="circular">
                            <ShoppingCartOutlined />
                        </Badge>
                    </Cart>
                </Right>
            </Wrapper>
        </Container>
    )
}

const Container = styled.div`
    height: 44px;
    color: white;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    background: #7E33E0;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
    padding: 20px 370px;
`

const Left = styled.div`
    display: flex;
    align-items: center;
    flex: 1;   
`

const Mail = styled.div`
    display: flex;
    align-items: center;
    color: white;
    margin-right: 50px;
    font-family: 'Josefin Sans', sans-serif;

    svg {
        margin-right: 12px;
    }
`

const Phone = styled.div`
    display: flex;
    align-items: center;
    color: white;
    font-family: 'Josefin Sans', sans-serif;

    svg {
        margin-right: 12px;
    }
`

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex: 1;   
`

const Language = styled.div`
    font-family: 'Josefin Sans', sans-serif;

    select {
        cursor: pointer;
        border: none;
        outline: none;
        color: white;
        background: #7E33E0;
        font-size: 16px;
        font-family: 'Josefin Sans', sans-serif;
    }

`

const Wishlist = styled.div`
    display: flex;
    align-items: center;
    margin-left: 36px;
    cursor: pointer;
    font-family: 'Josefin Sans', sans-serif;
    
    svg {
        margin-left: 12px;
    }
`

const Cart = styled.div`
    display: flex;
    align-items: center;
    margin-left: 36px;
    cursor: pointer;
`

export default Topbar
