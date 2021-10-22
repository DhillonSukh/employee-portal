import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import {  useHistory } from 'react-router';
import {storeContext} from '../store/Context';
import {Employee} from '../store/Employee';

const RegisterEmployee : React.FC = () =>{
  type error ={
    value:string,
    show:boolean
  }
  const store = React.useContext(storeContext);
  const history = useHistory();
    const [formErrors,setErrors] = useState({value:"",show:false});
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [address,setAddress] = useState("");
    const [contact,setContact] = useState("");
    const [department,setDepartment] = useState("");

  const addEmployee = (event:any) =>{
    event.preventDefault();
    var errors = validateForm();
    setErrors(errors);
    if(errors.show){
      return;
    }
    const id:string = Math.random()+'';
      const Employee : Employee ={
        id:id,
        name:name,
        address:address,
        email:email,
        department:department,
        contact:contact
      }
      if(store == null)
      {
        throw Error("Store shouldn't be null");
      }
      store.addEmployee(Employee);
      setName("");
      setEmail("");
      setAddress("");
      setContact("");
      setDepartment("");
      history.push("/employee-list");
  }


  const checkIfNullOrUndefined = (value:string) : boolean =>{
    if(value === undefined || value === null || value.length === 0){
      return true;
    }
    return false;
  }

  const validateForm = () : error =>{
      var errors:error ={value:"",show:false};
      if(checkIfNullOrUndefined(name)){
        errors.value ="Please provide a valid name";
        errors.show=true;
      }
      return errors;
  }


  const onNameChange = (value:string) =>{
    setName(value);
    if(!checkIfNullOrUndefined(name) && name.length>0){
      setErrors({
        value:"",
        show:false
      });
    }
  }

  return (
  <div className="grid cardDimensions">
      <h1>Register New employees here...</h1>
      <Form onSubmit={addEmployee}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" 
            value={name} 
            onChange={(e) => onNameChange(e.target.value)} isInvalid={ formErrors.show}/>
            <Form.Control.Feedback type='invalid'>
              { formErrors.value }
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter Email"
           value={email}
           onChange={(e) => setEmail(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Address">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Enter address" value={address} onChange={(e) => setAddress(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="number">
          <Form.Label>Contact Number</Form.Label>
          <Form.Control type="text" placeholder="Enter contact number" value={contact} onChange={(e) => setContact(e.target.value)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="Department">
          <Form.Label>Department</Form.Label>
          <Form.Control type="text" placeholder="Enter department"  value={department} onChange={(e) => setDepartment(e.target.value)}/>
        </Form.Group>
        <Button variant="primary" type="submit">Add Employee</Button>
      </Form>
  </div>);
}

export default RegisterEmployee;