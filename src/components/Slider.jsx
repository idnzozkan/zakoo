import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons'

const Slider = () => {
    const [slideIndex, setSlideIndex] = useState(0)

    const handleArrowClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleArrowClick("left")}>
                <ArrowBackIosOutlined />
            </Arrow>

            <Wrapper slideIndex={slideIndex}>
                <Slide>
                    <InfoContainer>
                        <SmallTitle>Best Furniture For Your Castle....</SmallTitle>
                        <MainTitle>New Furniture Collection Trends in 2021</MainTitle>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    <ImageContainer>
                        <Image src="https://i.imgur.com/qW0jsNY.png" />
                    </ImageContainer>
                </Slide>
                <Slide>
                    <InfoContainer>
                        <SmallTitle>Best Furniture For Your Castle....</SmallTitle>
                        <MainTitle>New Trends In This Summer</MainTitle>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    <ImageContainer>
                        <Image src="https://i.imgur.com/qW0jsNY.png" />
                    </ImageContainer>
                </Slide>
                <Slide>
                    <InfoContainer>
                        <SmallTitle>Best Furniture For Your Castle....</SmallTitle>
                        <MainTitle>Free Shipping On All Orders Over $100</MainTitle>
                        <Description>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</Description>
                        <Button>Shop Now</Button>
                    </InfoContainer>
                    <ImageContainer>
                        <Image src="https://i.imgur.com/qW0jsNY.png" />
                    </ImageContainer>
                </Slide>
            </Wrapper>

            <Arrow direction="right" onClick={() => handleArrowClick("right")}>
                <ArrowForwardIosOutlined />
            </Arrow>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: calc(100vh - 122px);
    overflow: hidden;
`

const Arrow = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    margin: auto;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && '10px'};
    right: ${props => props.direction === 'right' && '10px'};
    width: 50px;
    height: 50px;
    padding: 20px;
    border-radius: 50%;
    background: #efd0ff76;
    color: #a700ffd6;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`

const Wrapper = styled.div`
    display: flex;
    height: 100%;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

const Slide = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: calc(100vh - 122px);
    background: #ecd2fa35;
    padding: 0 370px;
`

const ImageContainer = styled.div`
    flex: 1;
    margin-left: 50px;
`

const Image = styled.img`
    width: 100%;
`

const InfoContainer = styled.div`
    flex: 1;
`

const SmallTitle = styled.h3`
    color: #FB2E86;
    font-size: 16px;
    font-weight: bold;
    line-height: 1.5;
    margin-bottom: 12px;
`
const MainTitle = styled.h2`
    color: black;
    font-size: 53px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: bold;
    line-height: 1.25;
    margin-bottom: 12px;
`
const Description = styled.p`
    color: #8A8FB9;
    font-weight: 700;
    line-height: 1.5;
    margin-bottom: 12px;
`
const Button = styled.button`
    background: #FB2E86;
    color: white;
    border: none;
    outline: none;
    padding: 15px 44px;
    font-size: 17px;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    cursor: pointer;
`

export default Slider
