"use client";

import useProjectData, { ProjectType } from "../../hooks/useProjectData";
import ProjectCard from "./project-card";

const ProjectSection = () => {
  const {
    filteredProjects,
    selectedSkill,
    setSelectedSkill,
    isLoading,
    error,
    allSkills,
  } = useProjectData();

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center dark:text-white px-[5%] tablet:px-[10%] desktop:px-[17%]"
    >
      <h1 className="text-3xl tablet:text-6xl mb-0">My Projects</h1>
      <p className=" tablet:px-[100px]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati ipsam
        a tempore sapiente, nobis labore atque, corrupti rerum itaque unde neque
        fugit eos similique quasi odio quo laudantium, minus sunt.
      </p>
      <div className="flex gap-3 p-2">
        {allSkills.map((skill, index) => (
          <button
            key={index}
            onClick={() => setSelectedSkill(skill)}
            className={`px-5 py-3 text-lg font-poppins rounded-lg ${
              selectedSkill === skill
                ? "bg-darkorange-100"
                : "bg-whitesmoke-200 dark:bg-white text-black dark:hover:bg-gainsboro-200"
            }`}
          >
            {skill.charAt(0).toUpperCase() + skill.slice(1)}
          </button>
        ))}
      </div>
      <div className="flex flex-col gap-7 pt-[2rem] tablet:flex-row">
        {isLoading ? (
          <p>Loading</p>
        ) : error ? (
          <p>getting error when fetching the data</p>
        ) : (
          filteredProjects.map((project: ProjectType) => (
            <ProjectCard
              key={project.id}
              imageUrl={project.imageUrl}
              title={project.title}
              description={project.description}
              skills={project.skills}
            />
          ))
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
