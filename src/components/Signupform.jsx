import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Signupform() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Signup Form</h2>
      <Formik
      initialValues={{name : "" , email : "" , pass : ""}}

      onSubmit={ async (values)=>{

        let name = values.name;
        let email = values.email;
        let password = values.pass;

        let result = await fetch("http://localhost:4444/student/signup" , {
          method : "POST",
          body : JSON.stringify( {name , email , password} ),
          headers : {
            "content-type" : "application/json"
          }
        })

        let data = await result.json();

        if(result.status === 200){
          alert(data.message)
          navigate("/login");
        } else {
          alert(data.reason)
        }
      }}
      >

        <Form>
            <label>Name:</label>
            <Field type="text" name="name" placeholder="Enter Name" required/>
            <br /> <br />

            <label>Email:</label>
            <Field type="email" name="email" placeholder="Enter Email" required/>
            <br /> <br />

            <label>Password:</label>
            <Field type="password" name="pass" placeholder="Enter password" required/>
            <br /> <br />

            <button type='submit'>Signup</button>
        </Form>
      </Formik>
    </>
  )
}

export default Signupform
