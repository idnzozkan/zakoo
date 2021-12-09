import React from 'react'
import styled from 'styled-components'
import { Facebook, Instagram, Twitter } from '@material-ui/icons'
import { xsmall } from '../responsive'

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Top>
                    <Left>
                        <Logo>Zakoo</Logo>
                        <Description>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus veniam, non excepturi sunt dolor facere quidem inventore tenetur in illo, iste laudantium pariatur hic est! Cum vitae sapiente nostrum eius.
                        </Description>
                        <ContactInfo>
                            17 Princess Road, London, Greater London NW1 8JR, UK
                        </ContactInfo>
                    </Left>
                    <Right>
                        <Categories>
                            <Title>Categories</Title>
                            <FooterLink>
                                Chairs
                            </FooterLink>
                            <FooterLink>
                                Headphones
                            </FooterLink>
                            <FooterLink>
                                Watches
                            </FooterLink>
                            <FooterLink>
                                Backpacks & Bags
                            </FooterLink>
                        </Categories>
                        <CustomerCare>
                            <Title>Customer Care</Title>
                            <FooterLink>
                                My Account
                            </FooterLink>
                            <FooterLink>
                                Discount
                            </FooterLink>
                            <FooterLink>
                                Returns
                            </FooterLink>
                            <FooterLink>
                                Orders History
                            </FooterLink>
                            <FooterLink>
                                Order Tracking
                            </FooterLink>
                        </CustomerCare>
                        <Pages>
                            <Title>Pages</Title>
                            <FooterLink>
                                Register
                            </FooterLink>
                            <FooterLink>
                                Login
                            </FooterLink>
                            <FooterLink>
                                Blog
                            </FooterLink>
                            <FooterLink>
                                About Us
                            </FooterLink>
                            <FooterLink>
                                Contact
                            </FooterLink>
                        </Pages>
                    </Right>
                </Top>
                <Bottom>
                    <Copyright>
                        © 2021 Zakoo by <a href="https://www.github.com/idnzozkan/react-ecommerce-app" target="_blank" rel="noreferrer"> Deniz Ozkan </a> - All Rights Reserved
                    </Copyright>
                    <SocialIcons>
                        <Icon>
                            <Facebook />
                        </Icon>
                        <Icon>
                            <Instagram />
                        </Icon>
                        <Icon>
                            <Twitter />
                        </Icon>
                    </SocialIcons>
                </Bottom>
            </Wrapper>
        </Container>
    )
}

const Container = styled.footer`
    height: 40vh;
`

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Top = styled.div`
    flex: 10;
    display: flex;
    padding: 94px 0;
    background: #EEEFFB;

    ${xsmall({ flexDirection: 'column', alignItems: 'center', padding: '50px 0 30px 0' })}
`

const Left = styled.div`
    flex: 1;
    padding-left: 370px;
    padding-right: 70px;

    ${xsmall({ padding: '0 20px', textAlign: 'center' })}
`

const Logo = styled.h2`
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 700;
    font-size: 38px;
`

const Description = styled.p`
    color: #8A8FB9;
    line-height: 1.5;
    margin-top: 10px;
    padding-right: 50px;

    ${xsmall({ padding: 0 })}
`

const ContactInfo = styled.p`
    color: #8A8FB9;
    line-height: 1.5;
    margin-top: 16px;
    padding-right: 50px;

    ${xsmall({ padding: 0 })}
`

const Right = styled.div`
    flex: 1;
    display: flex;
    padding-right: 370px;

    ${xsmall({ padding: '40px 20px 20px 20px' })}
`

const Categories = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column;
    margin-right: 20px;

    ${xsmall({ marginRight: '50px' })}
`

const CustomerCare = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column;
    margin-right: 20px;

    ${xsmall({ marginRight: '50px' })}
`

const Pages = styled.div`
    flex: 1;
    display: flex; 
    flex-direction: column;
`

const Title = styled.h4`
    font-family: 'Josefin Sans', sans-serif;
    font-size: 17px;
    line-height: 26px;
    color: #000;
    margin-bottom: 20px;
`

const FooterLink = styled.span`
    width: fit-content;
    cursor: pointer;
    color: #8A8FB9;
    font-size: 16px;
    margin-bottom: 20px;
`

const Bottom = styled.div`
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 650px 10px 470px;
    background: #E7E4F8;

    ${xsmall({ flexDirection: 'column', padding: '20px' })}
`

const Copyright = styled.p`
    color: #9DA0AE;
    font-size: 13px;
    
    a {
        text-decoration: none;
        color: #9DA0AE;
    }

    ${xsmall({ marginBottom: '20px' })}
`

const SocialIcons = styled.div`
    display: flex;
    align-items: center;
`

const Icon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    background: #151875;
    color: white;
    border-radius: 50%;
    padding: 10px;
    margin-left: 10px;
    cursor: pointer;

    svg {
        font-size: 14px;
    }
`

export default Footer
