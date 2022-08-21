import React from 'react'
import styled from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import MailIcon from '@mui/icons-material/Mail';
import { mobile } from '../Responsive';

const Container = styled.div`
    display:flex;
    ${mobile({flexDirection:"column"})}
`
const Left = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    padding:20px;
`
const Logo = styled.h1``
const Desc = styled.p`
    margin:20px 0px;

`
const SocialContainer = styled.div`
    display:flex;
    align-items:flex-end;
    justify-content:flex-start;
`
const SocialIcon = styled.div`
    width:40px;
    height:40px;
    border-radius: 50%;
    color: white;
    background-color: #${props => props.color} ;
    display:flex;
    align-items:center;
    justify-content:center;
    margin-left:20px;
   
`


const Center = styled.div`
    flex:1;
    padding:20px;
    ${mobile({display:"none"})}
`
const Right = styled.div`
    flex:1;
    padding:20px;
    ${mobile({backgroundColor:"grey", marginTop:"10px"})}


`
const Title = styled.h3`
    margin-bootom:30px;
`
const List = styled.ul`
    margin:0px;
    padding:0px;
    list-style:none;
    flex-wrap:wrap;
`
const ListItem = styled.li`
    width:50%;
    margin-bottom:10px;
`
const ContactItem = styled.div`
    margin-bottom:20px;
    display:flex;
    align-items:center;
`
const Payment = styled.img`
    width:50%;
`

const Footer = () => {
  return (
    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Desc>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint reiciendis repellat aut commodi laborum corrupti ipsa quod dolores perferendis quis!</Desc>
        </Left>
        <SocialContainer>
            <SocialIcon color="385999" >
                <FacebookOutlinedIcon/>  
            </SocialIcon>
            <SocialIcon color="E4405F" >
                <TwitterIcon/>
            </SocialIcon>
            <SocialIcon color="55ACEE" >
                <InstagramIcon/>
                
            </SocialIcon>
            <SocialIcon color="E60023">
                <PinterestIcon/>
            </SocialIcon>
        </SocialContainer>
        <Center>
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Man</ListItem>
                <ListItem>Woman</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>My Account</ListItem>
                <ListItem>Order Tracking</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Teams</ListItem>


            </List>
        </Center>
        <Right>
            <Title>Contact</Title>
            <ContactItem>
               <LocationOnIcon style={{marginRight:"10px"}}/> 622 Dixie Path , Switch Tobinchester 98336
            </ContactItem>
            <ContactItem>
               <PhoneIcon style={{marginRight:"10px"}}/> +1 234 56 78
            </ContactItem>
            <ContactItem>
               <MailIcon style={{marginRight:"10px"}}/> contack@lama.dev
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer