import parse from 'html-react-parser';
import Image from 'next/image';

const SectionTitle2 = ({Title,SubTitle}) => {
    return (
        <div>
          <p className="title" data-aos="fade-left" data-aos-duration="800"> <span className="span">
          <Image src="/assets/img/logo/main-span3.svg" alt="img" width={20} height={20}   />
            {parse(SubTitle)}</span></p>
          <h2 className="text-anime-style-3">{parse(Title)}</h2>
        </div>
    );
};

export default SectionTitle2;