"use client";
import { useEffect } from "react";
import loadBackgroudImages from "../Common/loadBackgroudImages";
import Image from "next/image";

const Work5 = () => {
  useEffect(() => {
    loadBackgroudImages();
  }, []);

  const companyLogos = [
    { src: "/assets/img/logo/logo1.jpg", name: "Dr Yukti's Dental Studio ", link: "https://www.instagram.com/dryukti.dentalstudio" },
    { src: "/assets/img/logo/logo2.jpg", name: "Majestic Starrss by Annureett", link: "https://www.instagram.com/majesticstarrssbyannureett?igsh=ZHlnZWNqbXd3bHF5" },
    { src: "/assets/img/logo/logo3.jpg", name: "GD Goenka Toddler House", link: "https://www.instagram.com/gdgth.amr" },
    { src: "/assets/img/logo/logo4.jpg", name: "The Royal Couture", link: "https://www.instagram.com/theroyalcouture._?igsh=MTk0dXNpdGpzY2V4eg%3D%3D" },
    { src: "/assets/img/logo/logo5.jpg", name: "Naina Mehndiratta Singh", link: "https://www.instagram.com/dr_naina_gynecologist?igsh=MWFpZnVyODZlcWtmOA%3D%3D" },
    { src: "/assets/img/logo/logo6.jpg", name: "Kmaxx American Hospital", link: "https://www.instagram.com/kmaxxamericanhospital" },
    { src: "/assets/img/logo/logo7.jpg", name: "Alcon", link: "https://www.instagram.com/alconconcreteproducts/" },
    { src: "/assets/img/logo/logo8.jpg", name: "Dr Shagun", link: "https://www.instagram.com/drshagun.randhawa/" },
    { src: "/assets/img/logo/logo9.jpg", name: "Compedia", link: "https://www.instagram.com/compedia_learning/?igsh=MW9xeHpwYjZ2MzJybQ%3D%3D#" },
    { src: "/assets/img/logo/logo10.jpg", name: "Dr Gulneer Nutrition", link: "https://www.instagram.com/dr_gulneer_nutrition/?igsh=MXFoeHQ2NWx0cXRnaQ%3D%3D#" },
    { src: "/assets/img/logo/logo11.jpg", name: "Mundra Clinic", link: "https://www.instagram.com/mundradental/" },
    { src: "/assets/img/logo/logo12.jpg", name: "Dental Excellence Ludhiana", link: "https://www.instagram.com/dentalexcellence.ludhiana/https://www.instagram.com/dentalexcellence.ludhiana/" },
    { src: "/assets/img/logo/logo13.jpg", name: "Kmaxx Child Development Center", link: "https://www.instagram.com/kmaxx_cdc/" },
    { src: "/assets/img/logo/logo14.jpg", name: "City Dental Clinic Amritsar", link: "https://www.instagram.com/citydentalclinicamritsar/?igsh=MTVocGs5bWNreTlpOA%3D%3D#" },
    { src: "/assets/img/logo/logo15.jpg", name: "Dhillon", link: "https://www.instagram.com/dhillondentalstudio/" },
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

              {/* Grid container for logos */}
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  justifyContent: "center",
                  gap: "30px", // space between logos
                }}
              >
                {companyLogos.map((company, index) => (
                  <div
                    key={index}
                    style={{
                      width: "120px",
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
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
                        style={{ objectFit: "cover" }}
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
                      {company.name || "\u00A0" /* Non-breaking space if no name */}
                    </a>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work5;
