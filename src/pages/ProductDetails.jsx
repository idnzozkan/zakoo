import { Add, Remove } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'
import MainLayout from '../layouts/MainLayout'

const ProductDetails = () => {
    return (
        <MainLayout>
            <Container>
                <Wrapper>
                    <ImageContainer>
                        <Image src="https://i.imgur.com/ctqu7Wm.jpg" />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Playwood arm chair</Title>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</Description>
                        <Price>$26.00</Price>
                        <FilterContainer>
                            <Filter>
                                <FilterTitle>Color: </FilterTitle>
                                <ColorOption color="gray" />
                                <ColorOption color="black" />
                                <ColorOption color="white" />
                            </Filter>
                        </FilterContainer>
                        <AddToCartContainer>
                            <AmountContainer>
                                <Remove />
                                <Amount>1</Amount>
                                <Add />
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
`

const Wrapper = styled.div`
    display: flex;
`

const ImageContainer = styled.div`
    flex: 1;
    margin-right: 30px;
`

const Image = styled.img`
    width: 100%;
    height: 80vh;
    object-fit: cover;
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
`

const Price = styled.span`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 28px;
    color: #151875;
`

const FilterContainer = styled.div`
    margin: 30px 0;
`

const Filter = styled.div`
    display: flex;
    `

const FilterTitle = styled.span`
    margin-right: 5px;
    `

const ColorOption = styled.div`
    border: 0.1px solid #00000020;
    margin: 0 5px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: ${props => props.color};
`

const AddToCartContainer = styled.div`
    display: flex;
    align-items: center;
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
   }
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
`

export default ProductDetails
