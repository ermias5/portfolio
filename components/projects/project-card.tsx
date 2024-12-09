"use client";

import Image from "next/image";
import React from "react";
import { ProjectType } from "../../hooks/useProjectData";
import imagePlaceholder from "../../public/subtract.png";

const ProjectCard: React.FC<ProjectType> = ({
  imageUrl,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col justify-start text-black rounded-lg">
      <Image
        src={imageUrl ?? imagePlaceholder}
        alt={`my ${title} image`}
        width={320}
        height={200}
        className="h-[200px] w-[320px] relative tablet:h-[400px] tablet:w-[350px]"
      />

      <h3 className="text-sm text-darkorange-100 pt-3">{title}</h3>
      <h1 className="text-md mt-0 dark:text-white">{description}</h1>
    </div>
  );
};

export default ProjectCard;
