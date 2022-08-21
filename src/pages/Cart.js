import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Footer from '../components/Footer'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { mobile } from '../Responsive'
import { useCart } from 'react-use-cart'
import { useGlobaleContext } from './ContextApi'
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import { useNavigate } from 'react-router'

const Container = styled.div``
const Wrapper = styled.div`
    padding:20px;
    ₹{mobile({display:"flex",padding:"10px",flexDirection:"column"})}
`
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`
const Top = styled.div`

    display:flex;
    justify-content:space-between;
    align-items:Center;
    padding:20px;
    ${mobile({padding:"10px",marginRight:"3px"})}
`
const TopButton = styled.button`
    padding:20px;
    font-weight:600;
    cursor:pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color:${props => props.type === "filled" && "white"};
    ${mobile({padding:"10px",marginLeft:"3px"})}

`
const TopTexts = styled.div`
    ${mobile({display:"none"})}
`
const TopText = styled.span`
    text-decoration:underline;
    cursor:pointer;
    margin:0px 10px;
`

const Bottom = styled.div`

    display:flex;
    justify-content:space-between;
    ${mobile({flexDirection:"column"})}
`
const Info = styled.div`
    fle:3;
`
const Summary = styled.div`
    flex:1;
    border:0.5px solid lightgrey;
    border-radius:10px;
    padding:20px;
    height:50vh;
    
`
const SummaryTitle = styled.h1`
    font-weight:300;
`
const SummaryItem = styled.div`
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
    font-weight:${props => props.type === "total" && "500"};
    font-size:${props => props.type === "total" && "24px"};

`
const SummaryItemText = styled.span``
const SummaryItemPrice = styled.span``
const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    font-weight:400;
`

const Product = styled.div`
    display:flex;
    justify-content:space-between;
    margin-bottom:7px;
    ${mobile({flexDirection:"column"})}
   
`
const ProductDetail = styled.div`
    flex:2;
    display:flex;

`
const Details =styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    justify-content:space-around;
`
const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
`
const ProductID = styled.span``
const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props => props.color }
`
const Image = styled.img`
    width:200px;
    height:200px;
    ${'' /* ${mobile({width:"50px",height:"50px"})} */}
`
const ProductName = styled.span`
    
`

const ProductSize = styled.span``

const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`
const ProductAmount = styled.div`
    font-size:24px;
    margin:5px;
    display:flex;
    align-items:center;
    justify-content:center;
    ${mobile({margin:"10px 25px",backgroundColor:"grey",width:"40px",height:"40px",padding:"10px",borderRadius:"50%"})}
`
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:300;
    ${mobile({marginBottom:"20px"})}

`
const Hr = styled.hr`
    background-color:#eee;
    border:none;
    height:1px;
`




const Cart = () => {
    const navigate = useNavigate()
    const {data} = useGlobaleContext();
    const {
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart,
      } = useCart();
    //   console.log(items);
    const BackToHome = () =>{
        navigate('/home');
    }
     
    return (
    <Container>
    <Navbar totalUniqueItems={totalUniqueItems}  />
    <Announcement/>
   
    <Wrapper>
        <HomeOutlinedIcon onClick={BackToHome} />
        <Title> {isEmpty ? "YOUR CART IS EMPTY" : "YOUR BAG"}</Title>
        <Top>
            <TopButton onClick={BackToHome} >CONTINUE SHOPPING</TopButton>
                <TopTexts>
                    <TopText>SHOPPING ({totalUniqueItems})</TopText>
                    <TopText >YOUR WISHLIST(0)</TopText>
                </TopTexts>
            <TopButton type="filled" onClick={ emptyCart} > CLEAR CART</TopButton>
        </Top>
        <Bottom>
            <Info>
            {
        items.map((item,id)=> {
            return  <Product key={id}>
                    <ProductDetail>
                        <Image src={item.image}/>
                        <CancelOutlinedIcon onClick={()=> removeItem(item.id)}/>
                        <Details>
                            <ProductName><b>Product:</b> {item.title} </ProductName>
                            <ProductID> <b>ID:</b> {item.id} </ProductID>
                            <ProductColor color="grey"/>
                            <ProductSize><b>SIZE:</b> 44</ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <AddIcon
                                onClick = {()=> updateItemQuantity(item.id , item.quantity + 1) }
                            />
                            <ProductAmount>{item.quantity}</ProductAmount>
                            <RemoveIcon
                                onClick = {()=> updateItemQuantity(item.id , item.quantity - 1) }
                            />
                        </ProductAmountContainer>
                        <ProductPrice>₹ {item.price}</ProductPrice>
                    </PriceDetail>
                </Product>
        })
    }
                <Hr/>

               
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                    <SummaryItemText>SubTotal:</SummaryItemText>
                    <SummaryItemPrice>₹ {(cartTotal).toFixed(2)}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Estimated Shipping:</SummaryItemText>
                    <SummaryItemPrice>₹ 3.5</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                    <SummaryItemText>Shipping Discount:</SummaryItemText>
                    <SummaryItemPrice> ₹ -3.43</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem type="total">
                    <SummaryItemText >Total:</SummaryItemText>
                    <SummaryItemPrice>₹{(cartTotal + totalUniqueItems*3.5).toFixed(2) }</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
    </Wrapper>
    
    <Footer/>

    </Container>
  )
}

export default Cart