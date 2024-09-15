import React from 'react';
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useIsomorphicLayoutEffect } from '@/hooks/useIsomorphicEffect';
import SocialLinks from '@/common/social-links';
import Image from 'next/image';
import solution_1  from "../../../public/assets/img/project/solution-1.jpg";
import solution_2  from "../../../public/assets/img/project/solution-2.jpg";
import project_data from '@/data/project-data';


// const project_details_data = [
//     {
//         id: 1,
//         cls: "info", 
//         title: "Manage All the Bank Accounts in One Place with Connected Banking",
//         feture_list: false,
//         description: <>Connect your current accounts with Pennyflo and get seamless control over 
//         your entire cashflow. Make payments, auto-sync bills and invoices, and reconcile 
//         transactions effortlessly. Say goodbye to the challenge of remembering multiple 
//         passwords and signing in to various Internet banking portals to check balances, 
//         pay vendors, and monitor client payments. We allow you to easily manage all 
//         your banking and payments from a single, user-friendly interface.
//         </>,
        
//     },
//     {
//         id: 2,
//         cls: "overview", 
//         title: "Overview",
//         feture_list: [
//             <>Effortlessly track cash flow for better financial management and decision making.</>,
//             <>Access all the data in one place and know your cash position at ease.</>,
//             <>Achieve seamless and bidirectional synchronization to effortlessly manage 
//             your bank accounts, accounting platforms, and payment gateways for 
//             streamlined financial operations.</>,
            
//         ],
//         description: <>Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. Lobortis enim non eu a.</>, 

//     },
// ]

// const project_details_content = { 
//     solution_title: "Solution & Result",
//     des_1: <>Felis morbi ut tristique pretium libero. Eget purus, enim, orci, quis tempor sed. Sed nec eget nibh et Ut orci, sagittis tellus dui congue. Blandit laoreet nullam amet eget. Ut tincidunt diam tempor sed turpis odio vitae sem lobortis. Lobortis enim non eu a. In gravida velit pretium commodo odio ridiculus odio enim.Tincidunt eget tellus pellentesque nulla.</>,
//     des_2: <>Sed morbi dignissim odio enim volutpat. Viverra facilisi aliquet sed purus id ornare nunc, sit ipsum.Risus amet non eget velit nunc, libero vitae. Arcu maecenas in montes, tincidunt pulvinar euismod ac proin</>,
// }
// const {solution_title, des_1, des_2 }  = project_details_content;

const ProjectDetailsArea = ({ project }) => {
   
   useIsomorphicLayoutEffect(() => {
      ScrollTrigger.create({
         trigger: ".social-box-pin",
         start: "top 10%",
         end: "bottom 60%",
         pin: ".social-box-pin",
         pinSpacing: false
        });
   },[])

    return (
        <>
            <div className="pd-details-area pt-100 pb-100">
               <div className="container">
                  <div className="row g-0">
                     <div className="col-xl-2 col-lg-2 social-box-pin">
                        {/* <div className="pd-details-social-box text-lg-center text-start p-relative">
                           <div className="pd-details-social-title">
                              <span>Share This <br />Story</span>
                           </div>
                           <div className="pd-details-social">
                            <SocialLinks /> 
                           </div>
                        </div> */}
                     </div>
                     <div className="col-xl-10 col-lg-10 ">
                        <div className="pd-details-wrapper">
                            {/* {project_details_data.map((item, i)  =>  */}
                                <div className={`pd-details-${project.cls_1}`}>
                                    <h4 className="pd-details-title">{project.title_1}</h4>
                                    <p>{project.description}</p>
                                    <div className={`pd-details-${project.cls_2}`}>
                                    <h4 className="pd-details-title">{project.title_2}</h4>
                                    {project.feture_list && 
                                        <ul>{project.feture_list?.map((list, i)  => 
                                        <li key={i}>{list}</li>)} 
                                        </ul> 
                                    }
                                    
                                </div>                                
                            {/* )}  */}
                           {/* <div className="pd-details-solution">
                              <div className="pd-details-solution-img-box d-flex align-items-center">
                                 <div className="pd-details-solution-img mr-30">
                                    <Image src={solution_1} alt="theme-pure" />
                                 </div>
                                 <div className="pd-details-solution-img">
                                    <Image src={solution_2} alt="theme-pure" />
                                 </div>
                              </div>
                              <div className="row">
                                 <div className="col-md-3">
                                    <div className="pd-solution-title-box">
                                       <h4 className="pd-details-title">{solution_title}</h4>
                                    </div>
                                 </div>
                                 <div className="col-md-9">
                                    <div className="pd-solution-paragraph">
                                       <p>{des_1}</p>
                                       <p>{des_2}</p>
                                    </div>
                                 </div>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            </div>
        </>
    );
};

export default ProjectDetailsArea;