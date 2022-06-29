import React, { useState } from 'react';
import { signup, updateEmployee } from '../apicalls';
import { Form, Button, Container, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const UpdateProfileForm = (props) => {
    const {id, username,  firstName, lastName,middleName, age, dob} = props.employee;
    const [emailID, setemailID] = useState(username);
    const [fname, setfname] = useState(firstName);
    const [lname, setlname] = useState(lastName);
    const [mname, setmname] = useState(middleName);
    const [Dob, setdob] = useState(dob);
    const [Age, setage] = useState(age);
    const [error, seterror] = useState(null);
    const navigate = useNavigate()
    const updatecall = async ()=>{
      const userbody = {
        ...props.employee,
        "username":emailID,
        "firstName":fname,
        "lastName":lname,
        "age":Age,
        "middleName":mname,
        "dob":Dob,
      }
      const result = await updateEmployee(userbody,id);
      console.log(result);
      navigate("/")
    }
  return (
    <div className='h-100'>
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <Col xs={8} md={6}>
      {error && <Alert variant="danger">{error}</Alert>}
      <h3 className='text-center'>Update Profile</h3>
        <Form >
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={emailID} onChange={(e)=>setemailID(e.target.value)} required/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicFirstName" placeholder="">
            <Form.Label>First Name</Form.Label>
            <Form.Control type="text" placeholder="Enter First Name" value={fname} onChange={(e)=>setfname(e.target.value)} required/>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicMiddleName">
            <Form.Label>Middle Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Middle Name" value={mname} onChange={(e)=>setmname(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Last Name" value={lname} onChange={(e)=>setlname(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>

        
          

          <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="Enter Date of Birth" value={Dob} onChange={(e)=>setdob(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" value={Age} onChange={(e)=>setage(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button onClick={(e)=>{e.preventDefault(); updatecall()}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
    </div>
  )
}

export default UpdateProfileForm