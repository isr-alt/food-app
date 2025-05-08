import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import PromotionImage from "../../assets/promotion/pro.png";
function Section4() {
  return (
    <>
      <section className="promotion_section">
        <Container>
          <Row className=" align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={PromotionImage} className="img-fluid" alt="Promotion" />
            </Col>
            <Col lg={6} className="px-5">
              <h2>Nothing brings people together like a good burger</h2>
              <p>
                A typical burger consists of a grilled ground beef patty placed
                between two halves of a bun, often with toppings like cheese.
              </p>
              <ul>
                <li>
                  <p>
                    A typical burger consists of a grilled ground beef patty
                    placed between two halves of a bun, often with toppings like
                    cheese, lettuce, tomato, onion, and condiments
                  </p>
                </li>
                <li>
                  <p>Quaret soldaes sapien euismed pursus blandit</p>
                </li>
                <li>
                    <p> Nepo ipsam egestes voulute turpis dolores at aliquim quaret
                         sodales sapien undo pretium a purus 

                    </p>
                    
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
