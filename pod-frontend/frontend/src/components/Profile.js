import React, { useEffect, useRef, useState } from 'react'
import { Button, Card, Col, Container,Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getEmployeeByEmail } from '../apicalls';



const Profile = (user) => {
     const [userprofile, setuserprofile] = useState()
     const getemployee = (email) => {
       getEmployeeByEmail(email).then(resp=> {
       setuserprofile(resp);
     })}
   
     useEffect(() => {
       getemployee(user.user);
     }, [])
   
     
     
     return (
       
       <div className="h-100 mx-auto">
       
       {userprofile && 
       <Container className="min-vh-100 d-flex flex-row align-items-center justify-content-center">
       <Card bg="light" style={{ width: '90%' }}>
       <Card.Header>Profile </Card.Header>
       <Card.Body>
         <Card.Title>{userprofile.firstName} {userprofile.middleName} {userprofile.lastName}</Card.Title>
         <Card.Text>
           <Container>
           <Row>
               <Col md={6}>
                  <Row>
                       Email Address : {userprofile.username}
                  </Row>
                  <Row>
                       Date of Joining : {userprofile.doj}
                  </Row>
                  <Row>
                       Designation : {userprofile.designation}
                  </Row> 
               </Col>
               <Col md={6}>
                   <Row>
                       Date of Birth : {userprofile.dob}
                  </Row>
                  <Row>
                       Age : {userprofile.age}
                  </Row>
                  <Row>
                       Salary : {userprofile.salary}
                  </Row>
               </Col>
               <Col xs={{ span: 6, offset: 6}} md={{ span: 3, offset: 9 }}> 
               <Link to="/updateprofile" state={{ user:userprofile  }}>
                 <Button variant="outline-success" className='ms-auto'>Update Profile</Button></Link>
               </Col>
   
               </Row>
           </Container>
         </Card.Text>
       </Card.Body>
     </Card>
     
     </Container>
     }
     
     </div>
   
     )
}

export default Profile