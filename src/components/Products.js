import React from 'react'
import styled from 'styled-components'
import {popularProducts} from '../Data'
import Produt from './Produt'
import { useGlobaleContext } from '../pages/ContextApi';


const Container = styled.div`
    padding:20px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
`


const Products = () => {
  const {data} = useGlobaleContext();
  
  return (
    <Container>
        {
            data.map((item,idx,arr)=> (
                <Produt data = {item} key={idx} arr ={arr} />
            ))
        }
    </Container>
  )
}

export default Products