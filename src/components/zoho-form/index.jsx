import React, { useState } from 'react';
// import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
// import FooterFive from "@/layout/footers/footer-5";
// import HeaderSix from "@/layout/headers/header-6";
import ZohoFormModal from "./zoho-form-modal"; // Import ZohoFormModal

const ZohoForm = () => {
  const [isModalOpen, setModalOpen] = useState(false); // Modal state

  // Function to open modal
  const handleGetStartedClick = () => {
    setModalOpen(true);
  };

  // Function to close modal
  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* <HeaderSix /> */}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            {/* <BreadcrumbTwo title={"Team Member"} innertitle={"Team Member"} /> */}
            <button onClick={handleGetStartedClick}>Get Started</button>
            <ZohoFormModal isOpen={isModalOpen} onClose={handleCloseModal} />
          </main>
          {/* <FooterFive style_contact={true} style_team={true} /> */}
        </div>
      </div>
    </>
  );
};

export default ZohoForm;
