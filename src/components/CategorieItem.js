import React from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { categories } from '../Data'


const Container = styled.div`
    flex:1;
    margin:3px;
    height:30vh;
    position:relative;
`
const Image = styled.img`
    width:100%;
    height:100%;
    object-fit:cover;
    ${mobile({height:"30vh"})}
`
const Title = styled.h1`
    color:black;
    margin-bottom: 20px;
`
const Info = styled.div`
    position:absolute;
    top:0px;
    left:0px;
    width:100%;
    height:100%;
    display:flex;
    justify-content:center;
    align-items:center;
    flex-direction:column;
`
const Button = styled.button`
    border:none;
    padding:10px;
    background-color:white;
    color:grey;
    cursor:pointer;
    font-weight:600;
`


const CategorieItem = ({men}) => {
//    console.log(data);
  return (
    <Container>
        
        <Image />
        
        <Info>
            <Title></Title>
            <Button>{men}</Button>
        </Info>
    </Container>
  )
}

export default CategorieItem