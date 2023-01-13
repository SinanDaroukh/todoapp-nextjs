import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  description?: string;
  done: boolean;
}

export interface Todos {
  data: Todo[];
}

const initialState: Todos = {
  data: [],
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    setTodos: (state, { payload }) => {
      state.data = payload;
    },
    createTodo: (state, { payload }) => {
      console.log("Length", state.data.length);
      if (state.data.length == 0) {
        var id = 1;
      } else {
        var id = state.data.reduce((acc, val) => Math.max(acc, val.id), 0) + 1;
        console.log("Id : ", id);
      }

      state.data.push({
        id: id,
        title: payload.name,
        description: payload.desc,
        done: false,
      });
      api.post("/todos", {
        id: "1",
        title: payload.name,
        description: payload.desc,
        done: false,
      });
    },
    updateDoneStatus: (state, action: PayloadAction<String>) => {
      const todoToUpdate = state.data.find(
        (todo) => todo.id === +action.payload
      );
      if (todoToUpdate) {
        api.patch("/todos/" + action.payload, {
          done: !todoToUpdate.done,
        });
        todoToUpdate.done = !todoToUpdate.done;

        state.data = state.data.map((t) =>
          t.id !== +action.payload ? t : todoToUpdate
        );
      }
    },
    deleteTodo: (state, action: PayloadAction<String>) => {
      api.delete("/todos/" + action.payload);
      state.data = [...state.data.filter((t) => t.id !== +action.payload)];
    },
  },
});

// Action creators are generated for each case reducer function
export const { createTodo, setTodos, deleteTodo, updateDoneStatus } =
  todosSlice.actions;

export default todosSlice.reducer;

const api = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});
// fetch all items
export function getTodos() {
  return async (dispatch: any) => {
    api.get("/todos").then((response) => {
      dispatch(setTodos(response.data));
    });
  };
}
