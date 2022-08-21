import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { mobile } from "../Responsive";
import {Formik,useFormik} from 'formik';
import * as Yup from 'yup';
import { useNavigate } from "react-router";
import { useGlobaleContext } from "./ContextApi";





const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://media.istockphoto.com/photos/register-picture-id185404583?b=1&k=20&m=185404583&s=170667a&w=0&h=E829QroPJarhgI_HDDBzFzux2j3fTFRFEnPy0D30ZkU=");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Wrapper = styled.div`
  width: 40%;
  background-color: white;
  padding: 20px;
  ${mobile({ width: "80%" })}
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;
const Form = styled.form`
  display: Flex;
  flex-wrap: wrap;
`;
const Input = styled.input`
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;
const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;
const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Register = () => {
  const {SetLoginToggle} = useGlobaleContext();
  const Navigate = useNavigate();
    const [regData,setRegData] = useState([]);
    const formik = useFormik({
        initialValues : {
            username:"",
            email:"",
            password:"",
            cpassword: ""
        },
        validationSchema : Yup.object({
            username:Yup.string()
            .required('*required')
            .min(3,'char length should be less than 15'),
            email:Yup.string()
            .email('invalid Email')
            .required('*required'),
            password: Yup.string()
        .required()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      cpassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
        }),
        onSubmit:(values) =>{
          setRegData((preval)=>{
            return [...preval,values]
          });
          SetLoginToggle(true);
           alert("CREATEED SUCCESSFULL")
            
            formik.initialValues = {
                username:"",
                email:"",
                password:"",
                cpassword: ""
            }
            setTimeout(()=>{
              Navigate('/');
            },1000);
            
        }
    })

    const fn = () => {
      Navigate('/');
    }
  
  useEffect(() => {
    sessionStorage.setItem("loginData", JSON.stringify(regData));
    
  }, [regData]);

 

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form onSubmit={formik.handleSubmit} id="myform">
          <Input
            placeholder="Username"
            name="username"
            onChange={formik.handleChange}
            value={formik.values.username}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && <p style={{ color: 'red' }}>{formik.errors.username}</p>}
          <Input 
          placeholder="email" 
          name="email" 
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email && <p style={{ color: 'red' }}>{formik.errors.email}</p>}

          <Input
          type="password"
            placeholder="password"
            name="password"
            onChange={formik.handleChange}
            value={formik.values.password}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password && <p style={{ color: 'red' }}>{formik.errors.password}</p>}

          <Input
           type="password"
            placeholder="Confirm Password"
            name="cpassword"
            onChange={formik.handleChange}
            value={formik.values.cpassword}
            onBlur={formik.handleBlur}
          />
          {formik.touched.cpassword && formik.errors.cpassword && <p style={{ color: 'red' }}>{formik.errors.cpassword}</p>}

          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in according with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
