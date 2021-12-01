import React from 'react'
import styled from 'styled-components'
import MainLayout from '../layouts/MainLayout'
import { Add, Remove } from '@material-ui/icons'

const Cart = () => {
    return (
        <MainLayout>
            <Container>
                <Wrapper>
                    <Top>
                        <TopButton>Continue Shopping</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag (4)</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <TopButton type="checkout" >Proceed to Checkout</TopButton>
                    </Top>
                    <Bottom>
                        <Info>
                            <Product>
                                <Image src="https://i.imgur.com/0eWlkli.png" />
                                <ProductInfo>
                                    <ProductName>Vel elit euismod</ProductName>
                                    <ProductColor>
                                        <b>Color:</b>
                                        <SelectedColor color="gray" />
                                    </ProductColor>
                                    <UnitPrice><b>Unit Price:</b> $26.00</UnitPrice>
                                </ProductInfo>
                                <PriceDetail>
                                    <AmountContainer>
                                        <Remove />
                                        <Amount>4</Amount>
                                        <Add />
                                    </AmountContainer>
                                    <TotalPrice><b>Total:</b> $104.00</TotalPrice>
                                </PriceDetail>
                            </Product>
                            <Hr />
                        </Info>
                        <Summary>
                            s
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
        </MainLayout>
    )
}

const Container = styled.div`
    padding: 50px 370px;
`

const Wrapper = styled.div`
    margin: 30px 0;
`

const Top = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const TopButton = styled.button`
    padding: 10px;
    font-weight: 700;
    border-radius: 3px;
    border: ${props => props.type === 'checkout' ? 'none' : '1.25px solid #FB2E86'};
    background: ${props => props.type === 'checkout' ? '#19D16F' : 'white'};
    color: ${props => props.type === 'checkout' ? '#FFFFFF' : '#FB2E86'};
    cursor: pointer;

    &:hover {
        background: ${props => props.type === 'checkout' ? '#16c969' : '#FB2E86'};
        color: ${props => props.type === 'checkout' ? '#FFFFFF' : '#FFFFFF'};
    }
`

const TopTexts = styled.div`
`

const TopText = styled.span`
    text-decoration: underline;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    color: #1D3178;
    cursor: pointer;
    margin: 0 10px;
`

const Bottom = styled.div`
    display: flex;
    justify-content: space-between;
`

const Info = styled.div`
    flex: 3;
    padding: 30px 0;
`

const Summary = styled.div`
    flex: 1.75;
`

const Product = styled.div`
    display: flex;
    align-items: center;
`

const Image = styled.img`
    flex: 1;
    height: 20vh;
    width: 100%;
    object-fit: cover;
    margin-right: 20px;
`

const ProductInfo = styled.div`
    flex: 2;
`

const ProductName = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 15px;
    font-weight: 700;
    line-height: 16px;
    color: #000000;
    cursor: pointer;
`

const ProductColor = styled.div`
    margin-top: 7px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #A1A8C1;
`

const SelectedColor = styled.div`
    display: inline-block;
    vertical-align: text-top;
    margin: 0 5px;
    border: 0.1px solid #00000020;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const UnitPrice = styled.span`
    margin-top: 7px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 14px;
    line-height: 16px;
    color: #A1A8C1;
`

const PriceDetail = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
`


const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   color: #151875;
   margin-bottom: 12px;

   svg {
       background: #a9acc630;
       padding: 4px;
       border-radius: 50%;
       cursor: pointer;
       transition: all 100ms ease-in;

       &:hover {
        background: #a9acc650;
       }
   }
`

const Amount = styled.span`
    margin: 0 16px;
`

const TotalPrice = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    color: #151875;
    font-size: 18px;
`

const Hr = styled.hr`
    margin-top: 30px;
    border: 0.5px solid #a9acc620;
`

export default Cart
