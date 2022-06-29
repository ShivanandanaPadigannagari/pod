import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap';

const EmployeeComp = (props) => {
    const employee = props.employee;
  return (
    <Container className="min-vh-100 d-flex flex-row align-items-center justify-content-center">
       <Card bg="light" style={{ width: '90%' }}>
       <Card.Header>Employee Id:{employee.id} </Card.Header>
       <Card.Body>
         <Card.Title>{employee.firstName} {employee.lastName}</Card.Title>
         <Card.Text>
           <Container>
           <Row>
               <Col md={6}>
                    <Row>
                        First Name: {employee.firstName}
                    </Row>
                    <Row>
                        Middle Name: {employee.middleName}
                    </Row>
                    <Row>
                        Last Name: {employee.lastName}
                    </Row>

                  <Row>
                       Email Address : {employee.username}
                  </Row>
                  <Row>
                       Date of Joining : {employee.doj}
                  </Row>
                  <Row>
                       Designation : {employee.designation}
                  </Row> 
                  
               </Col>
               <Col md={6}>
                   <Row>
                       Date of Birth : {employee.dob}
                  </Row>
                  <Row>
                       Age : {employee.age}
                  </Row>
                  <Row>
                       Salary : {employee.salary}
                  </Row>
                  <Row>
                       Department Id : {employee.departmentId}
                  </Row> 
                  <Row>
                       Department Name : {employee.departmentName}
                  </Row>
                  <Row>
                      Department Head : {employee.departmentHead}
                  </Row>
               </Col>
               
   
               </Row>
           </Container>
         </Card.Text>
       </Card.Body>
     </Card>
     
     </Container>
  )
}

export default EmployeeComp