import NoticeTwo from '@/svg/notice-2';
import React from 'react';

import header_img from "../../../public/assets/img/price/price-4.1.png";
import Image from 'next/image';
import Link from 'next/link';

const pricing_data_monthly = {
   // header_text: <>You pay <span>$59.00/mo</span> today Renews <br /> April  2024 For <span>$69.00/mo</span></>,
   // price header data 
   price_header: [
      {
         id: 1,
         title: "BASIC",
         description: <>Ideal for finance team <br /> with upto 5 FTE</>,
         price: 79,
         price_yearly: 899,
         date_monthly: "Billed monthly",
         date_yearly: <>5% off <br />  Billed annully</>,
         active: "",
      },
      {
         id: 2,
         title: "STARTUP",
         description: <>Ideal for finance team <br />  with upto 8 FTE</>,
         price: 199,
         price_yearly: 1999,
         date_monthly: "Billed monthly",
         date_yearly: <>16% off <br />  Billed annully</>,
         active: "active",
      },
      {
         id: 3,
         title: "PRO",
         description:  <>Ideal for finance team <br />  with upto 15 FTE</>,
         price: 399,
         price_yearly: 3999,
         date_monthly: "Billed monthly",
         date_yearly: <>16% off <br />  Billed annully</>,
         active: "",
      },
   ],

   // price feature  
   price_feature: [
      {
         id: 1,
         title: "Team",
         notice: <>Add additional team member at just $9</>
      },
      {
         id: 2,
         title: "Transaction Volume",
         notice: <>Add gradient heading, button, pricing table testimonial etc.</>
      },
      {
         id: 3,
         title: "Collections",
         notice: <>Add gradient heading, button, pricing table testimonial etc.</>
      },
      {
         id: 4,
         title: "Bank Account Integrations",
         notice: <>Add gradient heading, button, pricing table testimonial etc.</>
      },
      {
         id: 5,
         title: "Integrations",
         notice: <>Add gradient heading, button, pricing table testimonial etc.</>
      },
      {
         id: 6,
         title: "Video Dedicated Support",
         notice: <>Add gradient heading, button, pricing table testimonial etc.</>
      },

   ],

   // price feature info
   price_feature_info: [
      {
         id: 1,
         active: "",
         info: [
            "Upto 3",
            "Upto 20 transactions",
            "Unlimited",
            "Upto 2",
            "Unlimited",
            "Unlimited",
         ]

      },
      {
         id: 2,
         active: "active",
         info: [
            "Upto 8",
            "Upto 30 transactions",
            "Unlimited",
            "Upto 3",
            "Unlimited",
            "Unlimited",
         ]

      },
      {
         id: 3,
         active: "",
         info: [
            "Upto 15",
            "Upto 30 transactions",
            "Unlimited",
            "Upto 4",
            "Unlimited",
            "Unlimited",
         ]

      },
   ]


}
const {  header_text, price_header, price_feature, price_feature_info } = pricing_data_monthly




