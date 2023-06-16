import { NextResponse } from "next/server";
import connectRouteToDb from "@/middlewares/connectRoutetoDb";
import Todo from "@/models/todo";

export const POST = connectRouteToDb(async (request) => {
  const { task } = await request.json();

  try {
    const newTodo = await Todo.create({ task, isDone: false });
    return NextResponse.json({ todo: newTodo }, { status: 201 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "failed to create" }, { status: 500 });
  }
});
