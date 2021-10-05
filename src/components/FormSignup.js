import React, { useState } from 'react';
import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text,
  TextH3
} from './FormElements';
import axios from 'axios';
import { withRouter } from "react-router-dom";

const FormSignup = (props) => {
  const [state , setState] = useState({
      email : "",
      password : "",
      password2: "",
      successMessage: null,
    })
    const handleChange = (e) => {
      const {name , value} = e.target   
      setState(prevState => ({
          ...prevState,
          [name] : value
      }))
  }
//   const sendDetailsToServer = () => {
//     if(state.email.length && state.password.length) {
//         props.showError(null);
//         const payload={
//             "email":state.email,
//             "password":state.password,
//         }
//         axios.post(API_BASE_URL+'/user/register', payload)
//                 .then(function (response) {
//                     if(response.status === 200){
//                         setState(prevState => ({
//                             ...prevState,
//                             'successMessage' : 'Registration successful. Redirecting to home page..'
//                         }))
//                         localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
//                         redirectToHome();
//                         props.showError(null)
//                     } else{
//                         props.showError("Some error ocurred");
//                     }
//                 })
//                 .catch(function (error) {
//                     console.log(error);
//                 });    
//         } else {
//             props.showError('Please enter valid email and password')    
//         }
        
//     }
   
    const handleSubmitClick = (e) => {
        e.preventDefault();
        // if(state.password === state.password2) {
        //     sendDetailsToServer()    
        // } else {
        //     props.showError('Passwords do not match');
        // }
  };

  return (
    <>
    <Container>
      <FormWrap>
        <Icon to='/'>kcbnkv</Icon>
        <FormContent>
          <Form>
          <FormH1>
          Get started with us today! Create your account by filling out the
          information below.
          </FormH1>
          <FormLabel htmlFor='for'>Email</FormLabel>
          <FormInput 
            className='form-input'
            type='email'
            name='email'
            placeholder='Enter your email'
            value={state.email}
            onChange={handleChange}
            required
          />
          <FormLabel htmlFor='for'>Password</FormLabel>
          <FormInput 
            className='form-input'
            type='password'
            name='password'
            placeholder='Enter your password'
            value={state.password}
            onChange={handleChange}
            required
          />
          <FormLabel htmlFor='for'>Confirm Password</FormLabel>
          <FormInput 
            className='form-input'
            type='password'
            name='password2'
            placeholder='Confirm your password'
            value={state.password2}
            onChange={handleChange}
            required
          />
          <FormButton type='submit' onClick={handleSubmitClick}>
          Sign up
          </FormButton>
          <Text>Already have an account? </Text>
          <TextH3 to='/login'>Login here</TextH3> 
        </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </>
  );
};

export default withRouter(FormSignup);