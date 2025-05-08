import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Pizza from '../../assets/about/pizza.png';
import Salad from '../../assets/about/Salad.png';
import Delivery from '../../assets/about/Delivery-bike.png';

const mockData =[
  {
    image: Pizza,
    title: "Original",
    paragraph: 'porta semper lacus cursus,feuight primis ultrice a ligula risus auctor an '
  },
  {
    image: Salad,
    title: "Quality foods",
    paragraph:'porta semper lacus cursus,feuight primis ultrice a ligula risus auctor an'
  },
  {
   image: Delivery,
   title: 'Fastest Delivery',
   paragraph: 'porta semper lacus cursus,feuight primis ultrice a ligula risus auctor an'
  },
];

const Section2 = () => {
  return (
    <>
    <section className='about_section'>
      <Container>
        <Row>
          <Col lg={{ span: 8, offset:2}} className='text-center'>
          <h2>The burger tastes better when you eat it with your family</h2>
          <p>Porta semper lacus cursus, feuight primts ultrice a ligula risus auctor an tempus feugiat
            dolar cubilia curae integer orci congue and metus integer primis in integer metus
          </p>
          <Link to="/" className='btn order_now btn_red'>
          Explore full Menu 
          </Link>
          </Col>
        </Row>
      </Container>

    </section>
    <section className='about_wrapper'>
<Container>
  <Row className='justify-content-md-center'>
   {mockData.map((cardData, index) =>(
    <Col md ={6} lg={4} className='mb-4 mb-md-0' key={index}>
      <div className='about_box text-center'>
        <div className='about_icon'>
          <img src={cardData.image} className='img-fluid' alt='icon' />
        </div>
        <h4>{cardData.title}</h4>
        <p>{cardData.paragraph}</p>
      </div>
    </Col>
   ))}
  </Row>
</Container>
    </section>
    </>
  )
}

export default Section2
