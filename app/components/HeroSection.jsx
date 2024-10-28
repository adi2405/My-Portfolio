"use client";
import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className='lg:py-16 '>
        <div className="grid grid-cols-1 sm:grid-cols-12">
            <motion.div 
                initial = {{opacity: 0, scale: 0.5}}
                animate = {{opacity: 1, scale: 1}}
                transition={{duration: 0.5}}
                className="col-span-8 place-self-center sm:text-left justify-self-start"
            >
                <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-7xl lg:leading-normal font-extrabold">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                        Hello, I am {""}
                    </span>
                    <br/>
                    <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Aditya',
                            1000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Web Dev',
                            1000,
                            'Game Dev',
                            1000,
                            'UI/UX Designer',
                            1000
                        ]}
                        wrapper="span"
                        speed={50}
                        repeat={Infinity}
                        /></h1>
                <p className="text-[#ADB7BE] text-base text-justify sm:text-lg mb-3 lg:text-xl">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque dolor natus qui commodi! Consequuntur incidunt rem atque a tenetur itaque asperiores sequi ipsam. Vitae, cupiditate maiores aliquam doloremque non enim.
                </p>
                <div>
                    <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-300 text-white">Hire Me</button>
                    <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-primary-500 to-secondary-500 hover:bg-slate-800 border-white mt-3">
                        <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
                    </button>
                </div>
            </motion.div>
            <div className="col-span-4 place-self-center mt-10 lg:mt-0">
                <div className="rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
                    <Image
                        src="/images/Hero-Image.jpg"
                        alt="hero image"
                        width={300}
                        height={300}
                        className="rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default HeroSection;