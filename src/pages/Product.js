import React from "react";
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsLetter from "../components/NewsLetter";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { mobile } from "../Responsive";
import { useGlobaleContext } from "./ContextApi";

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({padding:"10px",flexDirection:"column"})}
`;
const ImageContainer = styled.div`
  flex: 1;
`;
const Image = styled.img`
  width: 200px;
  height: 300px;
  ${'' /* object-fit: cover; */}
  ${mobile({height:"40vh",width:"60vw"})}

`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({padding:"10px"})}
`;
const Desc = styled.p`
  margin: 20px 0px;
`;
const Title = styled.h1`
  font-weight: 200;
  text-transform:capitalize;
`;
const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;
const FilterContainer = styled.div`
    width:50%;
    margin:30px 0px;
    display:flex;
    justify-content:space-between;
  ${mobile({width:"100%"})}

`
const Filter = styled.div`
    display:flex;
    align-items:center;
`
const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`
const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color: ${props=> props.color};
    margin: 0px 5px;
    cursor:pointer;
`
const FilterSize = styled.select`
    margin: 0px 7px;
    padding:4px;
`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
    width:50%;
    display:flex;
    align-items:center;
    justify-content:space-between;
  ${mobile({width:"100%"})}

`
const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
`
const Amount = styled.span`
    width:30px;
    height:30px;
    border: 1px solid teal;
    border-radius:10px;
    display:Flex;
    justify-content:center;
    align-items:center;
    margin:0px 7px;
`
const Button = styled.button`
    padding:15px;
    border:2px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;

    &:hover{
        background-color: #f8f4f4;
    }
`



const Product = () => {
  const {productItem} = useGlobaleContext();
  console.log(productItem);

  return (
    <Container>
      <Navbar />
      <Announcement />
      {
        productItem && productItem.map((x)=> {
        return  <Wrapper>
        <ImageContainer>
          <Image src={x && x.image}/>
        </ImageContainer>
        <InfoContainer>
          <Title>{x.title}</Title>
          <Desc>
           {x && x.description}
          </Desc>
          <Price>${x.price}</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="grey" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>Xl</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>

          <AddContainer>
            <AmountContainer>
                <RemoveIcon/>
                <Amount>1</Amount>
                <AddIcon/>
            </AmountContainer>
            <Button>Add To Cart</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
        })
      }
      
      <NewsLetter />
      <Footer />
    </Container>
  );
};

export default Product;
