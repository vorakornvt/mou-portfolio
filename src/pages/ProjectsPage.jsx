import { motion } from "framer-motion";
import ProjectTag from "../../src/assets/Asset13.svg";
import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "Geog - next.js website",
    description:
      "GREG is a fast, modern web app that provides detailed country information using the REST Countries API. Explore population, region, flags, and more in one place.",
    image: "https://vorakornvt-portfolio.vercel.app//assets/Untitled-7.png",
    technologies: ["Tailwind", "API", "NextJS"],
    mockupLink: "https://geog-co.vercel.app/",
    codeLink: "https://github.com/vorakornvt/Geog",
  },
  {
    id: 2,
    name: "Caffeinated Owl Static website",
    description:
      "Modern coffee shop. This project showcases a crafted UI with responsive design, ensuring browsing experience across all devices.",
    image: "https://vorakornvt-portfolio.vercel.app//assets/Untitled-1.png",
    technologies: ["HTML", "CSS"],
    mockupLink: "https://thecaffeinatedowl.onrender.com",
    codeLink: "https://github.com/vorakornvt/TheCaffeinatedOwl",
  },
  {
    id: 3,
    name: "Sync-UI Component",
    description:
      "NPM package for Reuseable Button & Alert & Alert dialog components.",
    image: "https://vorakornvt-portfolio.vercel.app//assets/Untitled-2.png",
    technologies: ["JSX", "CSS", "Styled Components"],
    mockupLink: "https://sync-documentation.onrender.com/",
    codeLink: "https://github.com/4DEVS-Holmesglen/4DEVS-SYNC-MAIN",
    NPM: "https://www.npmjs.com/package/@holmesdev/sync",
  },
  {
    id: 4,
    name: "LoopLane - Full Stack Website",
    description:
      "The frontend is built with React.js and styled using Bootstrap, The backend, handling authentication, database management CRUD operation, allow users to manage their products",
    image: "https://vorakornvt-portfolio.vercel.app//assets/Untitled-4.png",
    technologies: ["JSX", "Bootstrap", "MongoDB"],
    mockupLink: "https://loop-lane.vercel.app/",
    codeLink: "https://github.com/vorakornvt/Database-commercial-website",
  },
  {
    id: 5,
    name: "GardenofEden - Full stack Website",
    description:
      "Modern Tech Stack –  built using React, Tailwind UI, Firebase, to display products amd with authentication that allow admin to process CRUD operation and users to filter products.",
    image: "https://vorakornvt-portfolio.vercel.app//assets/Untitled-5.png",
    technologies: ["JSX", "CSS.TS", "HTML", "Firebase"],
    mockupLink: "https://gardenof-eden-website.vercel.app/",
    codeLink: "https://github.com/vorakornvt/GardenofEden-Website",
  },
  {
    id: 6,
    name: "Chef's kiss - external API Food searching website",
    description:
      "This is website called Chef's Kiss, using React with styled-components, localStorage, and data from the Tasty API (Mock data)",
    image: "https://vorakornvt-portfolio.vercel.app//assets/Untitled-6.png",
    technologies: ["Tailwind", "API", "Styled Components"],
    mockupLink: "https://chefkiss-foodapp.onrender.com/",
    codeLink: "https://github.com/vorakornvt/Chef-sKiss-FoodApiApp",
  },
  {
    id: 7,
    name: "Artify - PHP website",
    description:
      "PHP-based full slack blog application. The project includes various PHP scripts , which can manage blog functionalities like post creation, editing, and internal storage.",
    image: "https://vorakornvt-portfolio.vercel.app//assets/Untitled-3.png",
    technologies: ["PHP", "Bootstrap", "MySql"],
    codeLink: "https://github.com/vorakornvt/PHP-Blog-website",
  },
];

const techColors = {
  JSX: "bg-purple-200 text-black text-[10px] ",
  CSS: "bg-blue-200 text-black text-[10px]",
  "CSS.TS": "bg-indigo-200 text-black text-[10px]",
  HTML: "bg-orange-200 text-black text-[10px]",
  PHP: "bg-teal-200 text-black text-[10px]",
  MongoDB: "bg-green-200 text-black text-[10px]",
  "Styled Components": "bg-yellow-200 text-black text-[10px]",
  TypeScript: "bg-lime-200 text-black text-[10px]",
  Firebase: "bg-red-200 text-black text-[10px]",
  Bootstrap: "bg-sky-200 text-black text-[10px]",
  MySql: "bg-rose-200 text-black text-[10px]",
  Tailwind: "bg-pink-200 text-black text-[10px]",
  API: "bg-green-100 text-black text-[10px]",
  NextJS: "bg-purple-200 text-black text-[10px] ",
};

function ProjectsPage() {
  const [flippedCard, setFlippedCard] = useState(null);

  return (
    <div className="bg-black mt-10 flex flex-col items-center justify-center">
      <img
        alt="Project"
        src={ProjectTag}
        className="h-4 z-1 mb-5 mt-5 flex justify-center mx-auto"
      />

      <div className="grid gap-2 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 h-[650px] sm:w-[450px] md:w-[800px] lg:w-[1050px] overflow-y-auto scrollbar-thin scrollbar-thumb-fuchsia-300 pt-2 scrollbar-track-black">
        {projects.map((project) => {
          const isFlipped = flippedCard === project.id;

          return (
            <div
              key={project.id}
              className="relative min-w-[260px] sm:w-[260px] md:w-[300px] lg:w-[300px] h-[250px] mx-auto mt-2"
              style={{ perspective: "1000px" }}
              onMouseEnter={() => setFlippedCard(project.id)}
              onMouseLeave={() => setFlippedCard(null)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-500`}
                style={{
                  transformStyle: "preserve-3d",
                  transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front Side */}
                <div
                  className="absolute inset-0 flex flex-col justify-center items-center bg-black text-white p-4"
                  style={{
                    backfaceVisibility: "hidden",
                    borderRadius: "10px",
                    border: "solid 0.5px white",
                  }}
                >
                  <p className="text-lg font-main font-semibold">
                    {project.name}
                  </p>
                  <p className="text-[12px]/4 w-[250px] text-justify mt-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap justify-center mt-2 space-x-2">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className={`px-2 py-1 rounded-full text-xs border border-white ${
                          techColors[tech] || "bg-gray-500 text-white"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Back Side */}
                <div
                  className="absolute inset-0 flex flex-col justify-end border border-fuchsia-200 items-center bg-black text-white rounded-lg p-4"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <div className="absolute inset-0 bg-black/50 rounded-lg">
                    <img
                      src={project.image}
                      alt="Project Preview"
                      className="h-full w-full object-cover rounded-md"
                    />
                  </div>
                  <div className="relative z-10 flex space-x-2 mb-4">
                    {project.mockupLink && (
                      <motion.a
                        href={project.mockupLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-black bg-fuchsia-200 text-xs rounded-lg"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0.5 }}
                      >
                        Live Demo
                      </motion.a>
                    )}
                    <motion.a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-2 text-black bg-fuchsia-200 text-xs rounded-lg"
                      initial={{ opacity: 1 }}
                      whileHover={{ opacity: 0.5 }}
                    >
                      GITHUB
                    </motion.a>
                    {project.NPM && (
                      <motion.a
                        href={project.NPM}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-2 text-black bg-orange-200 text-xs rounded-lg"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 0.5 }}
                      >
                        NPM
                      </motion.a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProjectsPage;
