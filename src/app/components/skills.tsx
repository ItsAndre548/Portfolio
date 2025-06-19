'use client';

import React, { useState, useEffect } from 'react';
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSass,
  SiNextdotjs,
  SiShopify,
} from 'react-icons/si';

const skillIcons = {
  React: SiReact,
  TypeScript: SiTypescript,
  Tailwind: SiTailwindcss,
  SASS: SiSass,
  'Next.js': SiNextdotjs,
  LIQUID: SiShopify,
};

type SkillName = keyof typeof skillIcons;

type SkillsProps = {
  skills: SkillName[];
};

export default function Skills({ skills = ['React', 'TypeScript', 'Tailwind', 'SASS', 'Next.js', 'LIQUID'] }: SkillsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Responsividade
  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3); // Desktop
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2); // Tablet
      } else {
        setItemsPerView(1); // Mobile
      }
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  // Auto-play
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const maxIndex = Math.max(0, skills.length - itemsPerView);
        return prev >= maxIndex ? 0 : prev + 1;
      });
    }, 2000); //delay

    return () => clearInterval(interval);
  }, [isAutoPlaying, skills.length, itemsPerView]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, skills.length - itemsPerView);
      return prev <= 0 ? maxIndex : prev - 1;
    });
  };

  const goToNext = () => {
    setCurrentIndex((prev) => {
      const maxIndex = Math.max(0, skills.length - itemsPerView);
      return prev >= maxIndex ? 0 : prev + 1;
    });
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const maxIndex = Math.max(0, skills.length - itemsPerView);

  return (
    <div className="w-full px-12 md:pb-24 md:pr-8">
      <p className="px-3 text-center text-2xl mx-auto font-medium py-1.5 rounded-md opacity-100 mb-10 !text-black dark:!text-white uppercase">
        HABILIDADES
      </p>
      
      <div className="relative max-w-[900px] mx-auto">
        {/* Carousel Container */}
        <div className="overflow-hidden rounded-lg">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ 
              transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
            }}
          >
            {skills.map((skill, index) => {
              const Icon = skillIcons[skill];
              return (
                <div 
                  key={index} 
                  className="flex-shrink-0 px-2"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="flex flex-col lg:flex-row gap-3 px-4 py-6 lg:px-8 lg:py-8 border-2 border-white bg-violet-700 items-center justify-center text-base lg:text-xl font-medium text-white rounded-lg hover:bg-violet-600 transition-colors duration-300 min-h-[100px] lg:min-h-[120px]">
                    <Icon className="h-6 w-6 lg:h-8 lg:w-8 flex-shrink-0" />
                    <span className="text-center">{skill}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={goToPrevious}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
          aria-label="Anterior"
        >
          <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white dark:bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 z-10"
          aria-label="Próximo"
        >
          <svg className="h-6 w-6 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                index === currentIndex
                  ? 'bg-violet-700 dark:bg-violet-400'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}