"use client";
import data from "../../Data/website.js"; // your data file with { image, url } for each site

const WebDesignGallery = () => {
  return (
    <div className="webdesign-page sp">
      <div className="container">
        <div
          className="row"
          style={{
            gap: "20px",
            justifyContent: "center",
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 col-sm-12"
              style={{
                display: "flex",
                justifyContent: "center",
                marginBottom: "30px",
              }}
            >
              <div className="site-box">
                <img
                  src={item.image}
                  alt={`Website preview ${i + 1}`}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                    borderRadius: "16px",
                  }}
                />
                <div className="heading-area">
                  {/* Open website in new tab */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="arrow-right"
                  >
                    <i className="bi bi-arrow-right"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .site-box {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 396 / 428;
          position: relative;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          transition: box-shadow 0.3s ease;
          border-radius: 16px;
          overflow: hidden;
        }
        .site-box:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
        }
        .heading-area {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 10;
          background: rgba(255, 255, 255, 0.8);
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background 0.3s ease;
        }
        .heading-area:hover {
          background: #3a86ff;
        }
        .heading-area i {
          color: #3a86ff;
          font-size: 20px;
          transition: color 0.3s ease;
        }
        .heading-area:hover i {
          color: white;
        }
        @media (max-width: 768px) {
          .site-box {
            max-width: 100%;
            border-radius: 12px;
          }
        }
      `}</style>
    </div>
  );
};

export default WebDesignGallery;
