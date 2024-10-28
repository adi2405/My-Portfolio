"use client";
import React from 'react'
import dynamic from 'next/dynamic';

const AnimatedNumbers = dynamic(() => {return import ("react-animated-numbers")}, {ssr: false});

const achievementsList = [
    {
        metric: "Projects",
        value: "5",
    },
    {
        metric: "Hackathons",
        value: "2",
    },
    {
        metric: "Awards",
        value: "9",
    },
    {
        metric: "Years",
        value: "3",
    },
];

const AchievementsSection = () => {
  return (
    <div className='py-8 px-4 sm:py-16 xl:px-16'>
      <div className="border-[#33353F] border rounded-md py-8 px-6 flex flex-col sm:flex-row sm:items-center sm:justify-around gap-6 sm:gap-8 lg:gap-16">
        {achievementsList.map((achievement, index) => (
          <div key={index} className='flex flex-col items-center text-center mx-2 sm:mx-4'>
            <h2 className='text-white text-3xl sm:text-4xl font-bold flex flex-row'>
              <AnimatedNumbers
                  includeComma
                  animateToNumber={achievement.value}
                  locale='en-US'
                  className='text-white text-4xl font-bold'
                  configs={(_, index) => {
                      return {
                          mass: 1,
                          friction: 100,
                          tensions: 140 * (index + 1),
                      };
                  }}
              />
            </h2>
            <p className='text-[#ADB7BE] text-sm sm:text-base'>{achievement.metric}</p>
          </div>
        ))}
      </div>
    </div>
  );
};  

export default AchievementsSection;