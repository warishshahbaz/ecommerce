
import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from '../Responsive';


const Container = styled.div`
  background-color:#fcf5f5;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
`
const Title = styled.h1`
  font-size:70px;
  margin-bottom: 20px;
`
const Desc = styled.div`
  font-size:24px;
  font-weight:500;
  margin-bottom:20px;
  ${mobile({textAlign:"center"})}
`
const InputContainer = styled.div`
  width:50%;
  height:40px;
  background-color:white;
  display:flex;
  justify-content:center;
  border: 1px solid lightgrey;
  ${mobile({width:"80%"})}
`
const Input = styled.input`
  border:none;
  flex:8;
  padding: 5px;
 
  `
const Button = styled.button`
  flex:1;
  border:none;
  background-color:teal;
  color:white;
`


const NewsLetter = () => {
  return (
    <Container>
      <Title>Newletter</Title>
      <Desc>Get Timely update from favourite product.</Desc>
      <InputContainer>
        <Input placeholder='Your email'/>
        <Button>
          <SendIcon/>
        </Button>
      </InputContainer>
    </Container>
  )
}

export default NewsLetter