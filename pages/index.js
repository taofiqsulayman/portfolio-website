import { Intro, Hero, Projects, Contact, DomHead } from "../components";
import { useEffect } from "react";
import Aos from "aos";
import projects from "../data/projects";

export default function HomePage() {
  const displayedProjects = projects.slice(0, 6);
  useEffect(() => {
    Aos.init({ duration: "1000" });
  }, []);

  return (
    <>
      {" "}
      <DomHead />
      <Hero />
      <Intro />
      <Projects isHomePage={true} projects={displayedProjects}/>
      {/* <BlogPosts /> */}
      <Contact />
    </>
  );
}
