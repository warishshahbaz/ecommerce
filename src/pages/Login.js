import React from 'react'
import { useState,useEffect } from 'react'
import styled from 'styled-components'
import { mobile } from '../Responsive'
import { Navigate, useNavigate } from 'react-router'
import {  NavLink } from 'react-router-dom'
import { useGlobaleContext } from './ContextApi'


const Container = styled.div`
    width:100%;
    height:100vh;
    background: linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)),
     url('https://media.istockphoto.com/photos/portrait-smile-beautiful-business-asian-woman-in-pink-suit-working-in-picture-id1318459282') ;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; 
    display:flex;
    justify-content:center;
    align-items:center;

   
`
const Wrapper = styled.div`
    width:40%;
    background-color:white;
    padding:20px;
    ${mobile({width:"80%"})}
`
const Title = styled.h1`
    font-size:24px; 
    font-weight:300;

`
const Form = styled.form`
    display:Flex;
    flex-direction:column;

`
const Input = styled.input`
    min-width:40%;
    margin:10px 0px;
    padding:10px;
   
`

const Button = styled.button`
    width:40%;
    border:none;
    padding:15px 20px;
    background-color:teal;
    color:white;
    cursor:pointer;
    margin-bottom:10px;
`
const Links = styled.a`
  margin:5px 0px;
  font-sze:12px;
  text-decoration:underline;
  cursor:pointer;
`

const getLocalData = () =>{
    let list = sessionStorage.getItem("loginData");
    if(list){
        return JSON.parse(sessionStorage.getItem("loginData"));
    }else{
        return [];
    }
}
const Login = () => {
    const {SetLoginToggle} = useGlobaleContext();
    const Navigate = useNavigate();
    const [loginInput,setLoginInput] = useState({
        username:"",
        password:""
    });
    const [loginData,setLoginData] = useState(getLocalData());

    const inputHandle = (e) => {
        let name = e.target.name;
        let value = e.target.value
        setLoginInput((preval)=>{
            return {
                ...preval,
                [name] : value,
            }
        })
    }
    console.log(loginInput);


    //Authentication
    const loginHandle = (e) =>{
        e.preventDefault();
       let log_record = new Array();
       log_record = JSON.parse(sessionStorage.getItem("loginData"))
        ? JSON.parse(sessionStorage.getItem("loginData"))
        : [];
        if(log_record.some((v)=> {
            return v.username == loginInput.username || v.email == loginInput.username || v.password == loginInput.password })){
                alert("Login Successfull")
                 Navigate('/home')
                 SetLoginToggle(true);
            }else{
                alert("Login Fail, Please Create Account")
            }

        setLoginInput(
            {
                username:"",
                password:""
            }
        )
       
    }
    useEffect(() => {
        sessionStorage.setItem("loginData", JSON.stringify(loginData))
    }, [loginData]);
    

  return (
    <Container>
         <Wrapper>
            <Title>SIGN IN</Title>
            <Form  onSubmit={loginHandle}>
                <Input type="text" placeholder="Username" autocomplete="off" name='username' value={loginInput.username}  onChange={inputHandle} />
                <Input type="password" placeholder="Password"  autocomplete="off" name='password' value={loginInput.password}  onChange={inputHandle} />
                <Button  >LogIn</Button>
                <Links>DO NOT REMEMBER THE PASSWORD?</Links>
                <Links > <NavLink to={'/register'} >CREATE NEW ACCOUNT</NavLink> </Links>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login