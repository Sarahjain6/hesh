"use client";
import Link from 'next/link';
import data from '../../Data/casestudy1.js';

const CaseStudy3 = () => {
  return (
    <div className="case-page sp">
      <div className="container">
        <div
          className="row"
          style={{
            gap: '20px',
            justifyContent: 'center',
          }}
        >
          {data.map((item, i) => (
            <div
              key={i}
              className="col-lg-4 col-md-6 col-sm-12"
              style={{
                display: 'flex',
                justifyContent: 'center',
                marginBottom: '30px',
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
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    display: 'block',
                  }}
                >
                  Your browser does not support the video tag.
                </video>
                <div className="heading-area">
                  <Link href="/case/case-details" className="arrow-right">
                    <i className="bi bi-arrow-right"></i>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Styling */}
      <style jsx>{`
        .video-box {
          width: 100%;
          max-width: 400px;
          aspect-ratio: 396 / 428;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          position: relative;
          transition: border 0.3s ease;
          border: 3px solid transparent; /* No border by default */
        }

        .video-box:hover {
          border: 3px solid #3a86ff; /* Blue border on hover */
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
