import { NextResponse } from "next/server";
import connectRouteToDb from "@/middlewares/connectRoutetoDb";
import Todo from "@/models/todo";

export const PUT = connectRouteToDb(async (request, { params }) => {
  const { id } = params;
  const { isDone } = await request.json();
  try {
    await Todo.findByIdAndUpdate(id, { isDone });
    return NextResponse.json({ message: "updated" }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "updating failed" }, { status: 500 });
  }
});

export const DELETE = connectRouteToDb(async (request, { params }) => {
  const { id } = params;
  try {
    console.info("Trying to delete");
    await Todo.findByIdAndDelete(id);
    return NextResponse.json({ message: "deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "deleting failed" }, { status: 500 });
  }
});
