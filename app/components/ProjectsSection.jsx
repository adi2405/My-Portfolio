"use client";
import React, { useState, useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'
import { animate, motion, useInView } from 'framer-motion';

const projectData = [
    {
        id: 1,
        title: "Galaxy Shooter Pro",
        description: "Exciting space shooter arcade with intense action and fun.",
        image: "/images/projects/project-1.png",
        tag: ["All", "Game"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 2,
        title: "Zombie Survival",
        description: "Intense zombie survival FPS game with thrilling gameplay.",
        image: "/images/projects/project-2.png",
        tag: ["All", "Game"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 3,
        title: "Smart Cart",
        description: "Incorporating ML techniques to predict future trends and sales.",
        image: "/images/projects/project-3.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 4,
        title: "AJEvents",
        description: "Seamless ticket booking for unforgettable events.",
        image: "/images/projects/project-4.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
    {
        id: 5,
        title: "Portfolio Website",
        description: "Dynamic tech portfolio showcasing innovation.",
        image: "/images/projects/project-5.png",
        tag: ["All", "Web"],
        gitUrl: "/",
        previewUrl: "/"
    },
]

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectData.filter((project) => 
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1},
  };

  return (
    <section id='projects' className='pt-16'>
        <h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag 
                onClick={handleTagChange} 
                name="All" 
                isSelected={tag == "All"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Web" 
                isSelected={tag == "Web"}
            />
            <ProjectTag 
                onClick={handleTagChange} 
                name="Game" 
                isSelected={tag == "Game"}
            />
        </div>
        <ul ref={ref} 
            key={tag}
            className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index) => (
                <motion.li
                    key={index} 
                    variants={cardVariants} 
                    initial="initial" 
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: index * 0.3 }}
                >
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imgUrl={project.image}
                        tags={project}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                </motion.li>
            ))}
        </ul>
    </section>
  )
}

export default ProjectsSection;