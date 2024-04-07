import { Button, Col, Typography,Row,Image,Carousel } from "antd";
import React from "react";
import nftOne from "../../Assets/images/Nft 1.jpg";
import nftTwo from "../../Assets/images/Nft 2.jpg";

import sk1 from "../../Assets/images/image 35.jpg";
import sk2 from "../../Assets/images/image 36.jpg";
import sk3 from "../../Assets/images/image 38.jpg";
import sk4 from "../../Assets/images/image 39.jpg";
import dr1 from "../../Assets/images/image 40.jpg";
import dr2 from "../../Assets/images/image 41.jpg";
import dr3 from "../../Assets/images/image 42.jpg";
import dr4 from "../../Assets/images/Nft 2.jpg";

import ppr1 from "../../Assets/images/ppr1.jpg";
import ppr2 from "../../Assets/images/ppr2.jpg";
import ppr3 from "../../Assets/images/ppr3.jpg";
import ppr4 from "../../Assets/images/ppr4.jpg";
import ppr5 from "../../Assets/images/ppr5.jpg";
import ppr6 from "../../Assets/images/gif1.gif";

import left1 from "../../Assets/images/left1.jpg";
import left2 from "../../Assets/images/left2.jpg";
import left3 from "../../Assets/images/left3.jpg";

import right1 from "../../Assets/images/right1.jpg";
import right2 from "../../Assets/images/right2.jpg";
import right3 from "../../Assets/images/right3.jpg";
import right4 from "../../Assets/images/right4.jpg";

import shoot1 from "../../Assets/images/shoot1.jpg";
import shoot2 from "../../Assets/images/shoot2.jpg";

import arrowTop from "../../Assets/icons/arrowWhite.svg";

import work1 from "../../Assets/images/work1.jpg";
import work2 from "../../Assets/images/work2.jpg";
import work3 from "../../Assets/images/work3.jpg";
import work4 from "../../Assets/images/work4.jpg";
import work5 from "../../Assets/images/work5.jpg";
import work6 from "../../Assets/images/work6.jpg";


import work7 from "../../Assets/images/work7.jpg";



import nft1 from "../../Assets/images/nft1.png";
import nft2 from "../../Assets/images/nft2.png";
import nft3 from "../../Assets/images/nft3.png";
import nft4 from "../../Assets/images/nft4.png";

import nft5 from "../../Assets/images/nft5.png";

import nft01 from "../../Assets/images/nft01.jpg";
import nft02 from "../../Assets/images/nft02.png";
import nft03 from "../../Assets/images/nft03.png";
import nft04 from "../../Assets/images/nft04.png";
import nft05 from "../../Assets/images/nft05.png";
import nft06 from "../../Assets/images/nft06.png";








import card1 from "../../Assets/images/card001.svg";
import card2 from "../../Assets/images/card002.svg";
import card3 from "../../Assets/images/card003.svg";

import gif from "../../Assets/images/gif2.gif";
import { useNavigate } from "react-router-dom";

