import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { useNavigate } from 'react-router';
import { useGlobaleContext } from '../pages/ContextApi';
import { useCart } from 'react-use-cart';

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position: absolute;
    top:0px;
    left:0px;
    z-index:3;
    display:flex;
    justify-content:center;
    align-items:center;
    background-color: rgba(0,0,0,0.2);
    transition: all 0.5s ease;
    cursor:pointer;
    border-radius:6px;
`
const Container = styled.div`
    flex:1;
    margin:7px;
    min-width:280px;
    height:350px;
    display:flex;
    justify-content:center;
    ${'' /* align-items:center; */}
    background-color: #f5fbfd;
    position:relative;
   
    
    &:hover ${Info}{
        opacity:1;
    }
`
const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background-color:white;
    position:absolute;
`
const Image = styled.img`
width:200px;
    height:200px;
    z-index:2;
`
const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    margin:5px;
    transition: all 0.5s ease;

    &:hover{
        background-color: #e9f5f5;
        transform: scale(1.1);
    }
`
const PriceContainer = styled.div`
    width:100%;
    position:absolute;
    bottom:20px;
    display:flex;
    justify-content:space-evenly;
`
const Price = styled.span`
    font-size:20px;
    font-weight:600;
`
const Rate = styled.span`
    color:grey;
`
const Desc = styled.div`
width:80%;
    position:absolute;
    bottom:50px;
`
const Title = styled.p`
    font-size:17px;
`

const Produt = ({arr,data,key}) => {
   const navigate = useNavigate();
   const {moveToProduct} = useGlobaleContext();
    const {addItem} = useCart();
   
    // console.log(data);
  return (
    <Container  >
        {/* <Circle/> */}
        <Image src={data.image}/>
        <Info>
            <Icon>
                <ShoppingCartOutlinedIcon onClick={()=> addItem(data)}/>
            </Icon>
            <Icon>
                <SearchOutlinedIcon onClick={() => moveToProduct(data.id)}/>
            </Icon>
            <Icon>
                <FavoriteBorderOutlinedIcon  />
            </Icon>
        </Info>
        <Desc>
            <Title>{data.title}</Title>
        </Desc>
        <PriceContainer>
            <Price>Price: ${data.price}</Price>
            <Rate>Rate: {data.rating.rate} <StarBorderIcon/></Rate>
        </PriceContainer>
    </Container>
  )
}

export default Produt