/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Card from './Card'
import Contact from '../Contact/Contact'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import revit from "../../Assets/rupture.jpg"

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
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
}

function Carrousel() {
  return (
    <section>
      <Container fluid>
        <Container>
          <Col md={12} className="d-flex justify-content-center mr-5">
            <h3 className=" heading1">Nossas</h3>
          </Col>

          <h1 className="d-flex justify-content-center mr-5">Especialidades</h1>
          <Carousel className='mx-4' responsive={responsive}>
            <div>
              <Card img={revit} title=" Facetas/Lentes de Contato" button="Clique para Saber mais"/>
            </div>
            <div><Card img={revit} title="Tratamento Periodental" button="Clique para Saber mais"/></div>
            <div><Card img={revit} title="Implante Dentário" button="Clique para Saber mais"/></div>
            <div><Card img={revit} title="Ortodontia(aparelho)" button="Clique para Saber mais"/></div>
            <div><Card img={revit} title="Prótese" button="Clique para Saber mais"/></div>
            <div><Card img={revit} title="Endodontia(canal)" button="Clique para Saber mais"/></div>
            <div><Card img={revit} title="Harmonização Orofacial(botox/preenchimento)" button="Clique para Saber mais"/></div>
            <div><Card img={revit} title="Bucomaxilofacial" button="Clique para Saber mais"/></div>
            <div><Card img={revit} title="Clínico Geral" button="Clique para Saber mais"/></div>
          </Carousel>
          <Row>
            <Contact />
          </Row>
        </Container>
      </Container>
    </section>
  )
}
export default Carrousel
