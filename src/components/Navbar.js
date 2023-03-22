<<<<<<< HEAD
import React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { mobile } from "../Responsive";
import { useGlobaleContext } from "../pages/ContextApi";
import { useNavigate } from "react-router";

const Container = styled.div`
  height: 60px;
  positio: fixed;
  ${mobile({ height: "50px" })}
`;
const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media only screen and (max-width: 450px) {
   
  }
  ${mobile({ padding: "10px 0px" })}
`;
const Left = styled.div`
  flex: 1;
  display: flex;
  @media only screen and (max-width: 450px) {
    display: none;
    flex: 0;
  }
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;
const SearchContainer = styled.div`
  border: 0.5px solid lightgrey;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  width: 70%;
`;
const Input = styled.input`
  width: 100%;
  border: none;
  ${mobile({ width: "50px" })}
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;
const MeniItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  justify-content: flex-end;
  ${mobile({ marginLeft: "10px", fontSize: "12px" })}
`;
const Select = styled.select`
  padding: 4px;
  background-color: white;
  border: none;
`;
const Option = styled.option``;
const Navbar = ({ totalUniqueItems }) => {
  let navigate = useNavigate();
  const { loginToggle, SortValue } = useGlobaleContext();

  const loginHandle = () => {
    navigate("/");
  };

  const cartHandle = () => {
    navigate("/cart");
  };
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "grey", fontSize: 25 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>SOPSY.</Logo>
        </Center>
        <Right>
          <MeniItem>
            <Select>
              <Option disabled selected>
                SORT BY
              </Option>
              <Option onClick={() => SortValue("increase")}>LOW-HIGH</Option>
              <Option onClick={() => SortValue("decrease")}>HIGH-LOW</Option>
            </Select>
          </MeniItem>
          <MeniItem onClick={loginHandle}>
            {loginToggle ? "SIGN OUT" : " SIGN IN"}
          </MeniItem>

          <MeniItem>
            <Badge badgeContent={totalUniqueItems} color="primary">
              <ShoppingCartOutlinedIcon color="action" onClick={cartHandle} />
            </Badge>
          </MeniItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
=======
import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import {mobile} from '../Responsive';
import { useGlobaleContext } from '../pages/ContextApi';
import { useNavigate } from 'react-router';

const Container = styled.div`
    height: 60px;
    positio: fixed;
   ${mobile({height:"50px"})}
   

`
const Wrapper = styled.div`
 padding: 10px 20px;
 display:flex;
 align-items: center;
 justify-content:space-between;
 ${mobile({padding:"10px 0px"})}
`
const Left = styled.div`
    flex:1;
    display:flex;
`
const Language = styled.span`
    font-size: 14px;
    cursor: pointer;
    ${mobile({display:"none"})}
`
const SearchContainer = styled.div`
    border: 0.5px solid lightgrey;
    display:flex;
    align-items: center;
    margin-left: 25px;
    padding:5px;
    width:70%;
`
const Input = styled.input`
    width:100%;
    border: none;
    ${mobile({width:"50px"})}
`
const Center = styled.div`
    flex:1;
    text-align:center;
`
const Logo = styled.h1`
    font-weight: bold;
    ${mobile({fontSize:"24px"})}
`
const Right = styled.div`
    flex:1;
    display:flex;
    justify-content: flex-end;
    ${mobile({flex:2, justifyContent: "center"})}
`
const MeniItem = styled.div`
    font-size:14px;
    cursor:pointer;
    margin-left:25px;
    justify-content: flex-end;
    ${mobile({ marginLeft:"10px", fontSize:"12px"})}
`
const Select = styled.select`
    padding:4px;
    background-color:white;
    border:none;
`
const Option = styled.option`

`
const Navbar = ({totalUniqueItems}) => {
    let navigate = useNavigate()
    const {loginToggle,SortValue} = useGlobaleContext();

    const loginHandle = () =>{
        navigate('/')
    }

    const cartHandle =() =>{
        navigate('/cart');
    }
  return (
    <Container>
        <Wrapper>
        <Left>
        <Language>EN</Language>
        <SearchContainer>
            <Input placeholder='Search' />
            <SearchIcon style={{color:'grey', fontSize:25}}/>
        </SearchContainer>
        </Left>
        <Center><Logo>SOPSY.</Logo></Center>
        <Right>
        <MeniItem>
            <Select>
              <Option disabled selected>SORT BY</Option>
              <Option onClick={()=>SortValue("increase")} >LOW-HIGH</Option>
              <Option onClick={()=>SortValue("decrease")} >HIGH-LOW</Option>
            </Select>
        </MeniItem>
        <MeniItem onClick={loginHandle} >{ loginToggle ? "SIGN OUT" : " SIGN IN"}</MeniItem>
        
            <MeniItem>
                <Badge badgeContent={totalUniqueItems} color="primary">
                    <ShoppingCartOutlinedIcon color="action" onClick={cartHandle} />
                </Badge>
            </MeniItem>
        </Right>
       
        </Wrapper>
    </Container>
  )
}

export default Navbar
>>>>>>> d2429d258605749e3b92743f59bb7ad8ab345f71
