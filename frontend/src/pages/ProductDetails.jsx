import React, { useEffect, useState } from 'react'
import { Add, Remove } from '@material-ui/icons'
import { publicRequest } from '../requestMethods'
import { useLocation } from 'react-router-dom'
import styled from 'styled-components'
import MainLayout from '../layouts/MainLayout'
import { xsmall } from '../responsive'

const ProductDetails = () => {
    const { pathname } = useLocation()
    const id = pathname.split('/')[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)

    const handleQuantity = (type) => {
        if (type === 'increase') {
            setQuantity(quantity + 1)
        } else {
            setQuantity(quantity > 1 ? quantity - 1 : 1)
        }
    }

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get(`/products/${id}`)
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getProduct()
    }, [id])


    return (
        <MainLayout>
            <Container>
                <Wrapper>
                    <ImageContainer>
                        <Image src={product.image} />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Description>{product.description}</Description>
                        <Price>${product.price}</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color: </FilterTitle>
                                {product.color?.map(c => (
                                    <ColorOption color={c} key={c} />
                                ))}
                            </Filter>
                        </FilterContainer>
                        <AddToCartContainer>
                            <AmountContainer>
                                <Remove onClick={() => handleQuantity('decrease')} />
                                <Amount>{quantity}</Amount>
                                <Add onClick={() => handleQuantity('increase')} />
                            </AmountContainer>
                            <Button>Add to Cart</Button>
                        </AddToCartContainer>
                    </InfoContainer>
                </Wrapper>
            </Container>
        </MainLayout>
    )
}

const Container = styled.div`
    padding: 30px 370px;

    ${xsmall({ padding: '20px' })}
`

const Wrapper = styled.div`
    display: flex;
 
    ${xsmall({ flexDirection: 'column' })}
`

const ImageContainer = styled.div`
    flex: 1;
    margin-right: 30px;

    ${xsmall({ marginRight: 0, marginBottom: '30px' })}
`

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;

    ${xsmall({ height: '40vh' })}
`

const InfoContainer = styled.div`
    flex: 1;
`

const Title = styled.h2`
    color: #0D134E;
    font-family: 'Josefin Sans', sans-serif;
    font-size: 36px;
    line-height: 1.5;
`

const Description = styled.p`
    line-height: 1.5;
    color: #A9ACC6;
    margin: 20px 0 30px 0;

    ${xsmall({ fontSize: '18px' })}
`

const Price = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 28px;
    color: #151875;

    ${xsmall({ fontSize: '30px' })}
`

const FilterContainer = styled.div`
    margin: 30px 0;
`

const Filter = styled.div`
    display: flex;
    
    ${xsmall({ alignItems: 'center' })}
`

const FilterTitle = styled.span`
    margin-right: 5px;

    ${xsmall({ marginRight: '10px', fontSize: '18px' })}
`

const ColorOption = styled.div`
    border: 0.1px solid #00000020;
    margin: 0 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${props => props.color};

    ${xsmall({ marginRight: '10px', width: '25px', height: '25px' })}
`

const AddToCartContainer = styled.div`
    display: flex;
    align-items: center;

    ${xsmall({ justifyContent: 'space-between' })}
`

const AmountContainer = styled.div`
   display: flex;
   align-items: center;
   margin-right: 40px;
   color: #151875;
   
   svg {
       background: #a9acc630;
       padding: 4px;
       border-radius: 50%;
       cursor: pointer;
       transition: all 100ms ease-in;

       &:hover {
        background: #a9acc650;
       }
   
       ${xsmall({ fontSize: '26px' })}
    }

   ${xsmall({ fontSize: '18px' })}
`

const Amount = styled.span`
    margin: 0 20px;
`

const Button = styled.button`
    outline: none;
    border: 1px solid #151875;
    color: #151875;
    background: white;
    padding: 10px;
    cursor: pointer;
    font-weight: bold;
    transition: all 100ms ease-in;

    &:hover {
        background: #151875;
        color: white;
    }

   ${xsmall({ fontSize: '16px' })}
`

export default ProductDetails
