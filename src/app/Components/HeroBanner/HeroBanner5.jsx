"use client";

import parse from "html-react-parser";
import Image from "next/image";
import PropTypes from "prop-types";

const HeroBanner5 = ({
  subtitle = "",
  title = "",
  content = "",
  img1,
  img2,
  shape1,
  shape2,
  shape3,
}) => {
  return (
    <div className="hero5">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Content */}
          <div className="col-lg-6">
            <div className="main-heading">
              {subtitle && (
                <p
                  className="title"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <span className="span">
                    <Image
                      src="/assets/img/logo/span5.svg"
                      alt="Decorative icon"
                      width={20}
                      height={20}
                    />
                    {subtitle}
                  </span>
                </p>
              )}

              {title && <h1 className="text-anime-style-3">{title}</h1>}

              {content && (
                <>
                  <div className="space20"></div>
                  <p data-aos="fade-right" data-aos-duration="800">
                    {parse(content)}
                  </p>
                </>
              )}

              {/* Form */}
              <div
                className="form-area"
                data-aos="fade-right"
                data-aos-duration="1200"
              >
                <form onSubmit={(e) => e.preventDefault()}>
                  <input type="email" placeholder="Your Web URL" required />
                  <div className="form-btn">
                    <button type="submit" className="theme-btn3">
                      Analyze Website{" "}
                      <span>
                        <i className="bi bi-arrow-right"></i>
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

          {/* Right Images */}
          <div className="col-lg-6">
            <div className="main-images">
              {img1 && (
                <div className="image1">
                  <Image
                    src={img1}
                    alt="Main graphic"
                    width={471}
                    height={472}
                    priority
                  />
                </div>
              )}
              {img2 && (
                <div className="image2 round-circle">
                  <Image
                    src={img2}
                    alt="Supporting graphic"
                    width={608}
                    height={604}
                  />
                </div>
              )}
              {shape1 && (
                <div className="shape1 animate1">
                  <Image
                    src={shape1}
                    alt="Shape decoration 1"
                    width={180}
                    height={100}
                  />
                </div>
              )}
              {shape2 && (
                <div className="shape2 animate2">
                  <Image
                    src={shape2}
                    alt="Shape decoration 2"
                    width={180}
                    height={99}
                  />
                </div>
              )}
              {shape3 && (
                <div className="shape3">
                  <Image
                    src={shape3}
                    alt="Shape decoration 3"
                    width={180}
                    height={99}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Prop types for better safety
HeroBanner5.propTypes = {
  subtitle: PropTypes.string,
  title: PropTypes.string,
  content: PropTypes.string,
  img1: PropTypes.string,
  img2: PropTypes.string,
  shape1: PropTypes.string,
  shape2: PropTypes.string,
  shape3: PropTypes.string,
};

export default HeroBanner5;
