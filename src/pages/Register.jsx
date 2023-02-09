import axios from "axios";
import { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/ZzDG8Jt/register2.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
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
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    phoneNo: "",
  });

  const handleInput = (e) => {
    console.log(e.target.value);
    setUser({ ...user, [e.target.name]: e.target.value });
  }
  const handleClick = (e) => {
    e.preventDefault();
    axios.post("http://localhost:5000/v1/api/user/register", user)
    .then((res) => {
      toast(
        'User created successfully',
      )
      window.location.href = "/"
    })
    .catch((err) => {
      toast(
        'Please enter the fields properly',
      )
    })  

  }

  return (
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="Name" name="name" onChange={handleInput}/>
          <Input placeholder="Email" name="email" onChange={handleInput}/>
          <Input placeholder="Phone No" name="phoneNo" onChange={handleInput}/>
          <Input placeholder="Password" name="password" onChange={handleInput} />
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button onClick={handleClick}>CREATE</Button>
          <ToastContainer />
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Register;
