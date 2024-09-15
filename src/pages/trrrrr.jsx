import React from "react";
import SEO from "../common/seo";
import CareerDetails from "../components/career-details/[id]";
import Wrapper from "../layout/wrapper";

const index = () => {
  return (
    <Wrapper>
      <SEO pageTitle={"Streamlined Cash Management for Your Business"} />
      <CareerDetails />
    </Wrapper>
  );
};

export default index;
