import React, { useState } from 'react';
import { createEmployee, signup } from '../apicalls';
import { Form, Button, Container, Col, Alert, InputGroup } from 'react-bootstrap';
import { Navigate, useNavigate } from 'react-router';

const EmployeeForm = () => {
    const [emailID, setemailID] = useState('');
    const [fname, setfname] = useState('');
    const [lname, setlname] = useState('');
    const [mname, setmname] = useState('');
    const [Dob, setdob] = useState('');
    const [Doj, setdoj] = useState('');
    const [Age, setage] = useState();
    const [Role, setrole] = useState('');
    const [did, setdid] = useState('');
    const [dhead, setdhead] = useState('');
    const [dname, setdname] = useState('');
    const [desg, setdesg] = useState('');
    const [Salary, setsalry] = useState();
    const [error, seterror] = useState(null);
    const [password, setpassword] = useState("");
    const [showpassword, setshowpassword] = useState(false);
    const navigate = useNavigate()
    const updatecall = async ()=>{
      const userbody = {
        "username":emailID,
        "firstName":fname,
        "lastName":lname,
        "age":Age,
        "middleName":mname,
        "dob":Dob,
        "password":password,
        "salary":Salary,
        "doj":Doj,
        "role":Role,
        "designation":desg,
        "departmentId":did,
        "departmentHead":dhead,
        "departmentName":dname
      }
      const result = await createEmployee(userbody);
     navigate("/viewallemployees")
    }
  return (
    <div className='h-100'>
      <Container className="min-vh-100 d-flex align-items-center justify-content-center">
      <Col xs={8} md={6}>
      {error && <Alert variant="danger">{error}</Alert>}
      <h3 className='text-center'>Add Employee</h3>
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

          <Form.Group className="mb-3" controlId="formBasicDateOfJoining">
            <Form.Label>Date of Joining</Form.Label>
            <Form.Control type="date" placeholder="Enter Date of Joining" value={Doj} onChange={(e)=>setdoj(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicSalary">
            <Form.Label>Salary</Form.Label>
            <Form.Control type="number" placeholder="Enter Salary" value={Salary} onChange={(e)=>setsalry(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          
          <Form.Group className="mb-3" controlId="formBasicDesignation" placeholder="Design">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Designation" value={desg} onChange={(e)=>setdesg(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeptId" placeholder="">
            <Form.Label>Department Id</Form.Label>
            <Form.Control type="text" placeholder="Enter Department Id" value={did} onChange={(e)=>setdid(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeptName" placeholder="">
            <Form.Label>Department Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Department Name" value={dname} onChange={(e)=>setdname(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicDeptHead" placeholder="">
            <Form.Label>Department Head</Form.Label>
            <Form.Control type="text" placeholder="Enter Department Head" value={dhead} onChange={(e)=>setdhead(e.target.value)} />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRole" placeholder="">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" placeholder="Select Role" value={Role} onChange={(e)=>setrole(e.target.value)} >
              <option value="Employee">Employee</option>
              <option value="Employer">Employer</option>
            </Form.Control>
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

export default EmployeeForm