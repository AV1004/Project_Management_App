import React, { useState } from "react";

export default function AddProjectForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDescription, setEnteredDescription] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const filedHandler = (event, filed) => {
    if (filed === "Title") {
      setEnteredTitle(event.target.value);
    } else if (filed === "Description") {
      setEnteredDescription(event.target.value);
    } else {
      setEnteredDate(event.target.value);
    }
  };

  const handleUserData = (e) => {
    e.preventDefault();
    const data = {
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    };

    props.giveUserData(data);

    setEnteredTitle("");
    setEnteredDescription("");
    setEnteredDate("");
  };

  return (
    <div className="flex items-center justify-center w-screen flex-col">
      <div className="w-[55rem] text-xl pr-32 flex flex-col">
        <form onSubmit={handleUserData} className="w-full flex flex-col">
          <div className=" w-full">
            <button
              type="submit"
              className="float-end bg-black text-white p-3 rounded-lg w-28 text-xl"
            >
              Save
            </button>
            <button
              onClick={() => {
                props.handleHomeState("NoProjects");
              }}
              className="float-end text-black p-3 rounded-lg w-28 text-xl"
            >
              Cancel
            </button>
          </div>
          <p className="font-bold my-2 text-stone-600">TITLE</p>
          <input
            className="w-full mb-5 focus:outline-none focus:border-b-4 focus:border-b-stone-600 border-b-4 border-b-stone-300  bg-stone-400 bg-opacity-25 h-10"
            type="text"
            name="title"
            id="title"
            onChange={() => {
              filedHandler(event, "Title");
            }}
            required
            value={enteredTitle}
          />
          <p className="font-bold my-2 text-stone-600">DESCRIPTIION</p>
          <textarea
            className="w-full mb-5 focus:outline-none focus:border-b-4 focus:border-b-stone-600 border-b-4 border-b-stone-300  bg-stone-400 bg-opacity-25 "
            name="description"
            id="description"
            cols="30"
            rows="5"
            onChange={() => {
              filedHandler(event, "Description");
            }}
            required
            value={enteredDescription}
          ></textarea>
          <p className="font-bold my-2 text-stone-600">DUE DATE</p>
          <input
            className="w-full mb-5 focus:outline-none focus:border-b-4 focus:border-b-stone-600 border-b-4 border-b-stone-300  bg-stone-400 bg-opacity-25 h-10"
            type="date"
            name="due_date"
            id="dueDate"
            onChange={filedHandler}
            required
            value={enteredDate}
          />
        </form>
      </div>
    </div>
  );
}
