import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import JobArea from "@/components/about/job-area";
import CtaArea from "@/components/contact/cta-area";
import CareerDetailsArea from "./career-details-area";

import CareerFullContent from "@/data/career-full-content";

import { useRouter } from 'next/router';
import Wrapper from "@/layout/wrapper";
import SEO from "@/common/seo";

const CareerDetails = () => {

  const router = useRouter();
  const { id } = router.query;
  

  const career = CareerFullContent.find((career) => career.id === parseInt(id));
  
  if (!career) {
    return <p>Career data not found</p>;
  }

  return (
    <Wrapper>
      <SEO pageTitle={"Streamlined Cash Management for Your Business"} />
      <HeaderSix />
      <main>
      <BreadcrumbTwo title={"Careers Details"} innertitle={" Careers page"} career_details={true} />
      <CareerDetailsArea career={career} />
      <JobArea style_carrer={true}/>
      <CtaArea />
      </main>
      <FooterFive style_contact={true} style_team={true} />
    </Wrapper>
  );
};

export default CareerDetails;
