import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import homeLogo from '../../Assets/home2.png'
import Especialidades from './Especialidades'
import Equipe from './Equipe'
import Schedule from './Schedule'
import About from './About'
import Type from './Type'
import Button from 'react-bootstrap/Button';
import {AiOutlineSchedule} from 'react-icons/ai'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <div className="heading">
                <h4 className="d-inline text-dark">Dr.</h4>
                <h4 className="d-inline">Gustavo</h4>{' '}
                <h4 className="d-inline text-dark">Pinheiro Clínica Odontológica</h4>
              </div>
              <Row>
                <Col md={6}>
                  <h1 className="heading-name">
                   Temos Especialistas nas mais diversas áreas da odontologia:
                  </h1>
                </Col>
                <Col md={6}>
                  <div style={{ paddingLeft: 20, textAlign: 'left',paddingTop:20 }}>
                    <Type />
                  </div>
                </Col>
              </Row>

              <h2 className="main-name"> Uma infraestrutura exclusiva para atender você de forma rápida, segura e com o melhor custo benefício.</h2>
               
              <Button className='m-3' variant="secondary" href="www.globo.com"><AiOutlineSchedule className='mb-1'/>  Agende sua Consulta Online</Button>
              

              
            </Col>
            <Col
              md={5}
              
              className="d-flex align-self-center justify-content-center"
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid rounded-circle "
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Especialidades/>
      <About/>
      <Schedule/>
      <Equipe/>
    </section>
  )
}

export default Home
