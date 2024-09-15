import VideoPopup from '@/modals/video-popup';
import React,{useState} from 'react';

const company_content ={
    sub_title:  "ABOUT THE COMPANY",
    title: <>The most advanced<br />FinOps Software.</>,
    info_1: <> The biggest hurdle affecting businesses is managing their cash flow, which is a measure of their overall financial health. For transforming millions of businesses including SMEs & Start-ups across the world, we are on a mission to build an easy way to facilitate their cash management operations by collaborating with their managers, CFOs, accountants, and finance team with more transparency, using advanced AI.</>,
    info_2: <>"You may not control the wind. But you can adjust the sails for a longer course"</>,
    info_3: <>We aim at being your best business ally to guide you through top grade cash management into an outstanding financial era.</>,
}
const {sub_title, title, info_1, info_2, info_3}  = company_content

const CompanyArea = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <div className="ab-company-area pt-105 pb-100">
               <div className="container">
                  <div className="row ab-company-section-space">
                     <div className="col-xl-6">
                        <div className="ab-company-section-box">
                           <h4 className="inner-section-subtitle">{sub_title}</h4>
                           <h3 className="tp-section-title">{title}</h3>
                           <div className="col-xl-4">
                           <div className="ab-company-video">
    <a
      className="popup-video"
      href="https://www.loom.com/share/afbdac7979a94a28b3348b9e730e376c?sid=b58c50c2-0a0f-40c3-96be-1c22f7808701" // Link to your video
      target="_blank" // Opens in a new tab
      rel="noopener noreferrer"
    >
      <i className="fas fa-play"></i>
    </a>
    <span>Watch Demo</span>
  </div>



                              {/* <div className="ab-company-video">
                                 <a className="popup-video" 
                                 onClick={() => setIsVideoOpen(true)} 
                                 ><i className="fas fa-play"></i></a>
                                 <span>Watch Demo</span>
                              </div> */}
                           </div>
                        </div>
                     </div>
                     <div className="col-xl-6 wow tpfadeRight" data-wow-duration=".9s" data-wow-delay=".5s">
                        <div className="ab-company-right">
                           <div className="ab-company-section-text">
                              <p className="pb-10">{info_1}</p>
                              <p className="pb-10">{info_2}</p>
                              <p><span>{info_3}</span></p>
                           </div>
                        </div>
                     </div>
                  </div>
                  {/* <div className="row align-items-center">
                     <div className="col-xl-4">
                        <div className="ab-company-video">
                           <a className="popup-video" 
                           onClick={() => setIsVideoOpen(true)} 
                           ><i className="fas fa-play"></i></a>
                           <span>Watch Demo</span>
                        </div>
                     </div>
                  </div> */}
               </div>
            </div>

             {/* video modal start */}
      <VideoPopup
        isVideoOpen={isVideoOpen}
        setIsVideoOpen={setIsVideoOpen}
        videoId={"EW4ZYb3mCZk"}
      />
      {/* video modal end */}
        </>
    );
};

export default CompanyArea;
