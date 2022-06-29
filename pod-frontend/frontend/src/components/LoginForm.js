import React, { useState } from 'react';
import { login } from '../apicalls';
import { Form, Button, Container, Col, InputGroup, Alert } from 'react-bootstrap';
import { delay, isAuthenticated } from '../utilities/utilityfunctions';

const LoginForm = () => {
    const [emailID, setemailID] = useState("");
    const [password, setpassword] = useState("");
    const [showpassword, setshowpassword] = useState(false);
    const [error, seterror] = useState(null);

    const logincall = async (email,pass)=>{
      console.log("logincall")
      const result = await login(email,pass);
      if(result.resp){
        seterror("Login failed	due to Invalid credentials");
      }
    }
  return (
    <div className='h-100'>
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <Col xs={8} md={6}>
      {error  && <Alert variant="danger">{error}</Alert>}
      <h3 className='text-center'>Login</h3>
        <Form >
        
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={emailID} onChange={(e)=>setemailID(e.target.value)} />
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
          <Button onClick={()=>{logincall(emailID,password)}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
    </div>
  )
}

export default LoginForm