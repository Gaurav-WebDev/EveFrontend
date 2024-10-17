import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom';

function Loginform() {
    const navigate = useNavigate();
  return (
    <>
    <h2>Login Form</h2>
      <Formik
      initialValues={{email : "" , pass : ""}}

      onSubmit={async (values)=>{
        let email = values.email;
        let password = values.pass;

        let result = await fetch("http://localhost:4444/student/login" , {
            method : "POST",
            body : JSON.stringify({email , password}),
            headers : {
                "content-type" : "application/json"
            }
        })

        let fetchedData = await result.json();

        if(result.status == 200){
            alert(fetchedData.message);
            navigate("/");
            localStorage.setItem("user" , JSON.stringify(fetchedData.data))
        } else {
            alert(data.reason)
        }
      }}
      >
      <Form>
            <label>Email:</label>
            <Field type="email" name="email" placeholder="Enter Email" required/>
            <br /> <br />

            <label>Password:</label>
            <Field type="password" name="pass" placeholder="Enter password" required/>
            <br /> <br />

            <button type='submit'>Login</button>
        </Form>
      </Formik>
    </>
  )
}

export default Loginform
