"use client";
import Slider from "react-slick";
import data from "../../Data/testimonial1.json";
import SectionTitle from "../Common/SectionTitle";
import Image from "next/image";

const Testimonial1 = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 6000, // ⬅️ Slightly slower than before
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section className="sp tes1">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="col-lg-8 col-md-12">
            <div className="heading1">
              <SectionTitle
                SubTitle="Testimonial"
                Title="Client Loved Our Testimonial"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="space60" />

      <div className="container-fluid px-llg-10">
        <div className="row justify-content-center">
          <div className="tes1-all-slider-area w-100">
            <Slider {...settings}>
              {data.slice(0, 6).map((item, i) => (
                <div key={i} className="px-2">
                  <div className="tes1-box-area text-center border rounded shadow-sm h-100 p-4">
                    <ul className="stars d-flex justify-content-center p-0 m-0">
                      {[...Array(5)].map((_, j) => (
                        <li key={j} className="mx-1 list-unstyled">
                          <i className="bi bi-star-fill text-warning"></i>
                        </li>
                      ))}
                    </ul>

                    <p className="mb-3 mt-3">“{item.desc}”</p>

                    <div className="bottom-heading d-flex align-items-center justify-content-center mt-3">
                      <div className="image me-3">
                        <Image
                          src={item.img}
                          alt={`user-${i}`}
                          width={50}
                          height={50}
                          className="rounded-circle"
                        />
                      </div>
                      <div className="heading1 text-start">
                        <h6 className="mb-0">{item.title}</h6>
                        <small>{item.subTitle}</small>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial1;
