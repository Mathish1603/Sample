import React from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default function Registrationform() {
  return (
    <div>
       <Mathi/>
       <Mari/>
    </div>
  )
}
const Mathi=()=>{
    return(
        <div>
             <Container className='fs-5 pt-5'>
            <Form className='border border-5 border-primary'>
            <Col className='col-12 border-bottom border-5 border-primary text-center fw-bold fs-1'>
                RegistrationForm
                </Col>
            <Row className='p-3'>
                <Col className='col-6'>
                <Form.Label>Username:</Form.Label>
                <Form.Control type="text" className='border border-primary'/>
                </Col>
                <Col className='col-6'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" className='border border-primary'/>
                </Col>
                <Col className='col-12'>
                <Form.Label>E-Mail:</Form.Label>
                <Form.Control type="email" className='border border-primary'/>
                </Col> 
                <Col className='col-1 mx-auto mt-3'>  
                <Button variant="primary" type="submit">Submit</Button>
                </Col>
            </Row>
            </Form>
        </Container>
        </div>
        
    )
}
const Mari=()=>{
    return(
        <div>
            <Container className='fs-5 pt-5'>
            <Form className='border border-5 border-primary'>
            <Col className='col-12 border-bottom border-5 border-primary text-center fw-bold fs-1'>
                LoginForm
                </Col>
            <Row className='p-3'>
                <Col className='col-12'>
                <Form.Label>E-Mail:</Form.Label>
                <Form.Control type="email" className='border border-primary'/>
                </Col> 
                <Col className='col-12'>
                <Form.Label>Password:</Form.Label>
                <Form.Control type="password" className='border border-primary'/>
                </Col>
                <Col className='col-1 mx-auto mt-3'>  
                <Button variant="primary" type="submit">Submit</Button>
                </Col>
            </Row>
            </Form>
        </Container>

        </div>
    )
}
