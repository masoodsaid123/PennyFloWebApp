import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import UserIcon from '@/svg/user-icon';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import NavMenu from './nav-menu';
import { gsap } from 'gsap';

// import ZohoFormModal from "@/components/zoho-form/ZohoFormModal";
import logo_black from "../../../public/assets/img/logo/pennyflo_logo_white_5.png";
import logo_white from "../../../public/assets/img/logo/pennyflo_logo_white_4.png";



const ZohoForm = () => {
   useEffect(() => {
     // Dynamically create iframe and append it to the div when component mounts
     const d = document.getElementById("zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94");
     const f = document.createElement("iframe");
     f.src = 'https://forms.zohopublic.in/pennyflo/form/GetEarlyAccess1/formperma/2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94?zf_rszfm=1';
     f.style.border = "none";
     f.style.height = "320px";
     f.style.width = "90%";
     f.style.transition = "all 0.5s ease";
     f.setAttribute("aria-label", 'Get\x20Early\x20Access');
     d.appendChild(f);
 
     return () => {
       // Clean up the iframe when component is unmounted
       d.innerHTML = '';
     };
   }, []); // Empty dependency array ensures this runs only once when the form is loaded.
 
   return (
     <div id="zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94"></div>
   );
 };
 

const HeaderSix = ({ style_2 = false }) => {
   const { sticky } = useSticky()
   const [sidebarOpen, setSidebarOpen] = useState(false)
   // const [isModalOpen, setIsModalOpen] = useState(false);

   // GSAP animation
  let header_top_animation = useRef(null);

  useEffect(() => {
    gsap.from(header_top_animation, {
      opacity: 0,
      y: '20px',
      delay: 1.05
    });
    gsap.to(header_top_animation, {
      opacity: 1,
      y: '0px',
      delay: 1.05
    });
  }, []);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

const [showPopup, setShowPopup] = useState(false);

  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

   return (
      <>
         <header>
            <div id="header-sticky" className={`header-bottom__area header-sticky-bg-2 header-bottom__transparent header-bottom__bdr z-index-5 ${style_2 ? 'inner-header-2' : ''} ${sticky ? "header-sticky" : ''}`}>
               <div className="container">
                  <div className="row g-0 align-items-center">
                     <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                        <div className="header-bottom__logo">
                           {style_2 ? <Link href="/">
                              <Image src={logo_black} alt="theme-pure" />
                           </Link> : <><Link className="white-logo" href="/">
                              <Image src={logo_white} alt="theme-pure" />
                           </Link>
                              <Link className="black-logo" href="/">
                                 <Image src={logo_black} alt="" />
                              </Link></>
                           }
                        </div>
                     </div>
                     <div className="col-xxl-7 col-xl-7 col-lg-7 d-none d-lg-block">
                        <div className="header-bottom__main-menu header-bottom__main-menu-4 header-bottom__main-menu-inner"  style={{ paddingLeft: '50px' }}>
                           <nav id="mobile-menu">
                              <NavMenu />
                           </nav>
                        </div>
                     </div>
                     <div className="col-xxl-3 col-xl-3 col-lg-3 col-md-8 col-6">
                        <div className="header-bottom__right d-flex align-items-center justify-content-end">
                           <div className="header-bottom__action header-bottom__action-4 d-none d-xl-block">
                              <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" href="/#" style={{ marginRight: '15px' }}>
                                 <UserIcon />
                                 <span>Log In</span>
                              </Link>
                           </div>
                           <div className="header-bottom__btn d-flex align-items-center">
                                       <div
                                          className={`${style_2 ? 'tp-btn-inner alt-color-orange' : 'tp-btn-white alt-color-black'} tp-btn-hover d-none d-md-inline-block`}
                                          onClick={handleGetStartedClick} // Open modal when clicked
                                       >
                                          <span className="white-text">Get Started</span>
                                          <b></b>
                                       </div>
                                       <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}>
                                          <i className="fal fa-bars"></i>
                                       </a>
                                       </div>

                           {/* <div className="header-bottom__btn d-flex align-items-center">
                              <Link className={`${style_2 ? 'tp-btn-inner alt-color-orange' : 'tp-btn-white alt-color-black'} tp-btn-hover d-none d-md-inline-block`}  href="/zoho-from">
                                 <span className="white-text" onClick={openModal} >Get Started</span>
                                 <b></b>
                              </Link>
                              <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}>
                                 <i className="fal fa-bars"></i>
                              </a>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </header>
         {/* <ZohoFormModal isOpen={isModalOpen} onClose={closeModal} /> */}

         {showPopup && (
        <div className="popup-container">
          <div className="popup-content">
            <button onClick={handleClosePopup}>Close</button>
            <ZohoForm />
          </div>
        </div>
      )}

<style jsx>{`
        .popup-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 1000;
        }
        .popup-content {
          background: white;
          padding: 20px;
          border-radius: 8px;
          max-width: 500px;
          width: 100%;
        }
        button {
          padding: 10px;
          cursor: pointer;
        }
      `}</style>
      
         <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      </>
   );
};

export default HeaderSix;