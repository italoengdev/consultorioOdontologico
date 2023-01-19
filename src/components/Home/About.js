/* eslint-disable jsx-a11y/img-redundant-alt */
/* https://reactjsexample.com/a-lightweight-production-ready-carousel-for-react/ */

import React from 'react'
import { Container, Row, Col, Button } from 'react-bootstrap'
import gustavo from '../../Assets/Gustavo.png'

function aboutHome() {
  return (
    <section>
      <Container className="background2" fluid>
        <Container>
          <Col md={12} className="d-flex justify-content-center mr-5 pt-5">
            <h3 className=" heading1">Sobre</h3>
          </Col>

          <h1 className="d-flex justify-content-center mr-5">Quem Somos</h1>
        </Container>
        <Container fluid>
          <Row>
            <Col md={6} className="p-2 mx-auto">
              <h3 className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
                amet velit vel elit posuere aliquam quis vitae sapien.{' '}
              </h3>
              <h4 className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
                amet velit vel elit posuere aliquam quis vitae sapien. Maecenas
                semper mollis sapien, sed posuere lectus commodo ac.{' '}
              </h4>
              <h4 className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
                amet velit vel elit posuere aliquam quis vitae sapien. Maecenas
                semper mollis sapien, sed posuere lectus commodo ac.{' '}
              </h4>
              <h4 className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit
                amet velit vel elit posuere aliquam quis vitae sapien. Maecenas
                semper mollis sapien, sed posuere lectus commodo ac.{' '}
              </h4>
              <Button className="w-25 mx-auto my-4" variant="secondary">
                Saiba mais
              </Button>{' '}
            </Col>
            <Col md={6} className="d-flex justify-content-center">
              <img
                src={gustavo}
                alt="home pic"
                style={{
                  
                }}
                className="thumbnail rounded mx-auto mt-4 h-75"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  )
}
export default aboutHome
