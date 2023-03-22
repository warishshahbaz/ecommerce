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
  
<<<<<<< HEAD
=======
  // console.log(data);
>>>>>>> d2429d258605749e3b92743f59bb7ad8ab345f71
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