import React, { useState } from 'react';
import { signup, updateEmployee } from '../apicalls';
import { Form, Button, Container, Col, Alert } from 'react-bootstrap';
import { useNavigate } from 'react-router';

const UpdateEmployeeForm = (props) => {
    const {id, username,  firstName, lastName,middleName, age, dob, role,salary, doj,departmentId,departmentName,departmentHead,designation} = props.employee;
    const [emailID, setemailID] = useState(username);
    const [fname, setfname] = useState(firstName);
    const [lname, setlname] = useState(lastName);
    const [mname, setmname] = useState(middleName);
    const [Dob, setdob] = useState(dob);
    const [Doj, setdoj] = useState(doj);
    const [Age, setage] = useState(age);
    const [Role, setrole] = useState(role);
    const [did, setdid] = useState(departmentId);
    const [dhead, setdhead] = useState(departmentHead);
    const [dname, setdname] = useState(departmentName);
    const [desg, setdesg] = useState(designation);
    const [Salary, setsalry] = useState(salary);
    const [error, seterror] = useState(null);
    const navigate = useNavigate();

    const updatecall = async ()=>{
      console.log("signupcall")
      const userbody = {
        ...props.employee,
        "username":emailID,
        "firstName":fname,
        "lastName":lname,
        "age":Age,
        "middleName":mname,
        "dob":Dob,
        "salary":Salary,
        "doj":Doj,
        "role":Role,
        "designation":desg,
        "departmentId":did,
        "departmentHead":dhead,
        "departmentName":dname
      }
      const result = await updateEmployee(userbody,id);
      console.log("result",result);
      localStorage.setItem("result",result);
      navigate("/viewallemployees")
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
          <Form.Group className="mb-3" controlId="formBasicFirstName" placeholder="">
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Enter Designation" value={desg} onChange={(e)=>setdesg(e.target.value)} />
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
          <Form.Group className="mb-3" controlId="formBasicDeptHead" placeholder="">
            <Form.Label>Role</Form.Label>
            <Form.Control as="select" placeholder="Select Role" value={Role} onChange={(e)=>setrole(e.target.value)} >
              <option value="Employee">Employee</option>
              <option value="Employer">Employer</option>
            </Form.Control>
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Button onClick={(e)=>{e.preventDefault();updatecall()}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Col>
    </Container>
    </div>
  )
}

export default UpdateEmployeeForm