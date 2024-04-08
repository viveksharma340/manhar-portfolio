import { Button, Carousel, Col, Image, Row, Typography } from "antd";
import React, { useEffect } from "react";
import liv1 from "../../Assets/images/liv1.png";

import liv2 from "../../Assets/images/liv2.png";
import liv3 from "../../Assets/images/liv3.png";
import liv4 from "../../Assets/images/liv4.png";
import liv5 from "../../Assets/images/liv5.png";

import liv11 from "../../Assets/images/liv11.png";
import liv12 from "../../Assets/images/liv12.png";
import liv21 from "../../Assets/images/liv21.png";

import liv22 from "../../Assets/images/liv22.png";

import banner from "../../Assets/images/NiftBanner1.png";

import ill1 from "../../Assets/images/ILL1.png";
import ill2 from "../../Assets/images/ILL2.png";
import ill3 from "../../Assets/images/ILL3.png";
import ill4 from "../../Assets/images/ILL4.png";

import down1 from "../../Assets/images/down1.png";
import down2 from "../../Assets/images/down2.png";
import down3 from "../../Assets/images/down3.png";
import down4 from "../../Assets/images/down4.png";
import arrowTop from "../../Assets/icons/arrowWhite.svg";

import down5 from "../../Assets/images/down5.png";

import print1 from "../../Assets/images/print1.jpg";
import print2 from "../../Assets/images/print2.jpg";
import print3 from "../../Assets/images/print3.jpg";
import print4 from "../../Assets/images/print4.jpg";
import print5 from "../../Assets/images/print5.jpg";

import print6 from "../../Assets/images/print6.jpg";

import c1 from "../../Assets/images/c1.jpg";
import c2 from "../../Assets/images/c2.jpg";
import c3 from "../../Assets/images/c3.jpg";
import c5 from "../../Assets/images/c5.jpg";
import c6 from "../../Assets/images/c6.jpg";

import c7 from "../../Assets/images/c7.jpg";

import cc1 from "../../Assets/images/cc1.jpg";
import cc2 from "../../Assets/images/cc2.jpg";
import cc3 from "../../Assets/images/cc3.jpg";

import cc4 from "../../Assets/images/cc4.jpg";

import bluestack from "../../Assets/images/Bluestacks Banner.png";

import boat1 from "../../Assets/images/boat1.png";
import boat2 from "../../Assets/images/boat2.png";
import boat3 from "../../Assets/images/boat3.png";

import boat4 from "../../Assets/images/boat4.png";

import baln from "../../Assets/images/Portfolio Illustration mockup 4 1.png";

import boat5 from "../../Assets/images/Bluestacks01 1.png";
import boat6 from "../../Assets/images/Bluestacks02 1.png";

import card1 from "../../Assets/images/card001.svg";
import card2 from "../../Assets/images/card002.svg";
import card3 from "../../Assets/images/card003.svg";
import { useNavigate } from "react-router-dom";

