import React from "react";

export default function Sidebar(props) {
  let listOfNames = props.listOfProjects.map((data) => {
    return data.title;
  });

  const selectProjectHandler = (projectName) => {
    props.giveProjectName(projectName);
  };

  return (
    <div className="w-[30rem] mt-10 h-screen rounded-tr-2xl text-white p-10 bg-black">
      <h1 className="font-bold text-2xl text-gray-200 mt-4">YOUR PROJECTS</h1>
      <button
        onClick={() => {
          props.handleHomeState("AddProjectForm");
        }}
        className="bg-zinc-700 text-neutral-400 p-2 my-8 w-36 rounded-lg text-lg "
      >
        + Add Project
      </button>
      <div className="list-none">
        {listOfNames.map((project) => {
          return (
            <li
              key={project}
              className="text-lg  active:bg-gray-500 active:bg-opacity-25  active:text-white text-neutral-400 cursor-pointer my-3 pl-2"
            >
              <button
                className="w-full text-left active:bg-gray-500 active:bg-opacity-25  active:text-white"
                onClick={() => {
                  selectProjectHandler(project);
                }}
              >
                {project}
              </button>
            </li>
          );
        })}
      </div>
    </div>
  );
}
