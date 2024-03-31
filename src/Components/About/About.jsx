import { Button, Carousel, Col, Image, Typography } from "antd";
import React from "react";
import cube5Image from "../../Assets/icons/Cube08.svg";
import manhar1 from "../../Assets/images/manhar1.jpg";
import manhar2 from "../../Assets/images/manhar2.jpg";
import manhar3 from "../../Assets/images/manhar3.jpg";
import manhar4 from "../../Assets/images/manhar4.jpg";
import card1 from "../../Assets/images/card001.svg";
import card2 from "../../Assets/images/card002.svg";
import card3 from "../../Assets/images/card003.svg";
import cube4Image from "../../Assets/icons/cub3.svg";
import arrowTop from "../../Assets/icons/arrowWhite.svg";
import { useNavigate } from "react-router-dom";

const { Text } = Typography;
const About = () => {
  const navigate=useNavigate()
  const images = [manhar1, manhar2, manhar3,manhar4];

  const card = [
    { image: card1, url: '/productWork' },
    { image: card2, url: '/productWork' },
    { image: card3, url: '/url3' }
];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleImageClick = (url) => {
navigate(url)};
  return (
    <>
      <Col
        style={{
          backgroundColor: "#000000",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Col style={{ display: "flex" }}>
          <Col
            style={{ width: "15%", display: "flex", alignItems: "flex-end" }}
          >
            <img
              loading="lazy"
              src={cube5Image}
              alt="cube"
              style={{
                width: "90%",
                animation: "moveUpDown 4s infinite alternate",
              }}
            />
          </Col>
          <Col
            style={{
              width: "70%",
              display: "flex",
              borderBottom: "13px solid #FFFFFF",
              alignItems: "center",
            }}
          >
            <Col
              style={{
                width: "50%",
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
                padding: "2rem 0",
              }}
            >
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "42px",
                    color: "#FFFFFF",
                  }}
                >
                  Nice to meet you!
                </Text>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "42px",
                    color: "#FFFFFF",
                  }}
                >
                  I am Manhar Bhola
                </Text>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "42px",
                    color: "#FFFFFF",
                  }}
                >
                  A design student based in India.
                </Text>
              </Col>
              <Col>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "#FFFFFF",
                  }}
                >
                  Places I exist on internet
                </Text>
              </Col>
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  }}
                >
                  Linkedin
                </Text>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  }}
                >
                  Behance
                </Text>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  }}
                >
                  Instagram
                </Text>
                <Text
                  style={{
                    fontWeight: 500,
                    fontSize: "24px",
                    color: "#FFFFFF",
                    textDecoration: "underline",
                  }}
                >
                  Youtube
                </Text>
              </Col>
            </Col>
            <Col style={{ width: "50%" }}>
              <Col>
                <Carousel
                  effect="fade"
                  style={{ width: "100% !important" }}
                  autoplay
                  slidesToShow={1}
                  autoplaySpeed={2500}
                  speed={500}
                  pauseOnHover={false}
                  infinite={true}
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
            </Col>
          </Col>

          <Col style={{ width: "15%" }}></Col>
        </Col>
        <Col style={{ display: "flex" }}>
          <Col
            style={{ width: "15%", display: "flex", alignItems: "flex-end" }}
          >
            <img
              loading="lazy"
              src={cube5Image}
              alt="cube"
              style={{
                width: "80%",
                animation: "moveUpDown 4s infinite alternate",
              }}
            />
          </Col>
          <Col
            style={{
              width: "70%",
              display: "flex",
              gap: "2rem",
              padding: "4rem 0",
              flexDirection: "column",
            }}
          >
            <Text
              style={{
                fontSize: "42px",
                fontWeight: 500,
                paddingBottom: "1rem",
                color: "#FFFFFF",
              }}
            >
              Who am I?
            </Text>
            <Text
              style={{ fontSize: "24px", fontWeight: 500, color: "#FFFFFF" }}
            >
              A design enthusiast in my early 20’s currently honing my craft at
              the National Institute of Fashion Technology, Jodhpur. From my
              roots in science education to exploring the realms of graphic and
              UI/UX design, I've found my passion in crafting visual
              experiences.
            </Text>
            <Text
              style={{
                fontSize: "24px",
                fontWeight: 500,
                paddingBottom: "1rem",
                color: "#FFFFFF",
              }}
            >
              Beyond the digital canvas, I indulge in the art of cinematography
              and photography, capturing moments that resonate. As a versatile
              creator, I also delve into product design, adding a tactile
              dimension to my creative journey.
            </Text>
          </Col>
          <Col style={{ width: "15%", display: "flex", alignItems: "center" }}>
            <img
              loading="lazy"
              src={cube4Image}
              alt="cube"
              style={{
                width: "100%",
                animation: "moveUpDown 4s infinite alternate",
              }}
            />
          </Col>
        </Col>
        <Col
          style={{
            textAlign: "center",
            padding: "2rem 0",
            color: "white !important",
          }}
        >
          <Button
          onClick={()=>navigate("/")}
            type="primary"
            style={{
              backgroundColor: "#000000",
              border: "1px solid #FFFFFF",
              height:"42px"
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontWeight: 500,  }}
            >
              {" "}
              Go back to home page
            </Text>
          </Button>
        </Col>
        <Col
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            margin: "2rem",
            backgroundColor:'#00000'
          }}
        >
          {card.map((cardObj, idx) => (
                <img
                    key={idx}
                    loading="lazy"
                    src={cardObj.image}
                    alt="cube"
                    style={{ color: "#FFFFF", width: "30%" ,cursor:"pointer",backgroundColor:'#00000'}}
                    onClick={() => handleImageClick(cardObj.url)}
                />
            ))}
        </Col>
        <Col style={{ display: "flex", alignItems: "flex-end",margin:"2rem" }}>
          {" "}
          <img
            loading="lazy"
            src={arrowTop}
            alt="card"
            onClick={scrollToTop}
            style={{ cursor: "pointer" }}
          />
        </Col>
      </Col>
    </>
  );
};

export default About;