const Livewise = () => {
  const { Text } = Typography;
  const navigate = useNavigate();
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  useEffect(()=>{
    scrollToTop()

  },[])
  const workArr = [
    { key: 1, image: down1, height: "70vh", width: "59%" },
    { key: 2, image: down2, height: "70vh", width: "39%" },
    { key: 3, image: down3, height: "45vh", width: "34.2%" },
    { key: 4, image: down4, height: "45vh", width: "29.4%" },
    { key: 5, image: down5, height: "45vh", width: "33.1%" },
  ];
  const cckArr = [
    { key: 1, image: cc2, height: "40vh", width: "99.5%" },
    { key: 2, image: cc3, height: "25vh", width: "48.3%" },
    { key: 3, image: cc4, height: "25vh", width: "48.3%" },
  ];

  const printArr = [
    { key: 1, image: print1, height: "100vh", width: "39%" },
    { key: 2, image: print2, height: "90vh", width: "59%" },
    { key: 3, image: print3, height: "90vh", width: "59%" },
    { key: 4, image: print4, height: "100vh", width: "39%", margin: "-4.5rem" },
    { key: 5, image: print5, height: "65vh", width: "54%" },
    { key: 6, image: print6, height: "65vh", width: "44%" },
  ];

  const cards = [
    { key: 1, image: card1, url: "/product-work", width: "25%" },
    { key: 2, image: baln, url: "", width: "40%" },
    { key: 3, image: card3, url: "/miscellaneous-work", width: "25%" },
  ];

  const handleImageClick = (url) => {
    navigate(url);
  };

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
  const carouselDataII = [
    [
      { key: 1, image: c1 },
      { key: 2, image: c2 },
    ],
    [
      { key: 1, image: c3 },
      { key: 2, image: c5 },
    ],
    [
      { key: 1, image: c6 },
      { key: 2, image: c7 },
    ],
  ];
  const carouselDataIII = [
    [
      { key: 1, image: boat1 },
      { key: 2, image: boat2 },
    ],
    [
      { key: 1, image: boat3 },
      { key: 2, image: boat4 },
    ],
  ];

  const carouselDataI = [
    [
      { key: 1, image: ill1 },
      { key: 2, image: ill2 },
    ],
    [
      { key: 1, image: ill3 },
      { key: 2, image: ill4 },
    ],
  ];

  return (
    <Col style={{ backgroundColor: "#000000" }}>
      <Col style={{ padding: "4rem 7%" }}>
        <Col style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
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
                <Text style={{ color: "#9D9D9D", fontSize: "16px",
                    fontWeight: 500, }}>— Visual design</Text>
                <Text style={{ color: "#9D9D9D", fontSize: "16px",
                    fontWeight: 500, }}>— UI/UX</Text>
              </Col>
            </Col>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "right",
              paddingBottom: "1rem",
            }}
          >
            <Button
              style={{
                backgroundColor: "#E2FFFE",
                color: "#00000",
                fontWeight: 500,
                height: "55px",
                width: "217px",
              }}
              onClick={() => window.open('https://play.google.com/store/apps/details?id=in.livewise&hl=en-IN', '_blank')}

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
                  height: "90vh",
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
                    height: "55vh",
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
                    height: "55vh",
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
                    height: "112.5vh",
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
                    height: "55vh",
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
                    <Col key={index} style={{ width: "47.5%", margin: 0 }}>
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
                                height: "55vh",
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

          {/* <Col style={{ display: "flex", flexDirection: "column", gap: "2rem" }}> */}
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "42px",
              marginTop: "3rem",
            }}
          >
            Illustrations
          </Text>
          <Col style={{ display: "flex", justifyContent: "space-between" }}>
            <Col style={{ width: "40%" }}>
              <Text
                style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
              >
                A visual poetry of vibrant hues and intricate lines,
                illustrations are windows to worlds where dreams and reality
                converge in a delicate embrace.
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
                  — Vector
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
                  — Hand drawn
                </Text>
              </Col>

              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ color: "#9D9D9D"  , fontSize: "16px",
                    fontWeight: 500,}}>— Visual design</Text>
                <Text style={{ color: "#9D9D9D" , fontSize: "16px",
                    fontWeight: 500,}}>— Aesthetic</Text>
              </Col>
            </Col>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "right",
              paddingBottom: "1rem",
            }}
          >
            <Button
              style={{
                backgroundColor: "#FFEDDC",
                color: "#00000",
                fontWeight: 500,
                height: "55px",
                width: "217px",
                display:"flex",
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                padding:'1rem'
              }}
              onClick={() => window.open('https://www.nift.ac.in/jodhpur/careers', '_blank')}

            >
              <Text
                style={{
                  fontWeight: 500,
                  fontSize: "24px",
                  textDecoration: "underLine",
                }}
              >
                Link to site
              </Text>
              <Text
                style={{
                  // fontWeight: 500,
                  fontSize: "12px",
                }}
              >
                where this is being used
              </Text>
            </Button>
          </Col>

          <Image
            //   key={cardObj.key}
            loading="lazy"
            src={banner}
            alt="cube"
            style={{
              color: "#FFFFF",
              width: "100%",
              // height: "102.5vh",
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
            {carouselDataI.map((images, index) => (
              <Col key={index} style={{ width: "49.3%", margin: 0 }}>
                <Carousel
                  effect="fade"
                  // style={{ width: "100% !important" }}
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
                          height: "70vh",
                        }}
                        width={"100%"}
                        key={image.key}
                        src={image.image}
                      />
                    </div>
                  ))}
                </Carousel>
              </Col>
            ))}
          </Col>

          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "42px",
              marginTop: "3rem",
            }}
          >
            Dowo
          </Text>
          <Col style={{ display: "flex", justifyContent: "space-between" }}>
            <Col style={{ width: "40%" }}>
              <Text
                style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
              >
                'DOWO' provides any kind of wood to anyone who wants to create
                something, doesn 't matter you are a student or a working
                professional with a small team if you need wood we are the one
                for you.
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
                <Text style={{ color: "#9D9D9D", fontSize: "16px",
                    fontWeight: 500, }}>— Visual design</Text>
                <Text style={{ color: "#9D9D9D", fontSize: "16px",
                    fontWeight: 500, }}>— Advertisements</Text>
              </Col>
            </Col>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "right",
              paddingBottom: "1rem",
            }}
          >
            <Button
              style={{
                fontWeight: 500,
                height: "55px",
                backgroundColor: "#000000",
                // width: "217px",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",

                  fontWeight: 500,
                  fontSize: "24px",
                  // textDecoration: "underLine",
                }}
              >
                Hypothetical Brand{" "}
              </Text>
            </Button>
          </Col>
          <Col
            style={{
              display: "flex",
              gap: "1rem",
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

          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "42px",
              marginTop: "3rem",
            }}
          >
            Print Design
          </Text>
          <Col style={{ display: "flex", justifyContent: "space-between" }}>
            <Col style={{ width: "40%" }}>
              <Text
                style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
              >
                "In the realm of print design, every pixel finds its soulmate in
                the printed realm, crafting a narrative that transcends the
                digital, inviting touch and admiration in the delicate dance of
                ink and paper."
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
                  — Magazine
                </Text>
                <Text
                  style={{
                    color: "#9D9D9D",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  — Photography
                </Text>
                <Text
                  style={{
                    color: "#9D9D9D",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  — Typography
                </Text>
              </Col>

              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ color: "#9D9D9D", fontSize: "16px",
                    fontWeight: 500, }}>— Print design</Text>
                <Text style={{ color: "#9D9D9D", fontSize: "16px",
                    fontWeight: 500, }}>— Cards</Text>
              </Col>
            </Col>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "right",
              paddingBottom: "1rem",
            }}
          >
            <Button
              style={{
                fontWeight: 500,
                height: "55px",
                backgroundColor: "#000000",
                // width: "217px",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",

                  fontWeight: 500,
                  fontSize: "24px",
                  // textDecoration: "underLine",
                }}
              >
                CMYK Stuff
              </Text>
            </Button>
          </Col>
          <Col
            style={{
              display: "flex",
              gap: "1rem",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
          >
            {printArr.map((cardObj) => (
              <img
                key={cardObj.key}
                loading="lazy"
                src={cardObj.image}
                alt="cube"
                style={{
                  marginTop: cardObj.margin ? cardObj.margin : 0,
                  width: cardObj.width,
                  height: cardObj.height,
                }}
              />
            ))}
          </Col>

          <Col
            style={{
              display: "flex",
              //   flexWrap: "wrap",
              justifyContent: "center",
              width: "100%",
              gap: "1rem",
            }}
          >
            {carouselDataII.map((images, index) => (
              <Col key={index} style={{ width: "32.4%", margin: 0 }}>
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

          <Col style={{ display: "flex", width: "100%", gap: "1rem" }}>
            <Col style={{ width: "50%" }}>
              <img
                loading="lazy"
                style={{
                  margin: 0,
                  padding: 0,
                  height: "68vh",
                }}
                width={"100%"}
                src={cc1}
              />
            </Col>

            <Col
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                width: "50%",
                justifyContent: "center",
              }}
            >
              {cckArr.map((cardObj) => (
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
          </Col>

          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "42px",
              marginTop: "3rem",
            }}
          >
            Social Media
          </Text>
          <Col style={{ display: "flex", justifyContent: "space-between" }}>
            <Col style={{ width: "40%" }}>
              <Text
                style={{ color: "#9D9D9D", fontSize: "16px", fontWeight: 500 }}
              >
                "In the realm of social media design, creativity weaves a
                tapestry of thumb-stopping visuals, transforming timelines into
                vibrant galleries where aesthetics dance harmoniously with
                engagement, creating a visual symphony for the digital era."
              </Text>
            </Col>
            — Instagram Posts — Carousals — Short Banner — Brand Promotion —
            Advertisements
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
                  — Instagram Posts
                </Text>
                <Text
                  style={{
                    color: "#9D9D9D",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  — Carousals
                </Text>
                <Text
                  style={{
                    color: "#9D9D9D",
                    fontSize: "16px",
                    fontWeight: 500,
                  }}
                >
                  — Short Banner
                </Text>
              </Col>

              <Col style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ color: "#9D9D9D", fontSize: "16px",
                    fontWeight: 500, }}>— Brand Promotion</Text>
                <Text style={{ color: "#9D9D9D" , fontSize: "16px",
                    fontWeight: 500,}}>— Advertisements</Text>
              </Col>
            </Col>
          </Col>
          <Col
            style={{
              display: "flex",
              justifyContent: "right",
              paddingBottom: "1rem",
            }}
          >
            <Button
              style={{
                fontWeight: 500,
                height: "55px",
                backgroundColor: "#000000",
                // width: "217px",
              }}
            >
              <Text
                style={{
                  color: "#FFFFFF",

                  fontWeight: 500,
                  fontSize: "24px",
                  // textDecoration: "underLine",
                }}
              >
                The time of Gen Z
              </Text>
            </Button>
          </Col>
          <img loading="lazy" src={bluestack} alt="cube" />
          <Col style={{ display: "flex", gap: "1rem", width: "100%" }}>
            <Col
              style={{
                display: "flex",
                //   flexWrap: "wrap",
                justifyContent: "center",
                width: "54%",
                gap: "1rem",
              }}
            >
              {carouselDataIII.map((images, index) => (
                <Col
                  key={index}
                  style={{ width: index === 0 ? "59%" : "39%", margin: 0 }}
                >
                  <Carousel
                    effect="fade"
                    // style={{ width: "100% !important" }}
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
                            height: "73vh",
                          }}
                          width={"100%"}
                          key={image.key}
                          src={image.image}
                        />
                      </div>
                    ))}
                  </Carousel>
                </Col>
              ))}
            </Col>
            <Col style={{ display: "flex", gap: "2px", width: "44.5%" }}>
              <img
                loading="lazy"
                style={{
                  margin: 0,
                  padding: 0,
                  height: "73vh",
                }}
                width={"50%"}
                src={boat5}
              />
              <img
                loading="lazy"
                style={{
                  margin: 0,
                  padding: 0,
                  height: "73vh",
                }}
                width={"50%"}
                src={boat6}
              />
            </Col>
          </Col>
          <Text
            style={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "32px",
              marginTop: "3rem",
              textAlign: "center",
            }}
          >
            View more of my work;)
          </Text>
          <Col
            style={{
              // width: "40%",
             position:'absolute',
             right: '4rem',
             zIndex: 100,
             bottom: '-10rem'

            }}
          >
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
      <Col
        style={{
          display: "flex",
          gap: "2rem",
          justifyContent: "center",
          padding: "2rem",
          backgroundColor: "#000000",
        }}
      >
        {cards.map(
          (cardObj, idx) => (
            // cardObj.image ? (
            <img
              key={cardObj.key}
              loading="lazy"
              src={cardObj.image}
              alt="cube"
              style={{
                color: "#FFFFF",
                width: cardObj.width,
                cursor: "pointer",
              }}
              onClick={() => handleImageClick(cardObj.url)}
            />
          )
          // ) : (
          // <Col
          //   style={{
          //     width: "30%",
          //     display: "flex",
          //     justifyContent: "center",
          //     alignItems: "center",
          //     flexDirection: "column",
          //     gap: "2rem",
          //   }}
          // >
          //   <img
          //     loading="lazy"
          //     src={arrowTop}
          //     alt="card"
          //     onClick={scrollToTop}
          //     style={{ cursor: "pointer" }}
          //   />
          //   <Button
          //     onClick={() => navigate("/")}
          //     type="primary"
          //     style={{
          //       backgroundColor: "#000000",
          //       border: "1px solid #FFFFFF",
          //       height: "42px",
          //     }}
          //   >
          //     <Text style={{ color: "#FFFFFF", fontWeight: 500 }}>
          //       {" "}
          //       Go back to home page
          //     </Text>
          //   </Button>{" "}
          // </Col>
          // )
        )}
      </Col>
      <Col style={{display:"flex",justifyContent:'flex-end',padding:'3rem'}}>
      <Button
              style={{
                fontWeight: 500,
                height: "55px",
                backgroundColor: "#000000",
                // width: "217px",
              }}
              onClick={() => window.open('https://www.instagram.com/manhar.bhola', '_blank')}

            >
              <Text
                style={{
                  color: "#FFFFFF",
                  
                  fontWeight: 500,
                  fontSize: "24px",
                  // textDecoration: "underLine",
                }}
                >
Say Hello              </Text>
            </Button>
                </Col>
    </Col>
  );
};

export default Livewise;
