import parse from 'html-react-parser';
import Image from 'next/image';

const HeroBanner2 = ({subtitle,title,content,shpae1,shpae2,shpae3,img1,img2}) => {
    return (
        <div className="hero2">
            <div className="container">
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="main-heading">
                    <p className="title" data-aos="fade-left" data-aos-duration="800"> <span className="span">
                    <Image src="/assets/img/icons/span1.svg" alt="img" width={21} height={20}   />
                         {subtitle}</span></p>
                    <h1 className="text-anime-style-3">{title}</h1>
                    <div className="space20"></div>
                    <p data-aos="fade-right" data-aos-duration="800">{parse(content)}</p>
                    <div className="form-area" data-aos="fade-right" data-aos-duration="1200">
                    <form action="#">
                        <input type="email" placeholder="Your Web URL" />
                        <div className="form-btn">
                        <button type="submit" className="theme-btn1">Analyze Website <span><i className="bi bi-arrow-right"></i></span></button>
                        </div>
                    </form>
                    </div>
                </div>
                </div>
                <div className="col-lg-6">
                <div className="main-images" data-aos="zoom-out" data-aos-duration="700">
                    <div className="shape1 animate1">
                    <Image src={shpae1} alt="img" width={300} height={242}   />
                    </div>
                    <div className="shape2 animate3">
                    <Image src={shpae2} alt="img" width={480} height={363}   />
                    </div>
                    <div className="shape3 animate2">
                    <Image src={shpae3} alt="img" width={179} height={179}   />
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div className="image1">
            <Image src={img1} alt="img" width={914} height={748}   />
            </div>
            <div className="image2">
            <Image src={img2} alt="img" width={186} height={693}   />
            </div>
        </div>

    );
};

export default HeroBanner2;