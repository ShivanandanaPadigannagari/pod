import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Form, FormControl, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { deleteEmployee, getEmployees } from '../apicalls';
import { useNavigate } from 'react-router';
const ViewEmployees = (props) => {
    const [searchval, setsearchval] = useState()
    const navigate = useNavigate();
    const employees=props.employees;
    const search =(val)=>{
        employees.filter(employee => employee.firstName.toLowerCase().includes(searchval.toLowerCase()) || employee.lastName.toLowerCase().includes(searchval.toLowerCase()) || employee.middleName.toLowerCase().includes(searchval.toLowerCase())
        || employee.departmentName.toLowerCase().includes(searchval.toLowerCase())
        || employee.departmentHead.toLowerCase().includes(searchval.toLowerCase())
        || employee.designation.toLowerCase().includes(searchval.toLowerCase())
        
        
        )
    }
  return (
      
    <Container >
    <Row className='mb-3'>
    <Col xs={{ span: 6, offset: 6}} md={{ span: 4, offset: 8 }}>
    <Form className="d-flex">
            <input
              type="text"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchval}
              onChange={search}
            />
            <Button variant="outline-success">Search</Button>
          </Form>
    </Col>
    </Row>
        <Row>
            {employees.map((employee) =>{
                return <Col xs={12} md={6} lg={4}>
                <Card bg="light" className="my-2 mx-4" style={{ width: '90%' }}>
                    <Card.Body>
                        <Card.Title>{employee.firstName} {employee.middleName} {employee.lastName} </Card.Title>
                        <Card.Text>
                        <Container>
                        <Row>
                            <Col md={12}>
                                <Row>
                                    Email Address : {employee.username}
                                </Row>
                                <Row>
                                    Date of Joining : {employee.doj}
                                </Row>
                                <Row>
                                    Designation : {employee.designation}
                                </Row> 
                                <Row>
                                    Department Name : {employee.departmentName}
                                </Row>
                                
                            </Col>
                            </Row>
                            <Row className="my-2 d-flex align-items-flexend justify-content-center">
                            <Col xs={4}> 
                            <Link to="/employee" state={{ user:employee  }}>
                                <Button variant="outline-info" className='my-2'>View</Button></Link>
                            </Col>
                            <Col xs={4}> 
                            <Link to="/updateemployee" state={{ user:employee  }}>
                                <Button variant="outline-success" className='my-2'>Update</Button></Link>
                            </Col>

                            <Col xs={4}> 
                            
                                <Button variant="outline-danger" className='my-2' onClick={(e)=>{e.preventDefault();deleteEmployee(employee.id);window.location.reload(false);}}>Delete</Button>
                            </Col>
                
                            </Row>
                        </Container>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
            })}
        </Row>
    </Container>
  )
}

export default ViewEmployees