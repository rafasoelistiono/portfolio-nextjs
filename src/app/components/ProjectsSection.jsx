"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Client Website",
    description: "Alula Printing: Premium Quality Prints, Custom Designs, Fast Turnaround for Your Business Needs.",
    image: "/images/projects/1.png",
    tag: ["All", "Landing Page"],
    gitUrl: "https://github.com/rafasoelistiono/alulaprinting",
    previewUrl: "https://alulaprinthing.netlify.app/",
  },
  {
    id: 2,
    title: "Client Website",
    description: "Empowering education at Rumah Tahfidz through innovative web landing page.",
    image: "/images/projects/2.png",
    tag: ["All", "Landing Page"],
    gitUrl: "https://github.com/rafasoelistiono/LOMBA",
    previewUrl: "https://rafasoelistiono.github.io/LOMBA",
  },
  {
    id: 3,
    title: "Organization Website",
    description: "landing page for my organization in my school. This web is very interactive & SEO",
    image: "/images/projects/3.png",
    tag: ["All", "Website"],
    gitUrl: "https://github.com/rafasoelistiono/rohisdouven",
    previewUrl: "https://rohisdouven.netlify.app/",
  },
  {
    id: 4,
    title: "Client Website",
    description: "Expert Web Solutions for UMKM in Wood and Furniture Industry, Elevate Your Business with Basama ID",
    image: "/images/projects/4.png",
    tag: ["All", "Landing Page"],
    gitUrl: "https://github.com/rafasoelistiono/client1",
    previewUrl: "https://rafasoelistiono.github.io/client1/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Website"
          isSelected={tag === "Website"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Landing Page"
          isSelected={tag === "Landing Page"}
        />
      </div>
      <ul ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
