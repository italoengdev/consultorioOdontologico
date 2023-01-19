/* eslint-disable jsx-a11y/img-redundant-alt */
/* https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/ */

import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'

function schedule() {
  return (
    <section>
      <Container fluid className="background3 p-5">
        <Row>
          <Col lg={6}>
            <h1 className="m-2">Agende sua consulta:</h1>
          </Col>
          <Col lg={3}>
            <Button variant="secondary" className="m-2">(XX) - 9XXXX-XXXX</Button>
          </Col>
          <Col lg={3}>
            <Button variant="secondary" className="m-2">(XX) - XXXX-XXXX</Button>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
export default schedule
