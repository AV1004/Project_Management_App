import React from "react";

export default function Tasks() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-stone-600">Tasks</h1>
      <div>
        <input
          type="text"
          className="bg-gray-400 w-72 rounded-sm focus:outline-8 bg-opacity-25 focus:outline-blue-500"
        />
        <button className="mx-5">Add Task</button>
      </div>
      <p className="my-5">This project does not have any tasks yet.</p>
    </div>
  );
}
