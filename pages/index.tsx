import axios from "axios";
import { NextPage } from "next";
import type { RootState } from "../store";
import { useSelector, useDispatch } from "react-redux";
import TodoCard from "../components/TodoCard";
import { useEffect } from "react";
import { getTodos } from "../slices/todosSlice";
import CreateForm from "../components/CreateForm";

const Home: NextPage = ({ todos, error }: any) => {
  const todoses = useSelector((state: RootState) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      <CreateForm />
      {todoses.data.map((todo: any) => (
        <TodoCard key={todo.id} obj={todo} />
      ))}
    </div>
  );
};

export default Home;
