import React, { useEffect, useState } from 'react'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'


export default function Forms() {

  return (
    <div>
      <Use />
    </div>
  )
}
const Use = () => {

  const [name, setName] = useState();
  return (
    <div>
      {/* <div class="formdesg border border-warning border-4 rounded bg-success">
        <div><h3 class="text-center border-bottom border-4 border-warning p-2">Registration Form</h3></div>
        <div class="padding">
          <label class="ms-5 fw-bold">Name:
            <input type="text" class="form-control border-warning border-2" name="name" />
          </label>
          <label class="ms-5 fw-bold">DOB:
            <input type="date" class="form-control me-5 border-warning border-2" name="dob" />
          </label>
          <label class="ms-5 fw-bold">E-Mail:
            <input type="text" class="form-control border-warning border-2" />
          </label>
          <label class="ms-5 fw-bold">Ph.No:
            <input type="number" class="form-control border-warning border-2" />
          </label>
          <button class="btn btn-outline-primary btn-light ms-5" onClick={() => { setName(name) }}>Submit</button>
        </div>

      </div> */}
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Label>Username</Form.Label>
              <Form.Control type='text'/>
            </Col>
            <Col className='col-12'>
              <Form.Label>Passwod</Form.Label>
              <Form.Control type='password'/>
            </Col>
            <Button variant='dark'>Submit</Button>
          </Row>
        </Form>
      </Container>
    </div>
  )

}
