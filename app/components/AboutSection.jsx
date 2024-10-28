"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className='list-disc pl-2'>
        <li>C, C#</li>
        <li>JavaScript, React, Next, Node</li>
        <li>CSS, Tailwind CSS</li>
        <li>PHP</li>
        <li>MySQL, MongoDB</li>
        <li>Python</li>
        <li>Machine Learning</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className='list-disc pl-2'>
        <li>Pursuing BE in Computer Engineering</li>
        <span>VESIT, Chembur</span>
      </ul>
    )
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className='list-disc pl-2'>
        <li>The Ultimate Guide to Game Development with Unity (Official)</li>
      </ul>
    )
  }
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  }

  return (
    <section id='about' className='text-white pt-16'>
      <div className='md:grid md:grid-cols-2 gap-8 items-start py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        {/* Sticky image container */}
        <div className='md:sticky md:top-0'>
          <Image src="/images/About-Section.jpg" width={500} height={500} alt="About section image"/>
        </div>
        
        {/* Content container */}
        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
          <p className='text-base md:text-lg text-justify'>
            I'm a Computer Engineering student at VESIT, Chembur, with a strong background in programming languages like Python, JavaScript, and C#, and skills in web development and machine learning. I enjoy working on projects that combine data-driven insights with engaging design, continuously expanding my expertise through hands-on projects and certifications, including game development with Unity. I’m passionate about leveraging technology to solve real-world problems and am always eager to learn, collaborate, and innovate in the tech space.
          </p>
          <div className='flex flex-row justify-start mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}> 
              Skills
            </TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}> 
              Education
            </TabButton>
            <TabButton selectTab={() => handleTabChange("certification")} active={tab === "certification"}> 
              Certifications
            </TabButton>
          </div>
          <div className='mt-8'>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;