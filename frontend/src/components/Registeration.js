import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import { useState } from 'react';
import { addApplicant } from '../Service/api';
import { Link } from 'react-router-dom';


const validate = Yup.object({
  firstName: Yup.string()
    
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .required('Required'),
  lastName: Yup.string()
   
    .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed")
    .required('Required'),
  
    email: Yup.string()
    
    .matches(/^[[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, "Only alphanumeric values are allowed" )
    .required('required'),
  
  

  
    }) 
const Registration = () =>{
  const [applicantData, setApplicantData] = useState({

    firstName:"",
    lastName:"",
    email:""
  })


  

  const handleChange = (e) =>{
    setApplicantData({...applicantData, [e.target.name]: [e.target.value]}     )
  }
  const { firstName, lastName, email} = applicantData;

  const addDetails = async (e) =>{
    e.preventDefault();
    await addApplicant(applicantData);   // very imp line for data transfer bw frontend to backend
  }
  




// const Registration = () => {
  
    
  
  return ( <>
    <Formik 
      initialValues={{
        
        firstName: '',
        lastName: '',
        email:'',
        
        
        
      }}
      validationSchema={validate}
      onSubmit={values => {
         console.log(values)
        
      }}
    >
      {formik => (
        
        
        <div className="container" style={{height:"auto", width:"70%", borderStyle:"solid", marginLeft:"200px", marginTop:"50px", borderRadius:"30px"}}>
          <div className="container" style={{width:"80%"}}>
          <h2 className="my-4 font-weight-bold .display-4" style={{fontFamily:"sans-serif", backgroundColor:"black", color:"white", borderRadius:"20px" }}>Register In Gaming Contest and Win a Free Card</h2></div>
          <Form onChange={(e) => handleChange(e)}>
            <TextField label="First Name" name="firstName" type="text"  />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="text" />

            <div style={{height:"20px"}}></div>
            
            {/* <label><h6 style={{marginRight:"770px"}}>Gender</h6></label> */}
            

         <div style={{marginBottom:"20px"}}>
            <button className="btn btn-dark mt-3" type="submit" onClick={(e) => addDetails(e)}>Register</button>
            <button className="btn btn-danger mt-3 ml-3" type="reset" style={{marginLeft:"20px"}}>Reset</button>
            </div>
          </Form>
        </div>
      )}
    </Formik>
     <br></br>
    <button type="button" class="btn btn-dark mt-3" ><Link to ="/applicantslist" style={{textDecoration:"none", color:"white"}}>Click here to see the list of applicants</Link></button>
    </>
  )
  
}
export default Registration;