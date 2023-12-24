import React from "react";
import Tasks from "./Tasks";

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

  const handleDeletProcess = (project) => {
    props.giveProjectDelete(project);
  };

  const date = project.date.split("-");
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  const selectedMonthName = months[date[1] - 1];

  return (
    <div className="flex items-center justify-center w-screen flex-col">
      <div className="w-[55rem] text-xl pr-32 space-y-5">
        <div>
          <button
            className="float-end"
            onClick={() => {
              handleDeletProcess(project.title);
            }}
          >
            Delete
          </button>
          <h1 className="text-3xl font-bold text-stone-600">{project.title}</h1>
          <p className="text-gray-400 mt-2">
            {selectedMonthName} {date[2]} {date[0]}
          </p>
        </div>
        <p>{project.description}</p>
        <div className="border-b-gray-400 my-5 border border-b-2"></div>
        <Tasks />
      </div>
    </div>
  );
}
