import React from "react";
import ProjectCard from "./ProjectCard";
import ProjectInfo from "./ProjectInfo";
import { getProjectList } from "./projectsUtiles";

export default function Project() {
  const projectList = getProjectList();

  return (
    <div className="min-h-screen h-full w-full pt-12">
      <div className="flex justify-center">
        <div className="w-3/4">
        <div className="font-bold pb-8">
          <p className="text-3xl py-5">Projects</p>
          <p className="text-2xl py-5 font-normal">"These projects showcase the application of my skills and expertise."</p>
        </div>
          <div className="flex flex-wrap justify-between gap-6">
            {projectList.map((el, i) => {
              return (
                <div
                  className="py-3 min-h-[300px] min-w-[250px] h-[300px] w-[300px] rounded-2xl"
                  key={i}
                >
                  <ProjectCard info={el} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

