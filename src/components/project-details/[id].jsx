import BreadcrumbEight from "@/common/breadcrumbs/breadcrumb-8";
import FooterFive from "@/layout/footers/footer-5";
import HeaderSix from "@/layout/headers/header-6";
import React from "react";
import ProjectArea from "../../components/homes/home/project-area";
// import ProjectDetailsArea from "./project-details-area";
import ProjectFullData from "@/data/project-details-data"
import ThumbArea from "./thumb-area";
import ProjectDetailsArea from "./project-details-area"


import { useRouter } from 'next/router';
import SEO from "@/common/seo";
import Wrapper from "@/layout/wrapper";


const ProjectDetails = () => {

  const router = useRouter();
  const { id } = router.query;

  // Find the team member based on the ID in the URL
  const project = ProjectFullData.find((projectData) => projectData.id === parseInt(id));

  if (!project) {
    return <p>Project data not found</p>;
  }


  return (
    <Wrapper>
      <SEO pageTitle={"Streamlined Cash Management for Your Business"} />
      <HeaderSix />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <BreadcrumbEight />
            <ThumbArea />
            <ProjectDetailsArea  project={project}/>
            <ProjectArea />
          </main>
          <FooterFive style_contact={true}  style_team={true} bg_style={false} />
        </div>
      </div>
    </Wrapper>
  );
};

export default ProjectDetails;
