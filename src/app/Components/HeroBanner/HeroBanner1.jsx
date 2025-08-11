"use client";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const HeroBanner1 = ({
  subtitle,
  title,
  content,
  subcontent,
  shape1,
  img1,
  shape2,
  list1,
  list2,
  list3,
}) => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  return (
    <div
      className="hero1"
      data-background="/assets/img/hero/hero1-bg.jpg"
    >
      <div className="container">
        <div className="row align-items-center">
          {/* Text Section */}
          <div className="col-lg-5 col-md-12 order-2 order-lg-1 text-center text-lg-start">
            <div className="main-heading">
              <span
                className="span d-flex align-items-center justify-content-center justify-content-lg-start gap-2"
                data-aos="fade-left"
                data-aos-duration="800"
              >
                <Image
                  src="/assets/img/icons/main-span1.svg"
                  alt="icon"
                  width={20}
                  height={20}
                />
                {subtitle}
              </span>
              <h1 className="text-anime-style-3 mt-3">{title}</h1>
              <p data-aos="fade-right" data-aos-duration="800">{content}</p>
              <p
                className="has-teg"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                {subcontent}
              </p>
              <div
                className="form-area mt-4"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <form action="#" className="d-flex flex-column flex-sm-row gap-2">
                  <input
                    type="email"
                    placeholder="Your Mail"
                    className="form-control"
                  />
                  <button
                    type="submit"
                    className="theme-btn1 w-100 w-sm-auto"
                  >
                    Get started{" "}
                    <span>
                      <i className="bi bi-arrow-right"></i>
                    </span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-lg-7 col-md-12 order-1 order-lg-2 mb-4 mb-lg-0">
            <div
              className="main-images text-center"
              data-aos="zoom-out"
              data-aos-duration="700"
            >
              <div className="image1 mb-3">
                <Image
                  src={shape1}
                  alt="shape1"
                  width={666}
                  height={696}
                  className="img-fluid"
                />
              </div>
              <div className="image2 mb-3">
                <Image
                  src={img1}
                  alt="main image"
                  width={609}
                  height={636}
                  className="img-fluid"
                />
              </div>

              <div
                className="shapes shape1 animate4"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                <div className="icon">
                  <Image
                    src="/assets/img/icons/hero1-icon1.svg"
                    alt="icon1"
                    width={34}
                    height={34}
                  />
                </div>
                <p className="pera">{list1}</p>
              </div>

              <div
                className="bottom-shape round-circle2"
                data-aos="flip-right"
                data-aos-duration="700"
              >
                <Image
                  src={shape2}
                  alt="shape2"
                  width={120}
                  height={120}
                  className="img-fluid"
                />
              </div>

              <div
                className="shapes shape2 animate1"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                <div className="icon">
                  <Image
                    src="/assets/img/icons/hero1-icon2.svg"
                    alt="icon2"
                    width={34}
                    height={34}
                  />
                </div>
                <p className="pera">{list2}</p>
              </div>

              <div
                className="shapes shape3 animate3"
                data-aos="zoom-in-up"
                data-aos-duration="700"
              >
                <div className="icon">
                  <Image
                    src="/assets/img/icons/hero1-icon3.svg"
                    alt="icon3"
                    width={32}
                    height={32}
                  />
                </div>
                <p className="pera">{list3}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile specific adjustments */}
      <style jsx>{`
        @media (max-width: 768px) {
          .main-heading h1 {
            font-size: 1.8rem;
          }
          .main-heading p {
            font-size: 0.95rem;
          }
          .form-area input {
            font-size: 0.9rem;
            padding: 0.5rem;
          }
          .theme-btn1 {
            font-size: 0.9rem;
            padding: 0.5rem 1rem;
          }
          .main-images {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .main-images .image1,
          .main-images .image2 {
            max-width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroBanner1;
