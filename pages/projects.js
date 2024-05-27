import React from "react";

import { Projects } from "../components";
import projects from "../data/projects";

const Projectss = () => {
  return (
    <>
      <div className="max-w-[80%] mx-auto">
        <Projects projects={projects} isHomePage={false}/>
      </div>
    </>
  );
};
export default Projectss;
