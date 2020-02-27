import React from 'react';
import styled from 'styled-components';
import {Formik} from 'formik';
import * as colors from '../../assets/styles/variables';

const ContactFormWrapper = styled.div`

`;

const Form = styled.form`
width: 60%;
margin: 10rem auto;
`;

const Input = styled.input`
display: block;
width: 80%;
padding: 1rem;
margin-bottom: 2rem;
outline: none;
border: 3px solid ${colors.darkGray};
`;

const TextArea = styled.textarea`
display: block;
margin-bottom: 2rem;
width: 100%;
border: 3px solid ${colors.darkGray};
outline: none;
`;

const Label = styled.label`
font-weight: 700;
font-size: 1.8rem;

`;

const Button = styled.button`
border: none;
background-color: ${colors.lightGray2};
padding: 1rem 1.8rem;
font-weight: 700;
position: relative;
transition: all .3s;
margin-left: .8rem;

&::before{
content: '';
display: block;
position: absolute;
top: -.8rem;
left: -.8rem;
width: 2rem;
height: 2rem;
border-top: 3px solid ${colors.darkGray};
border-left: 3px solid ${colors.darkGray};
transition: all .3s;
}

&::after{
content: '';
display: block;
position: absolute;
bottom: -.8rem;
right: -.8rem;
width: 2rem;
height: 2rem;
border-bottom: 3px solid ${colors.darkGray};
border-right: 3px solid ${colors.darkGray};
transition: all .3s;
}

&:hover{
background-color: ${colors.white};
color: ${colors.darkGray};
}

&:hover:before,
&:hover:after{
width: 100%;
height: 100%;
}


`;



const ContactForm = () => (
  <ContactFormWrapper>
    <Formik
      initialValues={{ email: '', password: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
        <Form onSubmit={handleSubmit}>
          <Label>Imię i nazwisko</Label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <Label>E-mail</Label>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
          />
          {errors.password && touched.password && errors.password}
          <Label>Wiadomość</Label>
          <TextArea rows="7"></TextArea>
          <Button type="submit" disabled={isSubmitting}>
            Wyślij
          </Button>
        </Form>
      )}
    </Formik>
  </ContactFormWrapper>
);

export default ContactForm;
