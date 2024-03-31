import { Col, Typography, Image, Carousel, Row, Button } from "antd"; // Import Image component from Ant Design
import React from "react";
import imgOne from "../../Assets/images/Cmsbig 1.jpg";
import imgTwo from "../../Assets/images/oldcms02 1.jpg";
import imgThree from "../../Assets/images/Screenshot 2024-01-14 190810 1.jpg";
import imgFour from "../../Assets/images/Screenshot 2024-01-14 190956 1.svg";
import imgFive from "../../Assets/images/01 lofi 1.svg";
import imgSix from "../../Assets/images/02 lofi 1.svg";
import imgSeven from "../../Assets/images/03 lofi 1.svg";
import imgEight from "../../Assets/images/cms2 1.jpg";

import cardOne from "../../Assets/images/cardOne.svg";
import cardTwo from "../../Assets/images/cardTwo.svg";
import cardThree from "../../Assets/images/cardThree.svg";
import cardFour from "../../Assets/images/cardFour.svg";
import cardFive from "../../Assets/images/cardFive.svg";
import cardSix from "../../Assets/images/cardSix.svg";
import cardSeven from "../../Assets/images/cardSeven.svg";
import cardEight from "../../Assets/images/cardEight.svg";

import drawerOne from "../../Assets/images/drawerOne.jpg";
import drawerTwo from "../../Assets/images/drawerTwo.jpg";
import drawerThree from "../../Assets/images/drawerThree.jpg";
import drawerFour from "../../Assets/images/drawerFour.jpg";
import drawerFive from "../../Assets/images/drawerFive.svg";
import drawerSix from "../../Assets/images/drawerSix.jpg";
import drawerSeven from "../../Assets/images/drawerSeven.jpg";

import compOne from "../../Assets/images/compTwo.jpg";
import compTwo from "../../Assets/images/compOne.jpg";
import arrowTop from "../../Assets/icons/arrowWhite.svg";

import tableOne from "../../Assets/images/tableOne.jpg";
import tableTwo from "../../Assets/images/tableTwo.jpg";
import tableThree from "../../Assets/images/tableThree.jpg";
import tableFour from "../../Assets/images/tableFour.jpg";
import tableFive from "../../Assets/images/tableFive.jpg";
import tableSix from "../../Assets/images/tableSix.jpg";
import card1 from "../../Assets/images/card001.svg";
import card3 from "../../Assets/images/card003.svg";
import logo from "../../Assets/icons/Logo1 High Quality 1.jpg";
import { useNavigate } from "react-router-dom";
const { Text } = Typography;

