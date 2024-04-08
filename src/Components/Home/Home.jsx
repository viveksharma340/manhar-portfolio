import React, { useEffect, useState } from "react";
import { Carousel, Col, Image, Input, Row, Typography } from "antd";
import "./Home.css";
import cubeIImage from "../../Assets/icons/Cube02.svg";
import cube2Image from "../../Assets/icons/Cube01.svg";
import cube3Image from "../../Assets/icons/Cube07.svg";
import cube4Image from "../../Assets/icons/cub3.svg";
import cube5Image from "../../Assets/icons/Cube08.svg";
import backSwordImage from "../../Assets/images/BackSword.jpg";
import skillImage from "../../Assets/images/SkillsCardIcon.svg";
import skillIImage from "../../Assets/images/SkillsCardIconI.svg";
import skill2Image from "../../Assets/images/SkillsCardIcon(1).svg";
import boxOne from "../../Assets/images/Property 1=box 2.svg";
import boxTwo from "../../Assets/images/Property 1=box 3.jpg";
import boxThree from "../../Assets/images/Property 1=box 4.jpg";
import magOne from "../../Assets/images/Property 1=Frame 2.jpg";
import magTwo from "../../Assets/images/Property 1=Frame 3.jpg";
import magThree from "../../Assets/images/Property 1=Frame 4.jpg";
import magFour from "../../Assets/images/Property 1=Frame 5.jpg";
import magFive from "../../Assets/images/Property 1=Frame 6.jpg";
import lapOne from "../../Assets/images/Property 1=lap 2.jpg";
import lapTwo from "../../Assets/images/Property 1=lap 3.jpg";
import lapThree from "../../Assets/images/Property 1=lap 4.jpg";
import livOne from "../../Assets/images/Property 1=liv 2.svg";
import livTwo from "../../Assets/images/Property 1=liv 3.svg";
import livThree from "../../Assets/images/Property 1=liv 4.svg";
import livFour from "../../Assets/images/Property 1=liv 5.svg";
import cardOne from "../../Assets/images/Property 1=card 4.jpg";
import cardTwo from "../../Assets/images/Property 1=card 5.jpg";
import cardThree from "../../Assets/images/Property 1=card 6.jpg";
import cardFour from "../../Assets/images/Property 1=card 7.jpg";
import cardFive from "../../Assets/images/Property 1=card 8.jpg";
import photoOne from "../../Assets/images/Property 1=photo 2.jpg";
import photoTwo from "../../Assets/images/Property 1=photo 3.jpg";
import photoThree from "../../Assets/images/Property 1=photo 4.jpg";
import photoFour from "../../Assets/images/Property 1=photo 5.jpg";
import photoFive from "../../Assets/images/Property 1=photo 6.jpg";
import arrowTop from "../../Assets/icons/arrowTop.svg";
import linkedIn from "../../Assets/icons/linkedIn.svg";
import insta from "../../Assets/icons/insta.svg";

import bE from "../../Assets/icons/BE.svg";

import btn1 from "../../Assets/images/btn1.png";
import btn2 from "../../Assets/images/btn2.png";

import { Button } from "antd";
import { useNavigate ,useLocation} from "react-router-dom";

const { Text } = Typography;

