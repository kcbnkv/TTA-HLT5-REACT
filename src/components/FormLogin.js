import React, {useState} from 'react';
import axios from 'axios';
// import './Form.css'
import { withRouter } from "react-router-dom";
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

const LoginForm = (props) => {
    const [state , setState] = useState({
        username : "",
        password : "",
        successMessage: null,
    })
    const handleChange = (e) => {
        const {name , value} = e.target   
        setState(prevState => ({
            ...prevState,
            [name] : value
        }))
    }
    const handleSubmitClick = (e) => {
        e.preventDefault();
        const payload={
            "username":state.username,
            "password":state.password,
        }
    }
    //     axios.post(API_BASE_URL+'/user/login', payload)
    //         .then(function (response) {
    //             if(response.status === 200){
    //                 setState(prevState => ({
    //                     ...prevState,
    //                     'successMessage' : 'Login successful. Redirecting to home page..'
    //                 }))
    //                 localStorage.setItem(ACCESS_TOKEN_NAME,response.data.token);
    //                 redirectToHome();
    //                 props.showError(null)
    //             }
    //             else if(response.code === 204){
    //                 props.showError("Username and password do not match");
    //             }
    //             else{
    //                 props.showError("Username does not exists");
    //             }
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         });
    // }
   

  return (
    <>
    <Container>
      <FormWrap>
        <Icon to='/'>kcbnkv</Icon>
        <FormContent>
          <Form>
          <FormH1>
          Log in to your account.
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
          <FormButton type='submit' onClick={handleSubmitClick} >
          Login
          </FormButton>
          <Text>Dont have an account? </Text>
          <TextH3 to='/signup'>Sign Up</TextH3> 
          </Form>
        </FormContent>
      </FormWrap>
    </Container>
    </>
  );
};

export default withRouter(LoginForm);