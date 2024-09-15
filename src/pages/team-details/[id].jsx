import BreadcrumbTwo from "@/common/breadcrumbs/breadcrumb-2";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import CtaArea from "../../components/contact/cta-area";
import TeamDetailsArea from "./team-details-area";

import { useRouter } from 'next/router';
import TeamFullData from "@/data/team-full-data"

import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";

const TeamDetails = () => {

  const router = useRouter();
  const { id } = router.query;

  // Find the team member based on the ID in the URL
  const member = TeamFullData.find((teamMember) => teamMember.id === parseInt(id));

  if (!member) {
    return <p>Team member not found</p>;
  }


  return (
    <Wrapper>
      <SEO pageTitle={"Streamlined Cash Management for Your Business"} />
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbTwo title={"Team Single"} innertitle={" Team Member "} team_details={true} />
            <TeamDetailsArea member={member}  />
            <CtaArea />
          </main>
          <FooterFive  style_contact={true} style_team={true} />
        </div>
      </div>
    </Wrapper>  
  );
};

export default TeamDetails;
