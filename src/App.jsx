import { useEffect, useState } from "react";
import NoProjects from "./components/NoProjects";
import Sidebar from "./components/Sidebar";
import AddProjectForm from "./components/AddProjectForm";
import ShowProject from "./components/showProject";

function App() {
  const [homePageState, setHomePageState] = useState("NoProjects");
  const [listOfProjects, setListOfProjects] = useState(() => {
    return JSON.parse(localStorage.getItem("ListOfProjects")) || [];
  });
  const [userSelectedProject, setUserSelectedProject] = useState("");

  const saveUserData = (data) => {
    setListOfProjects((prevList) => {
      return [...prevList, data];
    });

    setHomePageState("NoProjects");
  };

  const handleHomeState = (data) => {
    setHomePageState(data);
  };

  useEffect(() => {
    localStorage.setItem("ListOfProjects", JSON.stringify(listOfProjects));
  }, [listOfProjects]);

  useEffect(() => {
    const listOfProjects = JSON.parse(localStorage.getItem("ListOfProjects"));
    if (listOfProjects) {
      setListOfProjects(listOfProjects);
    }
  }, []);

  const showElementOnScreen = () => {
    if (homePageState === "NoProjects") {
      return <NoProjects handleHomeState={handleHomeState} />;
    } else if (homePageState === "AddProjectForm") {
      return (
        <AddProjectForm
          giveUserData={saveUserData}
          handleHomeState={handleHomeState}
        />
      );
    } else if (homePageState === "ShowProject") {
      return (
        <ShowProject
          userSelectedProject={userSelectedProject}
          listOfProjects={listOfProjects}
        />
      );
    }
  };

  const getProjectNameTOShow = (project) => {
    setHomePageState("ShowProject");
    setUserSelectedProject(project);
  };

  return (
    <div className="flex">
      <Sidebar
        handleHomeState={handleHomeState}
        listOfProjects={listOfProjects}
        giveProjectName={getProjectNameTOShow}
      />
      {showElementOnScreen()}
    </div>
  );
}

export default App;
