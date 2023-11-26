import React, { FC } from "react";
import SectionHeading from "../UI/SectionHeading";
import { projectData } from "../../lib/data";

const Projects = () => {
  return (
    <section>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

type ProjectProps = (typeof projectData)[number]; // uses the generic shape of projectData

const Project = ({ title, description, tags, imageUrl }: ProjectProps) => {
  return (
    <section className="group relative mx-auto mb-3 max-w-[42rem] overflow-hidden border border-black/5 bg-gray-100 transition last:mb-0 even:pl-8 hover:bg-gray-200 sm:mb-8 sm:h-[20rem] sm:pr-8">
      <div className="flex h-full flex-col py-5 pt-4 sm:max-w-[50%] sm:pb-8 sm:pl-10 sm:pr-2 sm:group-even:ml-[20rem]">
        <h3 className="text-2xl font-semibold">{title}</h3>
        <p className="mt-2 leading-relaxed text-gray-700">{description}</p>
        <ul className="mt-6 flex flex-wrap gap-2 sm:mt-auto">
          {tags.map((tag, index) => (
            <li
              className="rounded-full bg-black/70 px-3 py-1 uppercase tracking-wider text-white"
              key={index}
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
      <img
        src={imageUrl}
        alt="Project Image"
        className="block transition group-even:-left-40 group-even:right-[initial] 
        sm:absolute 
        sm:-right-40 
        sm:top-8 
        sm:block

        sm:w-[28.25rem] 
        sm:rounded-t-lg
        sm:shadow-2xl

        sm:group-hover:-translate-x-3 sm:group-hover:translate-y-3 sm:group-hover:-rotate-2 sm:group-hover:scale-105 sm:group-even:group-hover:translate-x-3 sm:group-even:group-hover:translate-y-3 sm:group-even:group-hover:rotate-2"
      />
    </section>
  );
};

export default Projects;
