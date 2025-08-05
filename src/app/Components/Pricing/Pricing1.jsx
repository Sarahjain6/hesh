"use client";

import PricingCard from "../Card/PricingCard";
import SectionTitle from "../Common/SectionTitle";

const Pricing1 = () => {
  const cardStyle = {
    position: "relative",
    backgroundSize: "cover",
    backgroundPosition: "center",
    borderRadius: "16px",
    padding: "40px 30px",
    minHeight: "650px",
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "center",
    overflow: "hidden",
    transition: "all 0.4s ease-in-out",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.2)",
  };

  const hoverStyle = {
    transform: "translateY(-12px) scale(1.04)",
    boxShadow: "0 25px 60px rgba(0, 0, 0, 0.45)",
  };

  const overlayStyle = {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background: "rgba(0, 0, 0, 0.3)",
    borderRadius: "16px",
    opacity: 0,
    transition: "opacity 0.4s ease-in-out",
    zIndex: 1,
  };

  const wrapperContent = {
    width: "100%",
    position: "relative",
    zIndex: 2,
    color: "#ffffff",
    textAlign: "left",
  };

  const handleMouseEnter = (e) => {
    Object.assign(e.currentTarget.style, hoverStyle);
    e.currentTarget.querySelector(".overlay").style.opacity = 1;
  };

  const handleMouseLeave = (e) => {
    Object.assign(e.currentTarget.style, cardStyle);
    e.currentTarget.querySelector(".overlay").style.opacity = 0;
  };

  return (
    <div className="pricing1 sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto text-center">
            <div className="heading1-w">
              <SectionTitle
                SubTitle="Our Team"
                Title="Our Team Helps Businesses Succeeds"
              />
            </div>
          </div>
        </div>

        <div className="space30"></div>

        <div className="row justify-content-center">
          {/* Box 1 */}
          <div className="col-lg-5 col-md-6">
            <div
              className="pricing-box-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                ...cardStyle,
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/assets/img/team/hesh1.png')",
              }}
            >
              <div className="overlay" style={overlayStyle}></div>
              <div className="content-wrapper" style={wrapperContent}>
                <PricingCard
                  addclass=""
                  title="Co-Founder and Graphic Designer"
                  content="Simran is the creative force who turned bold ideas into visual masterpieces. With a sharp eye for design and a passion for innovation, she crafts stunning visuals that make brands pop and leave a lasting impression."
                  price="Simran Khosla"
                />
              </div>
            </div>
          </div>

          {/* Box 2 */}
          <div className="col-lg-5 col-md-6">
            <div
              className="pricing-box-wrapper"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              style={{
                ...cardStyle,
                backgroundImage:
                  "linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.2)), url('/assets/img/team/hesh2.png')",
              }}
            >
              <div className="overlay" style={overlayStyle}></div>
              <div className="content-wrapper" style={wrapperContent}>
                <PricingCard
                  addclass=""
                  title="Co-Founder and CEO"
                  content="Rachit, as the head of Hesh Media, embodies a growth-oriented mindset focused on delivering excellence. He leads the team with a goal to provide the best quality services, ensuring every project is handled with care and delivers great results."
                  price="Rachit Gupta"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing1;
