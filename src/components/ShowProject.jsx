import React from "react";

export default function ShowProject(props) {
  let project;
  const SetShowProject = () => {
    props.listOfProjects.map((list) => {
      if (props.userSelectedProject === list.title) {
        project = list;
      }
    });
  };
  SetShowProject();
  console.log(project);

  return (
    <div className="flex items-center justify-center w-screen flex-col">
      <div className="w-[55rem] text-xl pr-32 space-y-5">
        <div>
          <button className="float-end">Delete</button>
          <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
          <p className="text-gray-400 mt-2">{project.date}</p>
        </div>
        <p>{project.description}</p>
        <div className="border-b-gray-400 my-5 border border-b-2"></div>
        <h1 className="text-3xl font-bold text-stone-600">Tasks</h1>
        <div>
          <input
            type="text"
            className="bg-gray-400 w-72 rounded-sm focus:outline-8 bg-opacity-25 focus:outline-blue-500"
          />
          <button className="mx-5">Add Task</button>
        </div>
        <p>This project does not have any tasks yet.</p>
      </div>
    </div>
  );
}
