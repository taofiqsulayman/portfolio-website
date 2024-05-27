import { useState } from "react";
import SubHeading from "../SubHeading";
import Heading from "../Heading";
import ProjectCard from "./ProjectCard";
import Link from "next/link";

function Projects({ isHomePage, projects }) {
    const [selected, setIsSelected] = useState(0);

    const techs = [
        "All",
        "JavaScript",
        "TypeScript",
        "React JS",
        "React Native",
        "Next JS",
        "Vue JS",
        "Nuxt JS",
    ];

    const techsList = techs.map((tech, index) => {
        return (
            <button
                className={`${
                    index === selected &&
                    "px-5 py-1 text-[0.5rem] font-extrabold rounded-md bg-teal-300 transition-all "
                } mr-4 mt-4`}
                key={index}
                onClick={() => {
                    setIsSelected(index);
                }}
            >
                {tech}
            </button>
        );
    });

    const filteredData = (data, selectedIndex, techsArray) => {
        if (!Array.isArray(data)) {
            console.error("Invalid argument: data should be an array");
            return [];
        }

        const selectedValueFromTechiesArray = techsArray[selectedIndex];

        const filteredArray = data.filter(
            (Project) =>
                Project.tags.includes(selectedValueFromTechiesArray) ||
                (selectedValueFromTechiesArray === "All" && Project)
        );
        return filteredArray;
    };

    const filteredProjectsBasedOnTechSelected = filteredData(
        projects,
        selected,
        techs
    );

    const projectsDisplay = filteredProjectsBasedOnTechSelected
        .sort((a, b) => {
            a.created_at - b.created_at;
        })
        .map((project, index) => {
            return (
                <ProjectCard
                    description={project.description}
                    project={project}
                    index={index}
                    key={index}
                />
            );
        });

    return (
        <div id="projects" className="pt-32 lmd:pt-16 min-h-[100vh]">
          {!isHomePage && <div className="pt-10"></div>}
            <div className="max-w-[80%] mx-auto flex flex-col gap-4">
                <div className="sm:flex items-start">
                    <div data-aos="fade-right" className={`w-full `}>
                        {isHomePage && <SubHeading title="MY RECENT WORK" />}
                        <Heading heading="Projects" />
                    </div>

                    {!isHomePage && (
                        <div
                            data-aos="fade-left"
                            className="flex mt-2 lmd:mt-0 items-center  lmd:flex-wrap max-w-[100%] lmd:max-w-[50%] flex-wrap "
                        >
                            {techsList}
                        </div>
                    )}
                </div>

                <div data-aos="zoom-in-up">
                    <div className="mt-8 sm:flex  justify-start  flex-wrap -m-4">
                        {projectsDisplay}{" "}
                    </div>
                </div>

                {isHomePage && (
                    <Link href="/projects">
                        <div className="mt-8 animate-pulse px-8 py-6 bg-teal-400 w-fit rounded-xl cursor-pointer">
                            View All Projects
                        </div>
                    </Link>
                )}
            </div>
        </div>
    );
}

export default Projects;
