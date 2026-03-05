// import React from 'react';

interface Education {
  id: number;
  school: string;
  degree: string;
  year: string;
}

interface Project {
  id: number;
  title: string;
  image: string;
  demo: string;
  description: string;
  tags: string[];
}

interface Button {
  id: number;
  title: string;
  link: string;
}

interface Skill {
  id: number;
  name: string;
  icon: string;
}


export default function App() {

  const educationHistory: Education[] = [
    {
      id: 1,
      school: "Hellenic Open University",
      degree: "B.Sc. in Computer Science",
      year: "2024 - 2029 (Undergraduate)"
    },
    {
      id: 2,
      school: "IEK Alfa",
      degree: "Computer Applications Technician",
      year: "2023 - 2025 (Finished)"
    }
  ];

  const projectList: Project[] = [
    {
      id: 1,
      title: "Professional Portfolio",
      image: "/PersonalPortfolio.PNG",
      demo: "",
      description: "The current portfolio website you are viewing, built with Vite, React, TypeScript, and Tailwind CSS to showcase my development journey.",
      tags: ["React", "TypeScript", "Tailwind", "Vite"]
    },
    {
      id: 2,
      title: "Forkify",
      image: "/Forkify.PNG",
      demo: "https://fokify-iakovos.netlify.app/",
      description: "A recipe search application that interacts with a third-party API, following the MVC architectural pattern.",
      tags: ["JavaScript", "CSS", "API"]
    },
    {
      id: 3,
      title: "RecipeBook",
      image: "/RecipeBook.PNG",
      demo: "https://github.com/IakovosKoukoularis/RecipeBook",
      description: "A desktop application developed in Python for organizing and managing personal recipes with a local database.",
      tags: ["Python", "Tkinter", "JSON"]
    },
    {
      id: 4,
      title: "My Website React",
      image: "/my-website-react.PNG",
      demo: "https://iakovos-portfolio.netlify.app",
      description: "My initial project exploring React's component-based architecture to build a personal landing page.",
      tags: ["React", "JavaScript", "CSS"]
    },
    {
      id: 5,
      title: "My E-shop",
      image: "/My-eshop.PNG",
      demo: "https://my-learning-eshop.netlify.app/",
      description: "A modern e-commerce platform built with React and TypeScript, featuring a functional shopping cart and product filtering.",
      tags: ["React", "TypeScript", "Tailwind"]
    }
  ];

  const buttons: Button[] = [
    {
      id: 1,
      title: "Email",
      link: "mailto:ikoukoularis@yahoo.gr"
    },
    {
      id: 2,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/jack-koukoularis/"
    }
  ];

  const skills: Skill[] = [
    {
      id: 1,
      name: "TypeScript",
      icon: "/icons/typescript.png",
    },
    {
      id: 2,
      name: "React",
      icon: "/icons/react.png",
    },
    {
      id: 3,
      name: "Tailwind",
      icon: "/icons/tailwind.png",
    },
    {
      id: 4,
      name: "Css3",
      icon: "/icons/css.png",
    },
    {
      id: 5,
      name: "Html5",
      icon: "/icons/html5.png",
    },
    {
      id: 6,
      name: "Javascript",
      icon: "/icons/javascript.png",
    },
    {
      id: 6,
      name: "Python",
      icon: "/icons/python.png",
    },
    {
      id: 7,
      name: "Sql",
      icon: "/icons/sql.png",
    },
    {
      id: 8,
      name: "C",
      icon: "/icons/C.png",
    },
    {
      id: 9,
      name: "C++",
      icon: "/icons/C++.png",
    },
    {
      id: 10,
      name: "Photoshop",
      icon: "/icons/photoshop.png",
    },
    {
      id: 11,
      name: "3Ds",
      icon: "/icons/3ds_max.png",
    }
  ]
    

  return (
    <div className="min-h-screen bg-[#080a09] text-[#e2e2d5] font-sans antialiased selection:bg-[#b89f7d]/30">
      
      {/* HEADER */}
      <header className="flex flex-col items-center justify-center py-32 px-6">
        <h1 className="text-6xl md:text-7xl font-bold tracking-tighter text-[#f5f5f0] mb-4">
          Iakovos Koukoularis
        </h1>
        <div className="h-[1px] w-12 bg-[#b89f7d] mb-6"></div> {/* Subtle divider */}
        <p className="text-lg md:text-xl text-[#8a8a7c] uppercase tracking-[0.3em] font-light">
          Software Engineer<span className="mx-2 text-[#b89f7d]">|</span>Web Developer
        </p>
      </header>

      {/* EDUCATION */}
      <section className='max-w-5xl mx-auto px-6 mb-32'>
        <h2 className='text-xs uppercase tracking-[0.5em] text-[#b89f7d] mb-12 text-center font-bold'>Education</h2>
        <div className="space-y-4">
          {educationHistory.map(edu => (
            <div key={edu.id} className='flex flex-col md:flex-row justify-between items-baseline p-8 border border-white/5 bg-white/[0.02] rounded-2xl hover:bg-white/[0.04] transition-all duration-500'>
              <div>
                <h3 className='text-2xl font-semibold text-[#f5f5f0]'>{edu.school}</h3>
                <p className='text-[#8a8a7c] mt-1'>{edu.degree}</p>
              </div>
              <p className='text-[#b89f7d] font-mono text-sm mt-4 md:mt-0'>{edu.year}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className='max-w-6xl mx-auto px-6 mb-32'>
        <h2 className="text-xs uppercase tracking-[0.5em] text-[#b89f7d] mb-12 text-center font-bold">Personal Portfolio</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
          {projectList.map(project => (
            <div key={project.id} className='group flex flex-col'>
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="relative overflow-hidden rounded-3xl aspect-[16/10] bg-[#121514] border border-white/5">
                <img 
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.02] transition-all duration-700 ease-in-out" 
                  src={project.image} 
                  alt={project.title}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080a09] via-transparent to-transparent opacity-60" />
              </a>
              
              <div className="pt-8">
                <div className="flex justify-between items-center mb-4">
                  <h3 className='text-3xl font-bold text-[#f5f5f0]'>{project.title}</h3>
                  <div className="h-[1px] flex-grow mx-6 bg-white/10"></div>
                </div>
                <p className="text-[#8a8a7c] text-lg leading-relaxed mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 border border-white/10 rounded-full text-[#8a8a7c] group-hover:border-[#b89f7d]/50 group-hover:text-[#e2e2d5] transition-colors">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      
      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 mb-32">
        <h2 className="text-xs uppercase tracking-[0.5em] text-[#b89f7d] mb-12 text-center font-bold">Personal Skill Set</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map(skill => 
            <div key={skill.icon} className="group flex flex-col items-center">
              <div className="relative size-24 md:size-28 flex items-center justify-center rounded-2xl bg-white/[0.03] border border-white/5 backdrop-blur-sm transition-all duration-500 group-hover:border-[#b89f7d]/40 group-hover:bg-white/[0.08] group-hover:-translate-y-2">
                <img src={skill.icon} alt={skill.name} className="size-12 md:size-14 object-contain opacity-60 group-hover:opacity-100 grayscale group-hover:grayscale-0 transition-all duration-500"/>
              </div>
              <h3 className="mt-4 text-sm font-medium tracking-widest uppercase text-[#8a8a7c] group-hover:text-[#f5f5f0] transition-colors">{skill.name}</h3>
            </div>
          )}
        </div>
      </section>

      {/* CONTACT */}
      <footer className='py-32 px-6 bg-white/[0.02] border-t border-white/5 text-center'>
        <h2 className='text-5xl font-bold mb-8 text-[#f5f5f0] tracking-tighter'>Let’s build something together.</h2>
        <p className='text-[#8a8a7c] max-w-xl mx-auto mb-12 text-lg'>
          Currently open to selective opportunities and collaborations in Greece or remote worldwide.
        </p>
        <div className='flex flex-col md:flex-row justify-center items-center gap-8'>
          {buttons.map(btn => (
            <a 
              href={btn.link} 
              key={btn.id} 
              target="_blank"
              className="group relative text-[#f5f5f0] text-lg font-medium overflow-hidden"
            >
              <span className="relative z-10">{btn.title}</span>
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#b89f7d] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
}