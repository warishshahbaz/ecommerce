import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    height: 4vh;
    background-color: teal;
    color:white;
    display:flex;
    justify-content: center;
    align-items:center;
    font-size: 14px; 
    font-weight : bold;
`
const Announcement = () => {
  return (
    <Container>
        Super Deal Free Shipping On Order Over $15
    </Container>
  )
}

export default Announcement