const MiscellaneousWork = () => {
  const navigate = useNavigate();
  const { Text } = Typography;
  const skArr = [
    { key: 1, image: sk1 },
    { key: 2, image: sk2 },
    { key: 3, image: sk3 },
    { key: 4, image: sk4 },
  ];
  const workArr = [
    { key: 1, image: work1, height: "45vh", width: "32.5%" },
    { key: 2, image: work2, height: "45vh", width: "32.5%" },
    { key: 3, image: work3, height: "45vh", width: "32.5%" },
    { key: 4, image: work4, height: "45vh", width: "32.5%" },
    { key: 5, image: work5, height: "45vh", width: "42.5%" },
    { key: 6, image: work6, height: "45vh", width: "22.5%" },
    { key: 7, image: work7, height: "110vh", width: "98.5%" },
  ];

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const shoot = [
    { key: 1, image: shoot1, height: "100vh", width: "40%" },
    {
      key: 2,
      image: gif,
      height: "60vh",
      Text: "Behind the scenes",
      width: "20%",
    },
    { key: 3, image: shoot2, height: "100vh", width: "40%" },
  ];

  const cards = [
    { key: 1, image: card2, url: "/graphic-work" },
    { key: 2, image: "", url: "/home" },
    { key: 3, image: card1, url: "/product-work" },
  ];

  const handleImageClick = (url) => {
    navigate(url);
  };


  const carouselData = [
    [nft1,nft2,nft3,nft4,nft5],
    [nft01,nft02,nft03,nft04,nft05,nft06 ],
  ];




  const drArr = [
    { key: 1, image: dr1 },
    { key: 2, image: dr2 },
    { key: 3, image: dr3 },
    { key: 4, image: dr4 },
  ];
  const cardOnee = [
    { key: 1, image: nftOne },
    { key: 2, image: nftTwo },
  ];

  const papper = [
    { key: 1, image: ppr6 ,height:'45vh'},
    { key: 2, image: ppr5 },
    { key: 3, image: ppr4 },
    { key: 4, image: ppr3 },
    { key: 5, image: ppr2 },
    { key: 6, image: ppr1 },
  ];
  return (
    <Col style={{ backgroundColor: "#000000" }}>
      <Col
        style={{
          padding: "4rem 7%",
          display: "flex",
          flexDirection: "column",
          gap: "2rem",
        }}
      >
        <Col style={{ width: "50%", textAlign: "center", margin: "0 auto" }}>
          <Text style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 500 }}>
            This page embodies my authentic self—I pursue a multitude of
            interests, embracing the freedom to explore, experiment, and learn.
            I thrive on trying new things, accepting failures as valuable
            lessons, and continually refining my path based on what truly
            resonates with my passions and desires.
          </Text>
        </Col>

        <Text style={{ color: "#FFFFFF", fontSize: "42px", fontWeight: 500 }}>
          NFT’s
        </Text>
        <Col
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            gap:"1rem"
          }}
        >
          {carouselData.map((images, index) => (
            <Col key={index} style={{ width: "49%", margin: 0, }}>
              <Carousel
                effect="fade"
                style={{ height: "400px", width: "100% !important" }}
                autoplay
                slidesToShow={1}
                autoplaySpeed={2500}
                speed={300}
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
                    height="400px"
                    src={image}
                  />
                ))}
              </Carousel>
            </Col>
          ))}
        </Col>

        <Text style={{ color: "#FFFFFF", fontSize: "42px", fontWeight: 500 }}>
          Sketching and Drawing
        </Text>
        <Col
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Col style={{ display: "flex", gap: "0.5rem" }}>
            {skArr.map((cardObj) => (
              <img
                key={cardObj.key}
                loading="lazy"
                src={cardObj.image}
                alt="cube"
                style={{
                  color: "#FFFFF",
                  width: "24.5%",
                  height: "30vh",
                }}
              />
            ))}
          </Col>
          <Col style={{ display: "flex", gap: "0.5rem" }}>
            {drArr.map((cardObj) => (
              <img
                key={cardObj.key}
                loading="lazy"
                src={cardObj.image}
                alt="cube"
                style={{
                  color: "#FFFFF",
                  width: "24.5%",
                  height: "30vh",
                }}
              />
            ))}
          </Col>
        </Col>
        <Text style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 500 }}>
          50 days 50 black&white sketches
        </Text>

        <Col style={{ display: "flex" }}>
          {papper.map((cardObj) => (
            <img
              key={cardObj.key}
              loading="lazy"
              src={cardObj.image}
              alt="cube"
              style={{
                color: "#FFFFF",
                width: "16.6%",
                height: cardObj.height?cardObj.height: "32vh",
              }}
            />
          ))}
        </Col>

        <Col
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: "42px", fontWeight: 500 }}>
            Photography
          </Text>
          <Col
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Text
              style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 500 }}
            >
              Product photo shoots
            </Text>
            <Text
              style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 500 }}
            >
              Fun fact - The dagger and the sword below is made by me;)
            </Text>
          </Col>
        </Col>

        <Col
          style={{
            display: "flex",
            gap: "0.5rem",
            backgroundColor: "#FFFFFF",
            padding: "0.5rem",
          }}
        >
          <Col
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              backgroundColor: "#FFFFFF",
            }}
          >
            <img
              loading="lazy"
              src={left1}
              alt="cube"
              // style={{
              //   color: "#FFFFF",
              //   width: "16.6%",
              //   height: "30vh",
              // }}
              style={{
                height: "60vh",

              }}
            />
            <img
              loading="lazy"
              src={left2}
              alt="cube"
              style={{
                height: "105vh",
              }}
            />
            <img
              loading="lazy"
              src={left3}
              alt="cube"
              style={{
               
                height: "50vh",
              }}
            />
          </Col>

          <Col
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
              width: "50%",
            }}
          >
            <Col style={{ display: "flex", gap: "0.5rem" }}>
              <img
                loading="lazy"
                src={right1}
                alt="cube"
                style={{
                  //  color: "#FFFFF",
                  width: "49.5%",
                  height: "75vh",
                }}
              />

              <img
                loading="lazy"
                src={right2}
                alt="cube"
                style={{
                  //  color: "#FFFFF",
                  width: "49%",
                  height: "75vh",
                }}
              />
            </Col>

            <Col
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
              }}
            >
              <img
                loading="lazy"
                src={right3}
                alt="cube"
                style={{
                  width: "100%",
                  height: "60vh",

                }}
              />

              <img
                loading="lazy"
                src={right4}
                alt="cube"
                style={{
                  width: "100%",
                  height: "80vh",

                }}
              />
            </Col>
          </Col>
        </Col>
        <Text style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 500 }}>
          More shoots{" "}
        </Text>

        <Col style={{ display: "flex", gap: "2rem " }}>
          {shoot.map((cardObj) => (
            <Col
              key={cardObj.key}
              style={{
                gap: "1rem",
                width: cardObj.width,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{ color: "#FFFFFF", fontSize: "16px", fontWeight: 500 }}
              >
                {cardObj.Text}{" "}
              </Text>
              <img
                // key={cardObj.key}
                loading="lazy"
                src={cardObj.image}
                alt="cube"
                style={{
                  color: "#FFFFF",
                  width: "100%",
                  height: cardObj.height,
                }}
              />
            </Col>
          ))}
        </Col>
        <Text style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 500 }}>
          More work{" "}
        </Text>

        <Col
          style={{
            display: "flex",
            gap: "0.5rem",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {workArr.map((cardObj) => (
            <img
              key={cardObj.key}
              loading="lazy"
              src={cardObj.image}
              alt="cube"
              style={{
                width: cardObj.width,
                height: cardObj.height,
              }}
            />
          ))}
        </Col>
        <Col
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <Text style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 500 }}>
            Latest{" "}
          </Text>
          <Text style={{ color: "#FFFFFF", fontSize: "28px", fontWeight: 500 }}>
            learning about 3D and more lately...
          </Text>
        </Col>
      </Col>

      <Col
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "#000000",
        }}
      >
        {cards.map((cardObj, idx) =>
          cardObj.image ? (
            <img
              key={cardObj.key}
              loading="lazy"
              src={cardObj.image}
              alt="cube"
              style={{ color: "#FFFFF", width: "30%", cursor: "pointer" }}
              onClick={() => handleImageClick(cardObj.url)}
            />
          ) : (
            <Col
              style={{
                width: "30%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <img
                loading="lazy"
                src={arrowTop}
                alt="card"
                onClick={scrollToTop}
                style={{ cursor: "pointer" }}
              />
              <Button
                onClick={() => navigate("/")}
                type="primary"
                style={{
                  backgroundColor: "#000000",
                  border: "1px solid #FFFFFF",
                  height: "42px",
                }}
              >
                <Text style={{ color: "#FFFFFF", fontWeight: 500 }}>
                  {" "}
                  Go back to home page
                </Text>
              </Button>{" "}
            </Col>
          )
        )}
      </Col>
    </Col>
  );
};

export default MiscellaneousWork;
