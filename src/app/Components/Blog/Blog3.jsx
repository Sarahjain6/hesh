import Link from 'next/link';
import data from '../../Data/blog2.json';
import Image from 'next/image';

const Blog3 = () => {
    return (
        <div className="blog1 blog2 blog-page sp">
        <div className="container">
          <div className="row">

          {data.map((item, i) => (
            <div key={i} className="col-lg-4 col-md-6">
              <div className="blog-box">
                <div className="image image-anime">
                <Image src={item.img} alt="img" width={416} height={315}   />
                </div>
                <div className="heading1">
                  <div className="author-area">
                    <a href="#" className="date"><Image src="/assets/img/icons/author.svg" alt="img" width={20} height={20}   /> Alex Roy</a>
                    <a href="#" className="date"><Image src="/assets/img/icons/date.svg" alt="img" width={20} height={20}   /> 8 December 2024</a>
                  </div>
                  <h5><Link href="/blog/blog-details">{item.title}</Link></h5>
                  <div className="space20"></div>
                  <Link className="theme-btn1" href="/blog/blog-details">Read More <span><i className="bi bi-arrow-right"></i></span></Link>
                </div>
              </div>
            </div>
    ))}
 
            
          </div>



        </div>
       </div>
    );
};

export default Blog3;