const PriceArea = () => {
   return (
      <>
         <div className="tp-price-area mb-120">
            <div className="container">
               <div className="price-tab-content">
                  <div className="tab-content" id="nav-tabContent">

                     <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" tabIndex="0">
                        <div className="tp-price-table price-inner-white-bg z-index-3">
                           <div className="tp-price-table-wrapper">
                              <div className="row g-0 align-items-center">
                                 <div className="col-4">
                                    <div className="tp-price-header">
                                       <div className="tp-price-header-img">
                                          <Image src={header_img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-price-header-content">
                                          <p>{header_text}</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-8">
                                    <div className="tp-price-top-wrapper">
                                       {price_header.map((item, i) =>
                                          <div key={i} className={`tp-price-top-item text-center ${item.active}`}>
                                             <div className="tp-price-top-tag-wrapper">
                                                <span>{item.title}</span>
                                                <p>{item.description}</p>
                                             </div>
                                             <div className="tp-price-top-title-wrapper">
                                                <h4>${item.price} <span>/mo</span></h4>
                                                <p>{item.date_monthly}</p>
                                                <Link className="tp-btn-service" href="#">Get Started</Link>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="tp-price-feature-wrapper">
                                 <div className="row g-0">
                                    <div className="col-4">
                                       <div className="tp-price-feature-box">
                                       {price_feature.map((item, i) => (
                                          <div key={i} className="tp-price-feature-item p-relative"  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '65px' }}>
                                             <div className="d-flex align-items-center">
                                             <span>{item.title}</span>
                                             {item.title === "Team" && ( // Only show the tooltip icon for "Team"
                                                <div className="tp-price-feature-tooltip-box p-relative">
                                                   <NoticeTwo />
                                                   <div className="tp-price-feature-tooltip">
                                                   <p>{item.notice}</p>
                                                   </div>
                                                </div>
                                             )}
                                             </div>
                                          </div>
                                       ))}
                                       </div>
                                    </div>
                                    <div className="col-8">
                                       {price_feature_info.map((item, i) => (
                                       <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                          {item?.info?.map((inf, j) => (
                                             <div key={j} className="tp-price-feature-info text-center">
                                             <span>{inf}</span>
                                             </div>
                                          ))}
                                       </div>
                                       ))}
                                    </div>
                                 </div>
                                 </div>

                              {/* <div className="tp-price-feature-wrapper">
                                 <div className="row g-0">
                                    <div className="col-4">
                                       <div className="tp-price-feature-box">
                                          {price_feature.map((item, i) =>
                                             <div key={i} className="tp-price-feature-item p-relative">
                                                <div className="d-flex align-items-center">
                                                   <span>{item.title}</span>
                                                   <div className="tp-price-feature-tooltip-box p-relative">
                                                      <NoticeTwo />
                                                      <div className="tp-price-feature-tooltip">
                                                         <p>{item.notice}</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                          }
                                       </div>
                                    </div>
                                    <div className="col-8">
                                       {price_feature_info.map((item, i) =>
                                          <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                             {item?.info?.map((inf, i) =>
                                                <div key={i} className="tp-price-feature-info text-center">
                                                   <span>{inf}</span>
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div> */}
                           </div>
                        </div>
                     </div>

                     <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" tabIndex="0">
                        <div className="tp-price-table price-inner-white-bg z-index-3">
                           <div className="tp-price-table-wrapper">
                              <div className="row g-0 align-items-center">
                                 <div className="col-4">
                                    <div className="tp-price-header">
                                       <div className="tp-price-header-img">
                                          <Image src={header_img} alt="theme-pure" />
                                       </div>
                                       <div className="tp-price-header-content">
                                          <p>{header_text}</p>
                                       </div>
                                    </div>
                                 </div>
                                 <div className="col-8">
                                    <div className="tp-price-top-wrapper">
                                       {price_header.map((item, i) =>
                                          <div key={i} className={`tp-price-top-item text-center ${item.active}`}>
                                             <div className="tp-price-top-tag-wrapper">
                                                <span>{item.title}</span>
                                                <p>{item.description}</p>
                                             </div>
                                             <div className="tp-price-top-title-wrapper">
                                                <h4>${item.price_yearly} <span>/yr</span></h4>
                                                <p>{item.date_yearly}</p>
                                                <Link className="tp-btn-service" href="#">Get Started</Link>
                                             </div>
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                              <div className="tp-price-feature-wrapper">
                                 <div className="row g-0">
                                    <div className="col-4">
                                       <div className="tp-price-feature-box">
                                          {price_feature.map((item, i) =>
                                             <div key={i} className="tp-price-feature-item p-relative">
                                                <div className="d-flex align-items-center">
                                                   <span>{item.title}</span>
                                                   <div className="tp-price-feature-tooltip-box p-relative">
                                                      <NoticeTwo />
                                                      <div className="tp-price-feature-tooltip">
                                                         <p>{item.notice}</p>
                                                      </div>
                                                   </div>
                                                </div>
                                             </div>
                                          )
                                          }
                                       </div>
                                    </div>
                                    <div className="col-8">
                                       {price_feature_info.map((item, i) =>
                                          <div key={i} className={`tp-price-feature-info-item ${item.active}`}>
                                             {item?.info?.map((inf, i) =>
                                                <div key={i} className="tp-price-feature-info text-center">
                                                   <span>{inf}</span>
                                                </div>
                                             )}
                                          </div>
                                       )}
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default PriceArea;