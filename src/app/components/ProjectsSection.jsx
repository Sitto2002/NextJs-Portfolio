"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Roommate Finder",
    description: "Find your ideal roommate based on lifestyle, intrests and habits.",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sitto2002/Roomy",
    previewUrl: "https://roomy-rose.vercel.app/",
  },
  {
    id: 2,
    title: "Chat App",
    description: "Connect with anyone, anywhere in the world in real time.",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sitto2002/Chat-App",
    previewUrl: "https://chat-app-beige-eight-15.vercel.app/login",
  },
  {
    id: 3,
    title: "Food App",
    description: "Disover delicious dishers nearby you and order them.",
    image: "/images/projects/3.png",
    tag: ["All","Web","Mobile"],
    gitUrl: "https://github.com/Sitto2002/Food-App",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "News App",
    description: "Stay informed on the go , get curated healines & updates.",
    image: "/images/projects/4.png",
    tag: ["All","Web","Mobile"],
    gitUrl: "https://github.com/Sitto2002/News-App",
    previewUrl: "https://news-app-lac-six.vercel.app/",
  },
  {
    id: 5,
    title: "Text to Speech",
    description: "transforms written text into natural-sounding speech.",
    image: "/images/projects/5.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Sitto2002/Text_to_Speech",
    previewUrl: "https://vercel.com/sitto2002/text-to-speech",
  },
  {
    id: 6,
    title: "Password Generator",
    description: "generates secure, customizable passwords based on user-defined criteria.",
    image: "/images/projects/6.png",
    tag: ["All","Web","Mobile"],
    gitUrl: "https://github.com/Sitto2002/Password_Generator",
    previewUrl: "https://password-generator1-sigma.vercel.app/"
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
      <h2 className="underline text-center text-4xl font-bold text-green-500 mt-4 mb-8 md:mb-12">
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
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
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
