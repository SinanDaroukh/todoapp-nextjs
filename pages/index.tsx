import axios from "axios";
import { NextPage } from "next";
import TodoCard from "../components/TodoCard";

const Home: NextPage = ({ todos, error }: any) => {
  if (error) {
    return <div>An error occured: {error.message}</div>;
  }
  return (
    <div>
      {todos.map((todo: any) => (
        <TodoCard key={todo.id} obj={todo} />
      ))}
    </div>
  );
};

Home.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get("https://todoapp-nestjs.vercel.app/todos");
    const todos = res.data;
    return { todos };
  } catch (error) {
    return { error };
  }
};

export default Home;