const Home = () => {
  const navigate=useNavigate()


  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
useEffect(() => {
  const queryParams = new URLSearchParams(location.search);
  const scrollTo = queryParams.get('scrollTo');
  if (scrollTo === 'latestWork') {
    const section = document.querySelector('.latest-work-section'); 
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }else{
    scrollToTop()

  }
}, [location]);
  const carouselData = [
    [boxOne, boxTwo, boxThree],
    [magOne, magTwo, magThree, magFour, magFive],
    [lapOne, lapTwo, lapThree],
    [livOne, livTwo, livThree, livFour],
    [cardOne, cardTwo, cardThree, cardFour, cardFive],
    [photoOne, photoTwo, photoThree, photoFour, photoFive],
  ];
  const cardData = [
    {
      id: 1,
      icon: skillImage,
      header: "Graphic design button",
      data: "Includes all the graphic related stuff done by me in the recent years like logo, cards, magazines and more.",
      navigation:'/graphic-work'
    },
    {
      id: 2,
      icon: skillIImage,
      header: "Product, UI/UX Design",
      data: "Includes work related to physical product design and user interface and experience design.",
      navigation:'/product-work'
    },
    {
      id: 3,
      icon: skill2Image,
      header: "Other stuff I do!",
      data: "Includes other parts of me where I explore myself such as Art direction, video editing and others.",
      navigation:'/miscellaneous-work'

    },
  ];
  const [isBtn1Hovered, setIsBtn1Hovered] = useState(false);

  const [hoveredCardId, setHoveredCardId] = useState(null);

  function getSVGColor(id) {
    if (id === 1) {
      return "#F3AFA8";
    }
    if (id === 2) {
      return "#F7D684";
    }
    if (id === 3) {
      return "#009379";
    }
  }
 
  return (
    <Col
      style={{
        backgroundColor: "#000000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
      }}
    >
      <Col className="home-background">
        <Col
          style={{
            position: "absolute",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "transparent",
            justifyContent: "center",
            width: "20%",
            gap: "1rem",
          }}
        >
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "transparent",

            }}
          >
            <img loading="lazy" src={cubeIImage} alt="cube" className="shining-image" />
            <Text style={{ color: "#fff", backgroundColor: "transparent" }}>
              Designer
            </Text>
          </Col>
          <Col style={{display:'flex',flexDirection:'column'}}>
          <Text
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: "52px",
              backgroundColor: "transparent",
              textAlign: "center ",
            }}
            >
            Manhar
          </Text>
          <Text
            style={{
              color: "#fff",
              fontWeight: 500,
              fontSize: "52px",
              backgroundColor: "transparent",
              textAlign: "center ",
            }}
            >
            Bhola
          </Text>
          </Col>
          <Text
            style={{
              color: "#fff",
              backgroundColor: "transparent",
              textAlign: "center",
            }}
          >
            Design enthusiast with a knack for blending tech and art into
            captivating visuals.
          </Text>
          <img
  loading="lazy"
  src={isBtn1Hovered ? btn2 : btn1}
  alt="button"
  style={{
    height: '78px',
    width: '212px',
    cursor: 'pointer',
  }}
  onClick={()=>navigate('/about')}
  onMouseEnter={() => setIsBtn1Hovered(true)}
  onMouseLeave={() => setIsBtn1Hovered(false)}
