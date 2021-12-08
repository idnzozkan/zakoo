import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { userRequest } from '../requestMethods'
import MainLayout from '../layouts/MainLayout'
import StripePay from '../components/StripePay'
import { xsmall } from '../responsive'
import { Add, Remove } from '@material-ui/icons'

const Cart = () => {
    const cart = useSelector(state => state.cart)
    const [stripeToken, setStripeToken] = useState()
    const navigate = useNavigate()

    const onToken = (token) => {
        setStripeToken(token)
    }

    useEffect(() => {
        const checkoutRequest = async () => {
            try {
                const stripeResponse = await userRequest.post('/checkout/payment', {
                    tokenId: stripeToken.id,
                    amount: cart.totalPrice * 100
                })
                navigate('/success', { state: { stripeData: stripeResponse, orderData: cart } })
            } catch (error) {
                console.log(error.message)
            }
        }
        (stripeToken && cart.totalPrice) && checkoutRequest()
    }, [stripeToken, cart, navigate])

    return (
        <MainLayout>
            <Container>
                <Wrapper>
                    <Top>
                        <TopButton>Continue Shopping</TopButton>
                        <TopTexts>
                            <TopText>Shopping Bag ({cart.productCountInCart})</TopText>
                            <TopText>Your Wishlist (0)</TopText>
                        </TopTexts>
                        <StripePay cart={cart} onToken={onToken}>
                            <TopButton type="checkout" >Proceed to Checkout</TopButton>
                        </StripePay>
                    </Top>
                    <Bottom>
                        <Info>
                            {cart.products.map(product => (
                                <>
                                    <Product>
                                        <Image src={product.image} />
                                        <DetailsContainer>
                                            <ProductInfo>
                                                <ProductName>{product.title}</ProductName>
                                                <ProductColor>
                                                    <b>Color:</b>
                                                    <SelectedColor color={product.color} />
                                                </ProductColor>
                                                <UnitPrice><b>Unit Price:</b> ${product.price}</UnitPrice>
                                            </ProductInfo>
                                            <PriceDetail>
                                                <AmountContainer>
                                                    <Remove />
                                                    <Amount>{product.quantity}</Amount>
                                                    <Add />
                                                </AmountContainer>
                                                <TotalPrice>${product.price * product.quantity}</TotalPrice>
                                            </PriceDetail>
                                        </DetailsContainer>
                                    </Product>
                                    <Hr />
                                </>
                            ))}
                        </Info>
                        <Summary>
                            <SummaryItem>
                                <SummaryText>Subtotal</SummaryText>
                                <SummaryPrice>${cart.totalPrice}</SummaryPrice>
                            </SummaryItem>
                            <SummaryLine />
                            <SummaryItem>
                                <SummaryText>Estimated Shipping</SummaryText>
                                <SummaryPrice>$10.00</SummaryPrice>
                            </SummaryItem>
                            <SummaryLine />
                            <SummaryItem>
                                <SummaryText>Shipping Discount</SummaryText>
                                <SummaryPrice type="discount">-$10.00</SummaryPrice>
                            </SummaryItem>
                            <SummaryLine />
                            <SummaryItem type="total">
                                <SummaryText>Total</SummaryText>
                                <SummaryPrice>${cart.totalPrice}</SummaryPrice>
                            </SummaryItem>
                            <SummaryLine />
                            <StripePay cart={cart} onToken={onToken}>
                                <Button>Proceed to Checkout</Button>
                            </StripePay>
                        </Summary>
                    </Bottom>
                </Wrapper>
            </Container>
        </MainLayout>
    )
}

const Container = styled.div`
    padding: 50px 370px;

   ${xsmall({ padding: '50px 20px' })}
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
    outline-color: ${props => props.type === 'checkout' ? '#16c969' : '#e42377'};
    color: ${props => props.type === 'checkout' ? '#FFFFFF' : '#FB2E86'};
    cursor: pointer;

    &:hover {
        background: ${props => props.type === 'checkout' ? '#16c969' : '#FB2E86'};
        color: ${props => props.type === 'checkout' ? '#FFFFFF' : '#FFFFFF'};
    }
`

const TopTexts = styled.div`
   ${xsmall({ display: 'none' })}
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

   ${xsmall({ flexDirection: 'column' })}
`

const Info = styled.div`
    flex: 3;
    padding: 30px 0;
`

const Summary = styled.div`
    position: sticky;
    top: 30px;
    flex: 1.75;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    margin: 50px 0 0 30px;
    padding: 20px;
    background: #F4F4FC;
    border-radius: 3px;
    height: fit-content;
    min-height: 30vh;

   ${xsmall({ margin: 0 })}
`

const SummaryItem = styled.div`
    display: flex;
    justify-content: space-between;
    color: #1D3178;
    font-size: 18px;
    font-weight: ${props => props.type === 'total' && 700};
    padding: 10px 0;
`

const SummaryText = styled.span``

const SummaryPrice = styled.span`
    color: ${props => props.type === 'discount' && '#16c969'};
`

const SummaryLine = styled.hr`
    border: 1px solid #E8E6F180;
    margin-bottom: 10px;
`

const Button = styled.button`
    margin: 16px 0;
    padding: 12px;
    background: #19D16F;
    color: #FFFFFF;
    cursor: pointer;
    text-transform: uppercase;
    font-weight: 700;
    border-radius: 3px;
    border: none;
    outline-color: #16c969;

    &:hover {
        background: #16c969;
    }
`

const Product = styled.div`
    display: flex;
    align-items: center;
    padding: 12px 0;
`

const Image = styled.img`
    flex: 1;
    height: 20vh;
    width: 100%;
    object-fit: cover;
    margin-right: 20px;
`

const DetailsContainer = styled.div`
    flex: 2;
    display: flex;
    align-items: center;

    ${xsmall({ flexDirection: 'column' })}
`

const ProductInfo = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    align-items: space-between;

    ${xsmall({ margin: '20px 0' })}
`

const ProductName = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
    line-height: 16px;
    color: #000000;
    cursor: pointer;
`

const ProductColor = styled.div`
    display: flex;
    align-items: center;
    margin-top: 10px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    line-height: 16px;
    color: #A1A8C1;

   ${xsmall({ fontSize: '14px' })}
`

const SelectedColor = styled.div`
    display: inline-block;
    margin: 0 5px;
    border: 0.1px solid #00000020;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${props => props.color};
`

const UnitPrice = styled.span`
    margin-top: 10px;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 16px;
    line-height: 16px;
    color: #A1A8C1;

    ${xsmall({ fontSize: '14px' })}
`

const PriceDetail = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    ${xsmall({ flexDirection: 'column-reverse', marginTop: '20px' })}
`

const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   color: #151875;
   margin-bottom: 16px;

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
 
    ${xsmall({ marginTop: '20px' })}
`

const Amount = styled.span`
    margin: 0 16px;
`

const TotalPrice = styled.span`
    color: #151875;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 18px;
    font-weight: 700;
`

const Hr = styled.hr`
    margin: 15px 0;
    border: 0.5px solid #a9acc620;
`

export default Cart
