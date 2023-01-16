/* eslint-disable jsx-a11y/img-redundant-alt */
/* https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/ */

import React from 'react'
import { Container, Row, Col,Button } from 'react-bootstrap'
   

import a from "../../Assets/demo.png"



function aboutHome() {
  return (
    <section>
      <Container className='background1' fluid>
        <Container>
          <Col md={12} className="d-flex justify-content-center mr-5 pt-5">
            <h3 className=" heading1">Nossas</h3>
          </Col>

          <h1 className="d-flex justify-content-center mr-5">Especialidades</h1>
      
          <Row>
          <Button className='w-25 mx-auto my-4' variant="secondary">Ver todas</Button>{' '}
          </Row>
        </Container>
      </Container>
    </section>
  )
}
export default aboutHome
