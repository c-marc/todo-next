"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function NewTodo() {
  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const task = formData.get("task");
    try {
      const { data } = await axios.post("http://localhost:3000/api/todo", {
        task,
      });
      event.target.reset();
      router.refresh();
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <form onSubmit={(event) => handleSubmit(event)}>
      <label htmlFor="task">New task</label>
      <input type="text" id="task" name="task" placeholder="task..." />
      <button type="submit">New</button>
    </form>
  );
}
