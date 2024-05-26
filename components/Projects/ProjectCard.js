import React from "react";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({ index, project, description }) => {
  return (
    <>
      <Link key={index} href={project.project_url}>
        <div
          data-aos="fade-right"
          data-aos-duration="1000"
          className=" cursor-pointer max-h-full w-[90%] sm:w-[40%] md:w-[30%] overflow-hidden border-2   mx-auto mt-6 border-white-100 hover:border-teal-300 border-solid rounded-lg"
        >
          <Image
            width={544}
            height={350}
            className="object-cover object-center border-b border-solid lg:h-48 md:h-36"
            src={project.imageUrl}
          />
          <div className="max-w-[100%]  p-6">
            <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight text-white-100 dark:text-white">
              {project.title}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="ml-0.5 h-4 w-4 cursor-pointer  inline-block fill-current"
              >
                <g data-name="Layer 2">
                  <g data-name="external-link">
                    <rect width="24" height="24" opacity="0" />
                    <path d="M20 11a1 1 0 0 0-1 1v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h6a1 1 0 0 0 0-2H6a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-6a1 1 0 0 0-1-1z" />
                    <path d="M16 5h1.58l-6.29 6.28a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0L19 6.42V8a1 1 0 0 0 1 1 1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-4a1 1 0 0 0 0 2z" />
                  </g>
                </g>
              </svg>
            </h2>
            <p className="text-[0.8rem] mb-3 prose text-white-100 max-w-none  ">
              {description}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
