import Link from 'next/link';
import React, { useState, useRef, useEffect } from 'react';

const cta_content ={ 
     bg_img: "/assets/img/cta/cta-bg.jpg",
     title: "Try Pennyflo now!",
     description: <>Everything you need to manage and control the cash and grow  <br /> your business anywhere on the planet.</>,
     btn_text: "Get Started Now",
}
const {bg_img, title, description, btn_text}  = cta_content


const ZohoForm = () => {
   useEffect(() => {
     // Dynamically create iframe and append it to the div when component mounts
     const d = document.getElementById("zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94");
     const f = document.createElement("iframe");
     f.src = 'https://forms.zohopublic.in/pennyflo/form/GetEarlyAccess1/formperma/2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94?zf_rszfm=1';
     f.style.border = "none";
    f.style.height = "350px";
    f.style.width = "450%";
     f.style.transition = "all 0.5s ease";
     f.setAttribute("aria-label", 'Get\x20Early\x20Access');
     d.appendChild(f);
 
     return () => {
       // Clean up the iframe when component is unmounted
       d.innerHTML = '';
     };
   }, []); // Empty dependency array ensures this runs only once when the form is loaded.
 
   return (
     <div id="zf_div_2pdc-txxkTwQxbJ2ZEfbPBi8Tqi9Fz36iNYqj_y7n94" 
       style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#fff',
    padding: '5px',
    paddingTop: '5px',
    borderRadius: '10px',
    maxWidth: '600px',
    width: '90%',
    boxShadow: '0px 5px 20px rgba(0, 0, 0, 0.15)',
    margin: '0 auto',
    position: 'relative',  // Allow positioning of close button
    transition: 'all 0.5s ease',
  }}
     ></div>
   );
 };

const CtaArea = () => {

   
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
            <div className="tp-cta-area p-relative">
               <div className="tp-cta-grey-bg grey-bg-2"></div>
               <div className="container">
                  <div className="row">
                     <div className="col-12">
                        <div className="tp-cta-bg" style={{backgroundImage: `url(${bg_img})`}}>
                           <div className="tp-cta-content tp-inner-font text-center">
                              <h3 className="tp-section-title text-white">{title}</h3>
                              <p>{description}</p>
                              <Link
  href="#"
  className="tp-btn-inner white-bg text-black"
  onClick={(e) => {
    e.preventDefault(); // Prevent the default link behavior
    handleGetStartedClick(); // Trigger your click handler
  }}
  style={{ cursor: 'pointer' }}
>
  {btn_text}
</Link>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            {showPopup && (
        <div className="popup-container" onClick={handleClosePopup}>
          {/* <div className="popup-content">
            <button onClick={handleClosePopup}>Close</button> */}
            <ZohoForm />
          {/* </div> */}
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
        </>
    );
};

export default CtaArea;