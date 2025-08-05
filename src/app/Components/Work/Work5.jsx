"use client";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Slider from "react-slick";
import Image from "next/image";

const Work5 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      { breakpoint: 1399, settings: { slidesToShow: 5 } },
      { breakpoint: 1199, settings: { slidesToShow: 3 } },
      { breakpoint: 575, settings: { slidesToShow: 1 } },
    ],
  };

  const companyLogos = [
    { src: "/assets/img/logo/logo1.jpg", name: "", link: "#" },
    { src: "/assets/img/logo/logo2.jpg", name: "", link: "#" },
    { src: "/assets/img/logo/logo3.jpg", name: "", link: "#" },
    { src: "/assets/img/logo/logo4.jpg", name: "", link: "#" },
    { src: "/assets/img/logo/logo5.jpg", name: "", link: "#" },
    { src: "/assets/img/logo/logo6.jpg", name: "Company Six", link: "#" },
    { src: "/assets/img/logo/logo7.jpg", name: "Company Seven", link: "#" },
    { src: "/assets/img/logo/logo8.jpg", name: "Company Eight", link: "#" },
    { src: "/assets/img/logo/logo9.jpg", name: "Company Nine", link: "#" },
  ];

  return (
    <div>
      <div
        className="about-team"
        data-background="/assets/img/bg/about-team-bg.jpg"
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-6 m-auto text-center">
              <div className="heading1-w">
                <p className="title">
                  <span className="span">
                    <Image
                      src="/assets/img/icons/span1-w.svg"
                      alt="img"
                      width={20}
                      height={20}
                    />
                    Our expert team
                  </span>
                </p>
                <h2>Experts Social Media Marketing</h2>
              </div>
            </div>
          </div>
          <img
            src="/assets/img/team/about-team-main.png"
            alt=""
            className="main-img"
          />
        </div>
      </div>

      <div className="about-team-brands py-10">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 brands-bg text-center">
              <div className="heading mb-6">
                <p>Trusted By Top Companies</p>
              </div>
              <div className="team-logo-slider owl-carousel">
                <Slider {...settings}>
                  {companyLogos.map((company, index) => (
                    <div
                      key={index}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0 12px",
                      }}
                    >
                      <div
                        style={{
                          width: "120px",
                          height: "120px",
                          borderRadius: "50%",
                          overflow: "hidden",
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                        }}
                      >
                        <Image
                          src={company.src}
                          alt={`img${index + 1}`}
                          width={120}
                          height={120}
                          style={{
                            width: "100%",
                            height: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                      <a
                        href={company.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          marginTop: "10px",
                          fontSize: "16px",
                          fontWeight: "600",
                          textDecoration: "none",
                          color: "#333",
                          textAlign: "center",
                          display: "block",
                          transition: "color 0.3s",
                        }}
                        onMouseEnter={(e) =>
                          (e.currentTarget.style.color = "#007bff")
                        }
                        onMouseLeave={(e) =>
                          (e.currentTarget.style.color = "#333")
                        }
                      >
                        {company.name}
                      </a>
                    </div>
                  ))}
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work5;