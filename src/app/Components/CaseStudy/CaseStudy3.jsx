"use client";
import { useState } from "react";
import Link from "next/link";
import data from "../../Data/casestudy1.js";

const CaseStudy3 = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  return (
    <div className="case-page sp">
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
              <div className="video-box">
                <video
                  src={item.video}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="auto"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="heading-area">
                  <button
                    onClick={() => setSelectedVideo(item.video)}
                    className="arrow-right"
                    style={{
                      background: "transparent",
                      border: "none",
                      cursor: "pointer",
                    }}
                  >
                    <i className="bi bi-arrow-right"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for big video */}
      {selectedVideo && (
        <div className="video-modal">
          {/* Back Button */}
          <button className="close-btn" onClick={() => setSelectedVideo(null)}>
            <i className="bi bi-arrow-left"></i> Back
          </button>

          <div className="video-wrapper">
            <video
              src={selectedVideo}
              autoPlay
              controls
              style={{
                width: "90%",
                height: "auto",
                maxHeight: "90%",
                borderRadius: "10px",
                boxShadow: "0 4px 25px rgba(0,0,0,0.4)",
              }}
            />
          </div>
        </div>
      )}

      {/* Styling */}
      <style jsx>{`
        .video-box {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 396 / 428;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
          position: relative;
          transition: border 0.3s ease;
          border: 3px solid transparent;
        }
        .video-box:hover {
          border: 3px solid #3a86ff;
        }
        .heading-area {
          position: absolute;
          bottom: 10px;
          right: 10px;
          z-index: 10;
        }
        .heading-area i {
          color: #3a86ff;
          font-size: 24px;
        }
        .video-modal {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.85);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          z-index: 999;
        }
        .close-btn {
          position: absolute;
          top: 20px;
          left: 20px;
          background: #3a86ff;
          color: white;
          border: none;
          padding: 8px 14px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .close-btn:hover {
          background: #2c6cd1;
        }
        @media (max-width: 768px) {
          .video-box {
            max-width: 100%;
            border-radius: 12px;
          }
        }
        @media (max-width: 480px) {
          .heading-area i {
            font-size: 20px;
          }
        }
      `}</style>
    </div>
  );
};

export default CaseStudy3;
