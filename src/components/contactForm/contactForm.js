import React from "react"
import styled from "styled-components"
import { Formik, Field } from "formik"
import * as colors from "../../assets/styles/variables"
import axios from 'axios';

const ContactFormWrapper = styled.div`

`

const Form = styled.form`
width: 60%;
margin: 10rem auto;

@media(max-width: 700px){
width: 80%;
}

@media(max-width: 600px){
width: 100%;
}

`

const Input = styled.input`
display: block;
width: 80%;
padding: 1rem;

outline: none;
border: 3px solid ${colors.darkGray};

@media(max-width: 350px){
width: 100%;
}
`

const TextArea = styled(Field)`
display: block;
width: 100%;
border: 3px solid ${colors.darkGray};
outline: none;
`

const Label = styled.label`
font-weight: 700;
font-size: 1.8rem;

`

const Error = styled.p`
height: 2rem;
margin-top: 0;
margin-bottom: .5rem;
font-size: 1.4rem;
color: ${colors.errorRed};
`

const Button = styled.button`
border: none;
background-color: ${colors.lightGray2};
padding: 1rem 2rem;
font-weight: 700;
position: relative;
transition: all .3s;
margin-left: .8rem;
margin-top: 2rem;
outline: ${colors.darkGray};

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

const textArea = ({field, formik, ...props}) => {
  return <textarea {...field} {...props}></textarea>
}


const ContactForm = () => (
  <ContactFormWrapper>
    <Formik
      initialValues={{ email: "", name: "", message: ""}}
      validate={values => {
        const errors = {}
        if (!values.email) {
          errors.email = "E-mail jest wymagany"
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Nieprawidłowy adres email"
        }
        if(!values.name){
          errors.name = "Imię i nazwisko są wymagane"
        }
        if(!values.message){
          errors.message = "Wiadomość jest wymagana"
        }
        return errors
      }}
      onSubmit={(values, { setSubmitting }) => {
        axios.post('https://us-central1-totylkoopinie-8bfa5.cloudfunctions.net/sendEmail', values)
          .then((res)=>{
            console.log(res);
            setSubmitting(false);
          })
          .catch((err)=>{
            console.log(err);
            setSubmitting(false);
          })
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
            type="name"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
          />
          <Error>
            {errors.name && touched.name && errors.name}
          </Error>
          <Label>E-mail</Label>
          <Input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          <Error>
            {errors.email && touched.email && errors.email}
          </Error>
          <Label>Wiadomość</Label>
          <TextArea name="message" placeholder="" component={textArea} rows="7"></TextArea>
          <Error>
            {errors.message && touched.message && errors.message}
          </Error>
          <Button type="submit" disabled={isSubmitting}>
            Wyślij
          </Button>
        </Form>
      )}
    </Formik>
  </ContactFormWrapper>
)

export default ContactForm
