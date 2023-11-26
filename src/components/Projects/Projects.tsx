import React, { useRef } from "react";
import { projectData } from "../../lib/data";
import SectionHeading from "../UI/SectionHeading";
import { useScroll, motion, useTransform } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <section id={"projects"} className="scroll-mt-44">
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
  const myRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: myRef, offset: ["start end", "1.33 end"] }); // when start of target reaches end of viewport (does motion) -- completes motion when viewport is 1.33 from end of target
  const scaleProject = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProject = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={myRef}
      initial={{ opacity: 0.5, scale: 0.5 }}
      style={{ opacity: opacityProject, scale: scaleProject }}
      className="group mb-3
        last:mb-0
        sm:mb-8 "
    >
      <Link to={"about:blank"} target="_blank">
        <section className=" relative mx-auto max-w-[42rem] overflow-hidden rounded-lg border border-black/5 bg-gray-100 transition even:pl-8 hover:bg-gray-200 sm:h-[20rem] sm:pr-8">
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
      </Link>
    </motion.div>
  );
};

export default Projects;
