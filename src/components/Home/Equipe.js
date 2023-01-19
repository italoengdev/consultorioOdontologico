/* eslint-disable jsx-a11y/img-redundant-alt */
/* https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/ */

import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Card from './CardEquipe'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import demo from '../../Assets/Gustavo1.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 750 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 749, min: 0 },
    items: 1
  }
}

function Carrousel() {
  return (
    <section>
      <Container className="" fluid>
        <Container>
          <Col md={12} className="d-flex justify-content-center mr-5 pt-5">
            <h3 className=" heading1">Nossa</h3>
          </Col>

          <h1 className="d-flex justify-content-center mr-5">Equipe</h1>
          <Carousel
            infinite={true}
            autoPlaySpeed={1000}
            className="mx-5 mt-4"
            responsive={responsive}
          >
            <div>
              <Card img={demo} title="Dr. Gustavo Pinheiro" subTitle="Odontólogo" />
            </div>
            <div>
              <Card img={demo} title="Dr. Gustavo Pinheiro" subTitle="Odontólogo" />
            </div>
            <div>
              <Card img={demo} title="Dr. Gustavo Pinheiro" subTitle="Odontólogo" />
            </div>
            <div>
              <Card img={demo} title="Dr. Gustavo Pinheiro" subTitle="Odontólogo" />
            </div>
            <div>
              <Card img={demo} title="Dr. Gustavo Pinheiro" subTitle="Odontólogo" />
            </div>
            <div>
              <Card img={demo} title="Dr. Gustavo Pinheiro" subTitle="Odontólogo" />
            </div>
            <div>
              <Card img={demo} title="Dr. Gustavo Pinheiro" subTitle="Odontólogo" />
            </div>
            <div>
              <Card img={demo} title="Dr. Gustavo Pinheiro" subTitle="Odontólogo" />
            </div>
          </Carousel>
          <Row>
            <Button className="w-25 mx-auto my-4" variant="secondary">
              Ver todos
            </Button>{' '}
          </Row>
        </Container>
      </Container>
    </section>
  )
}
export default Carrousel
