"use client";

import axios from "axios";
import { useRouter } from "next/navigation";

export default function TodoItem({ todo }) {
  const router = useRouter();
  const handleToggle = async () => {
    await axios.put(`http://localhost:3000/api/todo/${todo._id}`, {
      isDone: !todo.isDone,
    });
    router.refresh();
  };

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3000/api/todo/${todo._id}`);
    router.refresh();
  };

  return (
    <article className="flex gap-4">
      <p>{todo.task}</p>
      <input type="checkbox" checked={todo.isDone} onChange={handleToggle} />
      <button onClick={handleDelete}> Delete</button>
    </article>
  );
}
