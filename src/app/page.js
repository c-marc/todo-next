import NewTodo from "@/components/new-todo";
import TodoItem from "@/components/todo-item";
import mongoose from "mongoose";
import Todo from "@/models/todo";

export async function fetchTodos() {
  try {
    if (!mongoose.connections[0].readyState) {
      await mongoose.connect(process.env.DATABASE_URI);
    }
    const data = await Todo.find();
    return data;
  } catch (error) {
    console.log(error.message);
    throw new Error("Couldn't fetch todos");
  }
}

export default async function Home() {
  const todos = await fetchTodos();

  return (
    <main className="">
      <h1>Todo List</h1>
      <NewTodo />
      {todos.map((todo) => {
        return <TodoItem key={todo._id} todo={todo} />;
      })}
    </main>
  );
}
