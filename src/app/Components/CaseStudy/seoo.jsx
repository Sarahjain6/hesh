"use client";
import { useState } from "react";
import data from "../../Data/seoo.js"; // your data file with { image, url } for each site

const Soo = () => {
  const [fullScreenImage, setFullScreenImage] = useState(null);

  const openFullScreen = (image) => {
    setFullScreenImage(image);
  };

  const closeFullScreen = () => {
    setFullScreenImage(null);
  };

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
                <div
                  className="heading-area"
                  onClick={() => openFullScreen(item.image)}
                  title="View Fullscreen"
                >
                  <i className="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Fullscreen overlay */}
      {fullScreenImage && (
        <div className="fullscreen-overlay">
          <button className="back-btn" onClick={closeFullScreen}>
            ← Back
          </button>
          <img src={fullScreenImage} alt="Full screen" />
        </div>
      )}

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

        /* Fullscreen overlay */
        .fullscreen-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 9999;
          padding: 20px;
        }
        .fullscreen-overlay img {
          max-width: 90%;
          max-height: 80%;
          border-radius: 12px;
        }
        .back-btn {
          align-self: flex-start;
          margin-bottom: 20px;
          background: #fff;
          border: none;
          padding: 8px 14px;
          font-size: 16px;
          border-radius: 8px;
          cursor: pointer;
          font-weight: bold;
          transition: background 0.3s ease;
        }
        .back-btn:hover {
          background: #3a86ff;
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

export default Soo;
