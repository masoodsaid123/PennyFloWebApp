import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import JobArea from "../about/job-area";
import CtaArea from "../contact/cta-area";
import CareerDetailsArea from "./career-details-area";

import CareerFullContent from "@/data/career-full-content";

import { useRouter } from 'next/router';

const CareerDetails = () => {

  const router = useRouter();
  const { id } = router.query;
  console.log(id)

  const career = CareerFullContent.find((career) => career.id === parseInt(id));
  console.log(career)

  return (
    <>
      <HeaderSix />
      <main>
      <BreadcrumbTwo title={"Careers Details"} innertitle={" Careers page"} career_details={true} />
      <CareerDetailsArea career={career} />
      <JobArea style_carrer={true}/>
      <CtaArea />
      </main>
      <FooterFive style_contact={true} style_team={true} />
    </>
  );
};

export default CareerDetails;
