'use client';

import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  technologies: string[];
  link: string;
  onEdit: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ image, title, technologies, link }) => {
  return (
    <div className="bg-white hover:transition-transform duration-500 hover:scale-105  rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <a href={link} target='blank'>
        <div className="relative h-48 bg-gray-100">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech: string, index: number) => (
            <span 
              key={index}
              className={`px-3 py-1 text-sm rounded-full ${
                tech === 'JavaScript' || tech === 'Javascript' 
                  ? 'bg-yellow-100 text-yellow-800' 
                  : tech === 'CSS3' || tech === 'SCSS'
                  ? 'bg-blue-100 text-blue-800'
                  : tech === 'react'
                  ? 'bg-green-100 text-green-800'
                  : tech === 'Shopify'
                  ? 'bg-purple-100 text-purple-800'
                  : 'bg-gray-100 text-gray-800'
              }`}
            >
              {tech}
            </span>
          ))}
        </div>
        
      </div>
      </a>
    </div>
  );
};

const PortfolioProjects = () => {
  const projects = [
    {
      id: 1,
      title: "Ecommerce em VNDA",
      technologies: ["JavaScript", "SCSS"],
      image: "/loemme.png",
      link: 'https://www.loemme.com.br/'
    },
    {
      id: 2,
      title: "Ecommerce em deco / vnda",
      technologies: ["JavaScript", "CSS3"],
      image: "/arenacenter.png",
      link: "https://www.arenacenterloja.com.br/"
    },
    {
      id: 3,
      title: "Blog institucional Cora",
      technologies: ["JavaScript", "react"],
      image: "/cora.png",
      link: "https://ri.cora.com.br/?language=PT"
    },
    {
      id: 4,
      title: "Kelly Ecommerce shopify",
      technologies: ["SCSS", "Shopify"],
      image: "/kelly.png",
      link: "https://kellymarket.com.br/"
    }
  ];

  const handleEdit = (projectId: number) => {
    console.log(`Editando projeto ${projectId}`);
    // Aqui você implementaria a lógica de edição
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-white mb-8">
        Meus projetos realizados
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            image={project.image}
            title={project.title}
            technologies={project.technologies}
            link={project.link}
            onEdit={() => handleEdit(project.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioProjects;