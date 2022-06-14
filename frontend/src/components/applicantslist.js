import React from 'react'
import { getApplicant, deleteApplicant } from '../Service/api';
import { useEffect, useState } from 'react';
import { Modal } from "react-bootstrap";
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import Button from "react";


const Applicantslist= () => {

  const[ applicantsData, setApplicantsData] = useState([]);
  

  useEffect(() => {
   applicantsDetails();
  }, []);

const applicantsDetails = async () => {
  const result = await getApplicant();
  setApplicantsData(result.data);
}

const deletedetails =  (id) =>{
     if (window.confirm("Press OK to delete")) {
        console.log("Request to delete"); }
    deleteApplicant(id);

   
 }


 const handleUpdate=()=>{
  <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Update Information</Modal.Title>
  </Modal.Header>

  <Modal.Body>
  
  <Form onChange={(e) => handleUpdate(e)}>
            <TextField label="First Name" name="firstName" type="text"  />
            <TextField label="Last Name" name="lastName" type="text" />
            <TextField label="Email" name="email" type="text" />
            </Form>
  </Modal.Body>

  <Modal.Footer>
    <Button variant="secondary">Close</Button>
    <Button variant="primary">Save changes</Button>
  </Modal.Footer>
</Modal.Dialog>
  
  }

  return (
    <div style={{height:"auto", width:"100%"}}>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First Name</th>
      <th scope="col">Last Name</th>
      <th scope="col">Email</th>
      <th scope="col">Update</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {applicantsData.map((details) =>(

    
    <tr>
      <th scope="row">*</th>
      <td>{details.firstName}</td>
      <td>{details.lastName}</td>
      <td>{details.email}</td>
      <td><button type="button" class="btn btn-dark mt-3" onClick={(e) => handleUpdate(e)}>Update</button></td>
      <td><button type="button" class="btn btn-danger mt-3" onClick={(e) => deletedetails(details.id)}>Delete</button></td>
    </tr>
    ))}
  </tbody>
  </table>
    </div>
  )
 
}
export default Applicantslist;
