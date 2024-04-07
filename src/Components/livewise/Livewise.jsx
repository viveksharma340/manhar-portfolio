import { Button, Carousel, Col, Image, Row, Typography } from "antd";
import React from "react";
import liv1 from "../../Assets/images/liv1.png";

import liv2 from "../../Assets/images/liv2.png";
import liv3 from "../../Assets/images/liv3.png";
import liv4 from "../../Assets/images/liv4.png";
import liv5 from "../../Assets/images/liv5.png";

import liv11 from "../../Assets/images/liv11.png";
import liv12 from "../../Assets/images/liv12.png";
import liv21 from "../../Assets/images/liv21.png";
import liv22 from "../../Assets/images/liv22.png";

const Livewise = () => {
  const { Text } = Typography;

  const carouselData = [
    [
      { key: 1, image: liv11 },
      { key: 2, image: liv12 },
    ],
    [
      { key: 3, image: liv21 },
      { key: 4, image: liv22 },
    ],
  ];

  return (
    <Col style={{ backgroundColor: "#000000" }}>
      <Col style={{ padding: "4rem 7%" }}>
        <Col style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
          <Text style={{ color: "#FFFFFF", fontWeight: 500, fontSize: "42px" }}>
            Livewise{" "}
          </Text>
          <Col style={{ display: "flex", justifyContent: "space-between" }}>
            <Col style={{ width: "40%" }}>
              <Text
                style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
              >
                Securely store your key financial info like Assets, Liabilities
                & Insurances. We ensures it gets to your nominee after you are
                gone.
              </Text>
            </Col>

            <Col
              style={{
                width: "40%",
                display: "flex",
                gap: "2rem",
                justifyContent: "flex-end",
              }}
            >
              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Text
                  style={{
                    color: "#9D9D9D",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  — Logo
                </Text>
                <Text
                  style={{
                    color: "#9D9D9D",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  — Brand Identity
                </Text>
                <Text
                  style={{
                    color: "#9D9D9D",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  — Assets
                </Text>
              </Col>

              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ color: "#9D9D9D" }}>— Visual design</Text>
                <Text style={{ color: "#9D9D9D" }}>— UI/UX</Text>
              </Col>
            </Col>
          </Col>
          <Col style={{ display: "flex", justifyContent: "right" }}>
            <Button
              style={{
                backgroundColor: "#E2FFFE",
                color: "#00000",
                fontWeight: 500,
                height: "55px",
                width: "217px",
              }}
            >
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: "24px",
                  textDecoration: "underLine",
                }}
              >
                Link to app
              </Text>
            </Button>
          </Col>

          <Col
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <Col>
              <img
                //   key={cardObj.key}
                loading="lazy"
                src={liv1}
                alt="cube"
                style={{
                  color: "#FFFFF",
                  width: "100%",
                  height: "80vh",
                }}
              />
            </Col>

            <Col style={{ display: "flex", gap: "1rem" }}>
              <Col
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  width: "33%",
                }}
              >
                <img
                  //   key={cardObj.key}
                  loading="lazy"
                  src={liv2}
                  alt="cube"
                  style={{
                    color: "#FFFFF",
                    width: "100%",
                    height: "50vh",
                  }}
                />

                <img
                  //   key={cardObj.key}
                  loading="lazy"
                  src={liv3}
                  alt="cube"
                  style={{
                    color: "#FFFFF",
                    width: "100%",
                    height: "50vh",
                  }}
                />
              </Col>
              <Col style={{ width: "33%" }}>
                <img
                  //   key={cardObj.key}
                  loading="lazy"
                  src={liv4}
                  alt="cube"
                  style={{
                    color: "#FFFFF",
                    width: "100%",
                    height: "102.5vh",
                  }}
                />
              </Col>
              <Col
                style={{
                  width: "33%",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <img
                  //   key={cardObj.key}
                  loading="lazy"
                  src={liv5}
                  alt="cube"
                  style={{
                    color: "#FFFFF",
                    width: "100%",
                    height: "50vh",
                  }}
                />

                <Col
                  style={{
                    display: "flex",
                    //   flexWrap: "wrap",
                    justifyContent: "center",
                    width: "100%",
                    gap: "1rem",
                  }}
                >
                  {carouselData.map((images, index) => (
                    <Col
                      key={index}
                      style={{ width: "47.5%", height: "80vh", margin: 0 }}
                    >
                      <Carousel
                        effect="fade"
                        style={{ width: "100% !important" }}
                        autoplay
                        slidesToShow={1}
                        autoplaySpeed={2500}
                        speed={200}
                        pauseOnHover={false}
                        infinite={true}
                        className="carouselParent"
                      >
                        {images.map((image, idx) => (
                          <div key={image.key}>
                            <img
                              loading="lazy"
                              style={{
                                margin: 0,
                                padding: 0,
                                height: "50vh",
                              }}
                              width={"100%"}
                              key={idx}
                              src={image.image}
                            />
                          </div>
                        ))}
                      </Carousel>
                    </Col>
                  ))}
                </Col>
              </Col>
            </Col>
          </Col>
        </Col>
      </Col>
    </Col>
  );
};

export default Livewise;