/>
        </Col>
      </Col>

      <Col
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <Col style={{ width: "30%" }}>
          <img
            loading="lazy"
            src={cube2Image}
            alt="cube"
            style={{
              width: "80%",
              position: "absolute",
              bottom: "-9rem",
              animation: "moveUpDown 4s infinite alternate",
            }}
          />
        </Col>
        <img
          loading="lazy"
          src={backSwordImage}
          alt="Back Sword"
          style={{ width: "30%" }}
        />
        <img
          loading="lazy"
          src={cube3Image}
          alt="cube"
          style={{
            width: "30%",
            animation: "moveUpDown 4s infinite alternate",
          }}
        />
      </Col>
      <Col style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        {cardData.map((data) => (
          <Col
          onClick={()=>navigate(data.navigation)}
            key={data.id}
            className="card-container"
            style={{
              cursor:"pointer",
              backgroundColor:
                hoveredCardId === data.id ? getSVGColor(data.id) : "#fff",
            }}
            onMouseEnter={() => setHoveredCardId(data.id)}
            onMouseLeave={() => setHoveredCardId(null)}
          >
            <img
              loading="lazy"
              src={data.icon}
              alt="card"
              className="card-image"
            />
            <Text
              style={{
                fontWeight: 500,
                fontSize: "24px",
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                transform:
                  hoveredCardId === data.id ? "scale(1.05)" : "scale(1)",
              }}
            >
              {data.header}
            </Text>
            <Text
              style={{
                textAlign: "center",
                transition: "all 0.3s ease-in-out",
                transform:
                  hoveredCardId === data.id ? "scale(1.05)" : "scale(1)",
              }}
            >
              {data.data}
            </Text>
          </Col>
        ))}
      </Col>
      <Col
        style={{
          marginTop: "8rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Text
        className="latest-work-section"
          style={{
            color: "#FFFF",
            fontWeight: 500,
            fontSize: "32px",
            marginBottom: "2rem",
          }}
        >
          Latest work
        </Text>
        <Row
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {carouselData.map((images, index) => (
            <Col key={index} style={{ width: "33.3%", margin: 0 }}>
              <Carousel
                effect="fade"
                style={{ height: "350px", width: "100% !important" }}
                autoplay
                slidesToShow={1}
                autoplaySpeed={2500}
                speed={500}
                pauseOnHover={false}
                infinite={true}
                className="carouselParent"
              >
                {images.map((image, idx) => (
                  <Image
                    loading="lazy"
                    style={{
                      margin: 0,
                      padding: 0,
                    }}
                    width={"100%"}
                    key={idx}
                    height="350px"
                    src={image}
                  />
                ))}
              </Carousel>
            </Col>
          ))}
        </Row>
      </Col>
      <Col style={{ display: "flex" }}>
        <Col style={{ width: "30%", display: "flex", alignItems: "flex-end" }}>
          <img
            loading="lazy"
            src={cube5Image}
            alt="cube"
            style={{
              width: "70%",
              animation: "moveUpDown 4s infinite alternate",
            }}
          />
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width: "60%",
            // margin: "5rem 0",
            // position:"relative"
          }}
        >
          <Text
            style={{
              color: "#ffff",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "62px",
            }}
          >
            YOU CAN{" "}
          </Text>

          <Text
            style={{
              color: "#ffff",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "62px",
            }}
          >
            {" "}
            DO ANYTHING,
          </Text>
          <Text
            style={{
              color: "#ffff",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "62px",
            }}
          >
            {" "}
            BUT NOT
          </Text>
          <Text
            style={{
              color: "#ffff",
              textAlign: "center",
              fontWeight: 500,
              fontSize: "62px",
            }}
          >
            {" "}
            EVERYTHING.
          </Text>
        </Col>
        <Col
          style={{ width: "30%", display: "flex", alignItems: "flex-start" }}
        >
          <img
            loading="lazy"
            src={cube4Image}
            alt="cube"
            style={{
              width: "90%",
              animation: "moveUpDown 4s infinite alternate",
            }}
          />
        </Col>
      </Col>

      <Col
        style={{
          padding: "42px",
          backgroundColor: "#ffff",
          width: "100%",
          display: "flex",
        }}
      >
        <Col style={{ width: "5%", display: "flex", alignItems: "flex-end" }}>
          {" "}
          <img
            loading="lazy"
            src={arrowTop}
            alt="card"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          />
        </Col>
        <Col
          style={{
            width: "70%",
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Text style={{ fontSize: "32px", fontWeight: 500 }}>
            Lets work together
          </Text>
          <Text style={{ fontSize: "16px", fontWeight: 400, width: "60%" }}>
            {
              " Thanks for visiting! If you have a project in mind or just want tosay hello, I'd love to hear from you ;)"
            }
          </Text>
          <Col style={{ display: "flex", gap: "1rem", paddingTop: "1rem" }}>
          <img
  loading="lazy"
  src={linkedIn}
  alt="card"
  style={{ cursor: 'pointer' }} 
  onClick={() => window.open('https://www.linkedin.com/in/manhar-bhola-b72b62220/', '_blank')}
/>
          <img
  loading="lazy"
  src={insta}
  alt="card"
  style={{ cursor: 'pointer' }} 
  onClick={() => window.open('https://www.instagram.com/manhar.bhola', '_blank')}
/>
          <img
  loading="lazy"
  src={bE}
  alt="card"
  style={{ cursor: 'pointer' }} 
  onClick={() => window.open('https://www.behance.net/manharbhola', '_blank')}
/>

          </Col>
        </Col>

        <Col
          style={{
            width: "25%",
            display: "flex",
            flexDirection: "column",
            gap: "1rem",
          }}
        >
          <Input
            style={{ height: "60px" }}
            placeholder="Name"
            variant="filled"
          />
          <Input
            style={{ height: "60px" }}
            placeholder="Email"
            variant="filled"
          />

          <Button
            style={{
              height: "60px",
              backgroundColor: "black !important",
              width: "200px",
            }}
          >
            Submit
          </Button>
        </Col>
      </Col>
    </Col>
  );
};

export default Home;
