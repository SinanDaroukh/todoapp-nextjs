import React from "react";
import { useDispatch } from "react-redux";
import { createTodo } from "../slices/todosSlice";

export default function CreateForm({ obj }: any) {
  const dispatch = useDispatch();
  const [name, setName] = React.useState();
  const [desc, setDesc] = React.useState();

  function handleSubmit(e: any) {
    e.preventDefault();
    dispatch(createTodo({ name, desc }));
  }
  function handleChange(e: any) {
    if (e.target.id == "name") {
      setName(e.target.value);
    }
    if (e.target.id == "desc") {
      setDesc(e.target.value);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col w-full text-white bg-slate-800 bg-opacity-40 p-4 rounded-xl gap-4"
    >
      <h1 className="font-black text-2xl">Add a new task</h1>
      <div className="flex flex-col ">
        <label className="font-semibold text-violet-400"> Title</label>
        <input
          className=" bg-slate-800 caret-violet-700 focus:outline-double hover:outline-double outline-2 outline-violet-700 rounded-xl p-2 resize-none"
          id="name"
          type="text"
          onChange={handleChange}
          placeholder="e.g. master solidity"
        />
      </div>
      <div className="flex flex-col  ">
        <label className="font-semibold text-violet-400">Description</label>
        <textarea
          className="bg-slate-800 caret-violet-700 focus:outline-double hover:outline-double outline-2 outline-violet-700 rounded-xl p-2 resize-none"
          id="desc"
          onChange={handleChange}
          placeholder="e.g. create more side-projects based on the web 3"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="w-1/3 rounded-xl px-4 py-2 bg-gradient-to-l from-pink-400 to-blue-600 font-extrabold hover:from-blue-600 hover:to-pink-400 hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out "
        >
          Submit
        </button>
      </div>
    </form>
  );
}
