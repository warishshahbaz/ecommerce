import React from 'react'
import styled from 'styled-components'
import CategorieItem from './CategorieItem'
import { mobile } from '../Responsive'
import { useGlobaleContext } from '../pages/ContextApi'

const Container = styled.div`
width:100%;
height:15vh;
    display:flex;
    padding:20px;
    justify-content:space-between;
    text-align:center;
    flex-direction:column;
    ${mobile({padding:"0px",flexDirection:"column"})}
`
const CategorieContainer = styled.div`
width:100%;
height:4vh;
display:flex;
justify-content:space-around;
`
const CategoriItem = styled.span`
  border-bottom:1px solid grey;
  padding-bottom:5px;
  cursor:pointer;
`
const CategoryHeader = styled.h3`
  margin-bottom:25px;
`

const Categories = () => {
  const {data,FilterCategoris} = useGlobaleContext();
  

  return (
    <Container>
    <CategoryHeader>CATEGORY ITEM</CategoryHeader>
        <CategorieContainer>
        <CategoriItem onClick={()=>FilterCategoris("all")}>ALL</CategoriItem>
          <CategoriItem onClick={()=>FilterCategoris("men")}>MEN</CategoriItem>
          <CategoriItem onClick={()=>FilterCategoris("women")} >WOMEN</CategoriItem>
          <CategoriItem onClick={()=>FilterCategoris("electronic")} >ELECTRONICS</CategoriItem>
          <CategoriItem onClick={()=>FilterCategoris("jewellory")} >JEWELLORY</CategoriItem>
        </CategorieContainer>
    </Container>
  )
}

export default Categories