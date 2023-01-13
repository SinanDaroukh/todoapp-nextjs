import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTrash, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { deleteTodo, updateDoneStatus } from "../slices/todosSlice";

var classNames = require("classnames");

export default function TodoCard({ obj }: any) {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col gap-5 rounded-lg w-full bg-slate-800 bg-opacity-40 my-5 py-4 text-white">
      <p
        className={classNames(
          { "line-through": obj.done },
          "font-bold text-center text-xl uppercase"
        )}
      >
        {obj.title}
      </p>
      {obj.description && (
        <div>
          <hr className="w-12 h-1 mx-auto border-0 rounded  bg-zinc-500 opacity-40"></hr>
          <p
            className={classNames(
              { "line-through": obj.done },
              "italic text-center mt-4"
            )}
          >
            {obj.description}
          </p>
        </div>
      )}
      <div className="flex pt-2 justify-around">
        {obj.done ? (
          <button
            className="w-1/3 bg-violet-700 rounded-full py-1 hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => dispatch(updateDoneStatus(obj.id))}
          >
            <FontAwesomeIcon icon={faXmark} />
          </button>
        ) : (
          <button
            className="w-1/3 bg-violet-700 rounded-full py-1 hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out"
            onClick={() => dispatch(updateDoneStatus(obj.id))}
          >
            <FontAwesomeIcon icon={faCheck} />
          </button>
        )}
        <button
          className="w-1/3 bg-red-700 rounded-full py-1 hover:-translate-y-1 hover:scale-110 transition duration-300 ease-in-out"
          onClick={() => dispatch(deleteTodo(obj.id))}
        >
          <FontAwesomeIcon icon={faTrash} />
        </button>
      </div>
    </div>
  );
}
