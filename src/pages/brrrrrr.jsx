import React from "react";
import SEO from "../common/seo";
import TeamDetails from "../components/team-details/[id]";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Streamlined Cash Management for Your Business"} />
      <TeamDetails /> 
    </Wrapper>
  );
};

export default index;
