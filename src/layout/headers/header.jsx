import useSticky from '@/hooks/use-sticky';
import Offcanvus from '@/common/offcanvus';
import SearchPopup from '@/modals/search-popup';
import SearchIconTwo from '@/svg/search-icon-2';
import UserIcon from '@/svg/user-icon';
import { gsap } from 'gsap';
import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';
import NavMenu from './nav-menu';
import Image from 'next/image';



// import ZohoFormModal from '@/components/zoho-form/ZohoFormModal';

import logo from "../../../public/assets/img/logo/pennyflo_logo_white_5.png";




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




const Header = () => {
  const { sticky } = useSticky();
  const [searchOpen, setSearchOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  // const [isModalOpen, setIsModalOpen] = useState(false);
  const [hover, setHover] = useState(false);


  // const [showPopup, setShowPopup] = useState(false);

  const handlePopup = () => {
    setShowPopup(!showPopup);
  };


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

  // const openModal = () => setIsModalOpen(true);
  // const closeModal = () => setIsModalOpen(false);


  const [showPopup, setShowPopup] = useState(false);

  // Function to handle popup visibility
  const handleGetStartedClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <>
      <header className="header-bottom__transparent z-index-6 tp-header-height">
        <div
          className="header-top__area header-top__space z-index-3 d-none d-md-block tp-header-top-animation"
          ref={el => (header_top_animation = el)}
        >
          <div className="container">
            <div className="row align-items-start">
              <div className="col-6">
                <div className="header-top__link">
                  <span>Offer <i>is going on till March’25, 75% OFF/ Month </i></span>
                  <Link href="/price">
                    <svg width="7" height="10" viewBox="0 0 7 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1.40918 9L5.591 5L1.40918 1" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="col-6">
                <div className="header-top__support text-end">
                  <span>Get Support: <Link href="tel:806(000)88899">+91 6282 238 059</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="header-sticky"
          className={`header-bottom__area header-mob-space header-bottom__area-2 header-bottom__transparent z-index-5 ${sticky && "header-sticky"}`}
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-xxl-2 col-xl-2 col-lg-2 col-md-4 col-6">
                <div className="header-bottom__logo">
                  <Link href="/"><Image src={logo} alt="theme-pure" /></Link>
                </div>
              </div>
              <div className="col-xxl-6 col-xl-5 col-lg-5 d-none d-lg-block">
                <div className="header-bottom__main-menu" style={{ paddingLeft: '50px' }}>
                  <nav id="mobile-menu">
                    <NavMenu />
                  </nav>
                </div>
              </div>
              <div className="col-xxl-4 col-xl-5 col-lg-5 col-md-8 col-6">
                <div className="header-bottom__right d-flex align-items-center justify-content-end">
                  <div className="header-bottom__action header-bottom__action-4 d-none d-xl-block">
                    <Link className="d-none d-lg-inline-block header-bottom__action-2 border-none" 
                    // href="/sign-in" 
                    href="/#" 
                    style={{ marginRight: '15px', color: hover ? '#600EE4' : 'black', display: 'flex', alignItems: 'center', }}
                    onMouseEnter={() => setHover(true)}
                    onMouseLeave={() => setHover(false)}
                    >
                      <UserIcon />
                      <span  >Log In</span>
                    </Link>
                  </div>
                  <div className="header-bottom__btn d-flex align-items-center">
                    <div className="tp-btn-white tp-btn-hover alt-color-black d-none d-md-inline-block"  >
                      <span className="white-text" onClick={handleGetStartedClick} style={{ cursor: 'pointer' }} >Get Started</span>
                      <b></b>
                    </div>
                    <a className="header-bottom__bar tp-menu-bar d-lg-none" onClick={() => setSidebarOpen(true)}>
                      <i className="fal fa-bars"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>


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
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
  z-index: 1000;
  border: none; /* Remove any border from the container */
  padding: 0; /* Ensure no space between container and content */
}

.popup-content {
  background: white;
  padding: 20px;
  border-radius: 15px;
  max-width: 800px; /* Increase the maximum width of the popup */
  width: 90%; /* Make the popup responsive, occupying 90% of the viewport */
  border: 2px solid #4b4bff; /* Add a custom border color */
  box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.2); /* Add a subtle shadow for depth */
  box-sizing: border-box; /* Ensure padding is included in the width calculation */
  margin: 0; /* Remove margin inside the content */
}

button {
  padding: 10px;
  cursor: pointer;
  background-color: #4b4bff; /* Button background color */
  color: white; /* Button text color */
  border: none; /* Remove default border */
  border-radius: 5px; /* Slightly round the button edges */
  transition: background-color 0.3s ease; /* Smooth transition on hover */
}

button:hover {
  background-color: #3a3aee; /* Darken the button on hover */
}

      `}</style>

      {/* <ZohoFormModal isOpen={isModalOpen} onClose={closeModal} /> */}

      <SearchPopup searchOpen={searchOpen} setSearchOpen={setSearchOpen} />
      <Offcanvus sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
    </>
  );
};

export default Header;
