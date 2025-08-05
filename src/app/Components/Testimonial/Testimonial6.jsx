import Image from 'next/image';
import data from '../../Data/testimonial3.json';
import SectionTitle from '../Common/SectionTitle';

const Testimonial6 = () => {

    return (
      <div className="testimonial-page-sec sp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 m-auto text-center">
              <div className="heading1">
              <SectionTitle
                SubTitle="Testimonial"
                Title="Client Loved Our Testimonial"
            ></SectionTitle>  
              </div>
          </div>
        </div>
        <div className="space30"></div>
        <div className="row">

        {data.map((item, i) => (
          <div key={i} className="col-lg-4 col-md-6">
              <div className="tes-box">
                  <div className="stars">
                      <ul>
                      <li><i className="bi bi-star-fill"></i></li>
                      <li><i className="bi bi-star-fill"></i></li>
                      <li><i className="bi bi-star-fill"></i></li>
                      <li><i className="bi bi-star-fill"></i></li>
                      <li><i className="bi bi-star-fill"></i></li>
                      </ul>
                  </div>
                  <p> {item.desc}</p>
                  <div className="bottom">
                      <div className="image">
                      <Image src="/assets/img/testimonial/tes-img1.png" alt="img" width={60} height={60}   />
                      </div>
                      <div className="content">
                          <h5><a href="#">{item.title}</a></h5>
                          <p>{item.subTitle}</p>
                      </div>
                  </div>
              </div>
          </div>
          ))}



        </div>


          
      </div>
    </div>      
      
    );
};

export default Testimonial6;