const Product = () => {
  const carouselData = [
    [cardOne, cardTwo],
    [cardThree, cardFour],
    [cardFive, cardSix],
    [cardSeven, cardEight],
  ];
  const navigate = useNavigate();
  const card = [imgFive, imgSix, imgSeven];
  const cardOnee = [compOne, compTwo];
  const cards = [
    { image: card1, url: "/productWork" },
    { image: "", url: "/home" },
    { image: card3, url: "/url3" },
  ];
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleImageClick = (url) => {
    navigate(url);
  };
  return (
    <Col style={{backgroundColor: "#000000",}}>
    <Col style={{  padding: "4rem 15%" }}>
      <Col style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
        <Text style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "42px" }}>
          Website Redesign
        </Text>
        <Col style={{ display: "flex", justifyContent: "space-between" }}>
          <Col style={{ width: "40%" }}>
            <Text
              style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
            >
              Website redesign aims to refresh and optimize a site's look and
              functionality, addressing outdated design elements or improving
              user interface to align with current trends and user expectations.
            </Text>
          </Col>

          <Col
            style={{
              width: "40%",
              display: "flex",
              gap: "1rem",
              justifyContent: "flex-end",
            }}
          >
            <Col style={{ display: "flex", flexDirection: "column" }}>
              <Text
                style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
              >
                — Redesign
              </Text>
              <Text
                style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
              >
                — Brand Identity
              </Text>
              <Text
                style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
              >
                — Website
              </Text>
            </Col>

            <Col style={{ display: "flex", flexDirection: "column" }}>
              <Text style={{ color: "#9D9D9D" }}>— Visual design</Text>
              <Text style={{ color: "#9D9D9D" }}>— UI/UX</Text>
            </Col>
          </Col>
        </Col>
        <Image src={imgOne} alt="cube" />
        <Col style={{ display: "flex", justifyContent: "space-between" }}>
          <Col
            style={{ display: "flex", alignItems: "flex-end", width: "40%" }}
          >
            <Text
              style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "32px" }}
            >
              Original website
            </Text>
          </Col>
          <Col
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
            >
              CMS is the student website for students at National Institute of
              Fashion Technology, India. I redesigned it as it had a lot of
              flaws in it.
            </Text>
          </Col>
        </Col>

        <Col style={{ display: "flex", gap: "30px" }}>
          <Col style={{ }}>
            <Image src={imgTwo} alt="Background Image" preview={false} />{" "}
            {/* Use Ant Design Image component */}
          </Col>
          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "30px",
            }}
          >
            <Col style={{ }}>
              <Image src={imgThree} alt="Image Three" preview={false}  />{" "}
              {/* Use Ant Design Image component */}
            </Col>
            <Col style={{  }}>
              <Image src={imgFour} alt="Image Four" preview={false} />{" "}
              {/* Use Ant Design Image component */}
            </Col>
          </Col>
        </Col>
        <Col
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "42px" }}>
            Redesigned website
          </Text>
          <Text style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "42px" }}>
            (Lo-fi version)
          </Text>
        </Col>
        <Col
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
          }}
        >
          {card.map((cardObj, idx) => (
            <img
              key={idx}
              loading="lazy"
              src={cardObj}
              alt="cube"
              style={{ color: "#FFFFF", width: "32%", cursor: "pointer" }}
            />
          ))}
        </Col>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          {cardOnee.map((cardObj, idx) => (
            <img
              key={idx}
              loading="lazy"
              src={cardObj}
              alt="cube"
              style={{
                color: "#FFFFF",
                width: "50%",
                height: "56vh",
                cursor: "pointer",
              }}
            />
          ))}
        </Col>

        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: "42px",
            textAlign: "center",
          }}
        >
          (Hi-fi version)
        </Text>
        <Image src={imgEight} alt="cube" />

        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: "42px",
            marginTop: "0.5rem",
            display:"flex",
            gap:8
          }}
        >
          User Interfaces (livewise){" "}    <Image src={logo} alt="Image Four" preview={false} />{" "}

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
            <Col
              key={index}
              style={{ width: "25%", height: "80vh", margin: 0 }}
            >
              <Carousel
                effect="fade"
                style={{ width: "100% !important" }}
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
                    src={image}
                  />
                ))}
              </Carousel>
            </Col>
          ))}
        </Row>
        <Col style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "42px",
            }}
          >
            Product design
          </Text>
          <Col
            style={{
              display: "flex",
              width: "40%",
              justifyContent: "flex-end",
            }}
          >
            <Text
              style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
            >
              Product design is the art and science of creating functional and
              aesthetically pleasing items, considering user experience and
              market appeal. It involves a strategic process from concept to
              realization.
            </Text>
          </Col>

          <Col style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Col style={{ display: "flex", gap: 8 }}>
              <Image src={drawerOne} alt="drawer" />
              <Image src={drawerTwo} alt="drawer" />
              <Image src={drawerThree} alt="drawer" />
              <Col style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                <Image src={drawerFour} alt="cube" />
                <Image src={drawerFive} alt="cube" />
              </Col>
            </Col>

            <Col style={{ display: "flex", gap: 8 }}>
              <Image src={drawerSix} alt="cube" />
              <Image src={drawerSeven} alt="cube"  style={{height:'100%'}}/>
            </Col>
            <Col
              style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
            >
              <Col
                style={{
                  display: "flex",
                  width: "30%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    color: "#9D9D9D",
                    fontSize: "16px",
                    fontWeight: 500,
                    textAlign: "center",
                  }}
                >
                  Adjustable organizer for library is Customizable drawer space
                  in which you can keep all your stuff and can adjust the spaces
                  between them according to your personal use.
                </Text>
              </Col>
              <Col style={{ width: "40%" }}>
                <Image src={drawerSeven} alt="cube" />
              </Col>
            </Col>
          </Col>
        </Col>
        <Text
          style={{
            color: "#FFFFFF",
            fontWeight: 500,
            fontSize: "42px",
            marginTop: "0.5rem",
          }}
        >
          Occasional Table{" "}
        </Text>

        <Col style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <Col style={{ display: "flex", gap: 8 }}>
            <Col style={{ display: "flex", flexDirection: "column", gap: 8 }}>
              <Image src={tableOne} alt="cube" />
              <Image src={tableTwo} alt="cube" />
            </Col>
            <Image src={tableThree} alt="cube" />
          </Col>

          <Col style={{ display: "flex", gap: 8 }}>
            <Image src={tableFour} alt="cube" />
            <Image src={tableFive} alt="cube" />
            <Image src={tableSix} alt="cube" />
          </Col>
        </Col>
        <Col style={{ display: "flex" }}>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              width: "75%",
            }}
          >
            <Text
              style={{
                color: "#9D9D9D",
                fontSize: "16px",
                fontWeight: 500,
                textAlign: "center",
                width: "70%",
              }}
            >
              Website redesign aims to refresh and optimize a site's look and
              functionality, addressing outdated design elements or improving
              user interface to align with current trends and user expectations.
            </Text>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "flex-end",
              width: "25%",
            }}
          >
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
      </Col>
      
    </Col>
    <Col
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor:"#000000"
        }}
      >
        {cards.map((cardObj, idx) => (
        cardObj.image?  <img
            key={idx}
            loading="lazy"
            src={cardObj.image}
            alt="cube"
            style={{ color: "#FFFFF", width: "30%", cursor: "pointer" }}
            onClick={() => handleImageClick(cardObj.url)}
          /> : <Col style={{width:"30%", display:'flex',justifyContent:'center',alignItems:"center"}}>
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
          </Button> </Col>
        ))}
      </Col>
    </Col>

  );
};

export default Product;
