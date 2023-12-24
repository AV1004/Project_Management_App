import React, { useEffect, useState } from "react";

export default function Tasks(props) {
  const [taskChange, setTaskChange] = useState("");
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem(props.project)) || [];
  });
  const [userWantedDeleteTask, setuserWantedDeleteTask] = useState("");

  const taskChangeHandler = (e) => {
    e.preventDefault();
    setTaskChange(e.target.value);
  };

  const addTasks = (e) => {
    e.preventDefault();
    setTasks((prevTasks) => {
      return [...prevTasks, taskChange];
    });
    setTaskChange("");
  };

  useEffect(() => {
    localStorage.setItem(props.project, JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    const tasks = JSON.parse(localStorage.getItem(props.project));
    if (tasks) {
      setTasks(tasks);
    }
  }, [props.project]);

  const userWantToClearTask = (task) => {
    setuserWantedDeleteTask(task);
  };

  useEffect(() => {
    let updatedTaskList = [];
    tasks.map((task) => {
      if (task !== userWantedDeleteTask) {
        updatedTaskList.push(task);
      }
    });
    localStorage.setItem(props.project, JSON.stringify(updatedTaskList));
    setTasks(updatedTaskList);
  }, [userWantedDeleteTask]);

  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-600">Tasks</h1>
      <form onSubmit={addTasks}>
        <input
          type="text"
          onChange={taskChangeHandler}
          value={taskChange}
          required
          className=" p-2 h-10  w-72 rounded-sm focus:outline-none focus:border-b-4 focus:border-b-stone-600 border-b-4 border-b-stone-300  bg-stone-400 bg-opacity-25"
        />
        <button className="mx-5" type="submit">
          Add Task
        </button>
      </form>
      <div className="bg-stone-700 my-5 bg-opacity-10 px-5 py-2 list-none rounded-lg">
        {tasks.length === 0 ? (
          <p className="my-5">This project does not have any tasks yet.</p>
        ) : (
          tasks.map((task) => {
            return (
              <li key={task} className="my-2">
                {task}
                <button
                  onClick={() => {
                    userWantToClearTask(task);
                  }}
                  className="float-end text-lg text-stone-700"
                >
                  Clear
                </button>
              </li>
            );
          })
        )}
      </div>
    </div>
  );
}
