import React from "react";
import Cards from "../../components/Cards";
import {Link} from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Image1 from "../../assets/menu/burger-11.jpg";
import Image2 from "../../assets/menu/burger-12.jpg";
import Image3 from "../../assets/menu/burger-13.jpg";
import Image4 from "../../assets/menu/burger-14.jpg";
import Image5 from "../../assets/menu/burger-15.jpg";
import Image6 from "../../assets/menu/burger-16.jpg";
import Image7 from "../../assets/menu/burger-17.jpg";
import Image8 from "../../assets/menu/burger-18.jpg";

const mockData = [
  {
    id: "0001",
    Image: Image1,
    title: "Crispy Chicken",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, colaslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0002",
    Image: Image2,
    title: "Ultimate Bacon",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, colaslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0003",
    Image: Image3,
    title: "Tikka Boti",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, colaslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0004",
    Image: Image4,
    title: "White Kharai",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, colaslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0005",
    Image: Image5,
    title: "Beef Kharai",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, colaslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0006",
    Image: Image6,
    title: "Leg piece",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, colaslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0007",
    Image: Image7,
    title: "Haldi Kharai",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, colaslaw",
    rating: 5,
    price: 99.15,
  },
  {
    id: "0008",
    Image: Image8,
    title: "Paapa Foods",
    paragraph: "Chicken breast, chilli sauce, tomatoes, pickles, colaslaw",
    rating: 5,
    price: 99.15,
  },
];

const renderRatingIcons = (rating)=>{
    const stars= [];
    for(let i = 0; i<5; i++){
        if (rating > 0.5) {
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            rating--;
        }else if(rating < 0 && rating < 1){
            stars.push(<i key={"half"} className="bi bi-star-half"></i>);
            rating--;
        }else{
            stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
        }
        
}
   return stars;
   

};



const Section3 = () => {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>OUR CRAZY BURGERS</h2>
            <p className="para">
              Aliquim a angue susciipt, luctus neque pursus ipsus neque undo
              dolor primis libero tempus , blandit a cursus varius magna{" "}
            </p>
          </Col>
        </Row>
        <Row>
          {mockData.map((cardData, index) => (
            <Cards
              key={index}
              image={cardData.Image}
              rating={cardData.rating}
              title={cardData.title}
              paragraph={cardData.paragraph}
              price={cardData.price}
               renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>
        <Row></Row>
        <Row className="pt-5">
            <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHESSE FRIES</h5>
             <Link to='/' className="btn btn_red px-4 rounder-0">
             Learn More

             </Link>
            </div>
            </Col>
            <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
                <h4 className="mb-0">GET YOUR FREE</h4>
                <h5>CHESSE FRIES</h5>
             <Link to='/' className="btn btn_red px-4 rounder-0">
             Learn More

             </Link>
            </div>
            </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Section3;
