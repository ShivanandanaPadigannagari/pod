import React, { useState } from 'react';
import { signup } from '../apicalls';
import { Form, Button, Container, Col, InputGroup, Alert, Row } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router';

const SignupForm = () => {
    const [emailID, setemailID] = useState("");
    const [fname, setfname] = useState("");
    const [lname, setlname] = useState("");
    const [mname, setmname] = useState("");
    const [dob, setdob] = useState("");
    const [age, setage] = useState();
    const [password, setpassword] = useState("");
    const [showpassword, setshowpassword] = useState(false);
    const [error, seterror] = useState(null);
    const [success, setsuccess] = useState(false);
    const navigate = useNavigate()
    const signupcall = async ()=>{
      console.log("signupcall")
      const userbody = {
        "username":emailID,
        "password":password,
        "firstName":fname,
        "lastName":lname,
        "age":age,
        "middleName":mname,
        "dob":dob,
      }
      const result = await signup(userbody);
      if(Object.keys(result).length > 1) {
        setsuccess(true)
        navigate("/login")
      }

    }
  return (
    <div className='h-100'>
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <Col xs={8} md={6}>
      {success && <Alert variant="success">Registered Successfully</Alert>}
      {error && <Alert variant="danger">{error}</Alert>}

      <h3 className='text-center'>Register</h3>
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

        
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <InputGroup className="mb-3">
              <Form.Control type={showpassword ? "text" : "password"} placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)} />
              <Button variant="outline-secondary"><i onClick={()=>setshowpassword(!showpassword)} className={`fas ${!showpassword ? "fa-eye-slash" : "fa-eye" }`}/></Button>
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDateOfBirth">
            <Form.Label>Date of Birth</Form.Label>
            <Form.Control type="date" placeholder="Enter Date of Birth" value={dob} onChange={(e)=>setdob(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicAge">
            <Form.Label>Age</Form.Label>
            <Form.Control type="number" placeholder="Enter Age" value={age} onChange={(e)=>setage(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Row>
          <Col md={6} >
          <Button onClick={(e)=>{e.preventDefault();signupcall()}} variant="primary" type="submit">
            Submit
          </Button>
          </Col>
          <Col md={6} >
          Already Registred : <Button href="/login" variant="link" >
            Login here
        </Button>
        </Col>
        </Row>
        </Form>
      </Col>
    </Container>
    </div>
  )
}

export default SignupForm