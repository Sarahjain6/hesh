import Image from "next/image";

const Skill = () => {
    return (
<div className="skills-section-area bg1 sp2">
  <div className="container">
      <div className="row">
          <div className="col-lg-6 m-auto text-center">
              <div className="heading1">
                  <p className="title"> <span className="span">
                  <Image src="/assets/img/icons/span1.svg" alt="img" width={21} height={20}   />
                    About Us</span></p>
                  <h2>Experience the Power A Strategic SEO & Digital</h2>
              </div>
          </div>
      </div>
      <div className="space20"></div>
      <div className="col-lg-10 m-auto">
        <div className="circle-progress-area">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <div className="progresbar">
                <div className="progressbar">
                   <div className="circle" data-percent="96"><canvas width="180" height="180"></canvas>
                    <canvas></canvas>
                       <div>96%</div>
                  </div>
                </div>
                <p>SEO Marketing</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="progresbar">
                <div className="progressbar">
                  <div className="circle two" data-percent="94"><canvas width="180" height="180"></canvas>
                    <canvas></canvas>
                      <div>94%</div>
                 </div>
               </div>
               <p>PPC Advertise</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="progresbar">
                <div className="progressbar">
                  <div className="circle three" data-percent="90"><canvas width="180" height="180"></canvas>
                    <canvas></canvas>
                     <div>90%</div>
                  </div>
                 </div>
                 <p>Social Media</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <div className="progresbar">
                <div className="progressbar">
                  <div className="circle four" data-percent="95"><canvas width="180" height="180"></canvas>
                    <canvas></canvas>
                     <div>95%</div>
                  </div>
                 </div>
                 <p>SEO Analysis</p>
              </div>
            </div>
        </div>
        </div>
      </div>
  </div>
</div>
    );
};

export default Skill;