import React from "react";
import NoProject from "../assets/no-projects.png";

export default function NoProjects(props) {
  return (
    <div className="flex items-center justify-center w-screen flex-col">
      <img src={NoProject} alt="No Projects" className="h-20 w-20" />
      <h1 className="text-neutral-950 text-2xl font-bold text-opacity-60 my-4">
        No Project Selected
      </h1>
      <p className="text-lg text-opacity-40 font-semibold text-neutral-950">
        Select a project or get started with new one
      </p>
      <button
        onClick={() => {
          props.handleHomeState("AddProjectForm");
        }}
        className="bg-zinc-700 text-neutral-400 p-2 my-8 w-48 rounded-lg text-lg"
      >
        Create new project
      </button>
    </div>
  );
}
