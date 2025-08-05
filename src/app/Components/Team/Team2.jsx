import Image from 'next/image';
import data from '../../Data/team1.json';

const Team2 = () => {
  return (
    <div className="team1 tean-two-area py-10">
      <div className="container">
        <div className="row">
          {data.slice(0, 2).map((item, i) => (
            <div key={i} className="col-lg-6 col-md-6 mb-5">
              <div
                className="team-box transition-all duration-500 hover:shadow-xl rounded-xl overflow-hidden"
                data-aos="zoom-in-up"
                data-aos-duration="1000"
              >
                <div className="image overflow-hidden">
                  <Image
                    src={item.img}
                    alt="Team Member"
                    width={600}
                    height={600}
                    className="w-full h-[500px] object-cover transform hover:scale-105 transition duration-700 ease-in-out"
                  />
                </div>
                <div className="heading-area p-4 bg-white">
                  <div className="heading1 text-center">
                    <h4 className="text-xl font-semibold mb-2">
                      <a href="#">{item.title}</a>
                    </h4>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                  <div className="icon-area mt-4 flex justify-center items-center gap-4 relative group">
                    <a href="#" className="icon">
                      <Image
                        src="/assets/img/icons/shere.svg"
                        alt="Share"
                        width={24}
                        height={24}
                      />
                    </a>
                    <ul className="icon-list flex gap-3 opacity-0 group-hover:opacity-100 transition duration-500">
                      <li><a href={item.twitter}><i className="bi bi-twitter text-blue-500"></i></a></li>
                      <li><a href={item.linkedin}><i className="bi bi-linkedin text-blue-700"></i></a></li>
                      <li><a href={item.instagram}><i className="bi bi-instagram text-pink-500"></i></a></li>
                      <li><a href={item.facebook}><i className="bi bi-facebook text-blue-600"></i></a></li>
                    </ul>
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

export default Team2;
