"use client";
import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Checkbox } from "./ui/checkbox";

type stateType = {
  id: number;
  text: string;
  completed: boolean;
};

export function ToDo() {
  const [inputData, setInputData] = useState<string>("");
  const [toDos, setTodos] = useState<stateType[]>([]);
  const [currentFilter, setCurrentFilter] = useState("all");

  const addToDo = () => {
    if (inputData.trim() === "") return;
    setTodos([
      ...toDos,
      { id: Math.random(), text: inputData, completed: false },
    ]);
    setInputData("");
  };

  const deleteTodo = (id: number) => {
    setTodos(toDos.filter((todo) => todo.id !== id));
  };

  const toggleComplete = (id: number) => {
    setTodos(
      toDos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  let todosToShow: stateType[] = [];

  if (currentFilter === "all") {
    todosToShow = toDos;
  } else if (currentFilter === "active") {
    todosToShow = toDos.filter((todo) => todo.completed === false);
  } else if (currentFilter === "completed") {
    todosToShow = toDos.filter((todo) => todo.completed === true);
  }
  return (
    <Card className="w-[400px] mt-10 ml-10">
      <CardHeader>
        <CardTitle>To-Do List</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid w-full items-center gap-4">
          <div className="flex gap-2">
            <Input
              id="name"
              placeholder="Add a new task..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />

            <Button onClick={addToDo}>Add</Button>
          </div>

          <div className="flex gap-2">
            <Button
              variant={currentFilter === "all" ? "default" : "outline"}
              onClick={() => setCurrentFilter("all")}
            >
              All
            </Button>
            <Button
              onClick={() => setCurrentFilter("active")}
              variant={currentFilter === "active" ? "default" : "outline"}
            >
              Active
            </Button>
            <Button
              onClick={() => setCurrentFilter("completed")}
              variant={currentFilter === "completed" ? "default" : "outline"}
            >
              Completed
            </Button>
          </div>
          {todosToShow.map((todo, index) => {
            return (
              <div
                className=" bg-gray-50 rounded-md py-[20px] flex flex-row justify-between"
                key={index}
              >
                <div className=" flex gap-2 items-center pl-5">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleComplete(todo.id)}
                  />

                  <p className={todo.completed ? " line-through" : ""}>
                    {" "}
                    {todo.text}
                  </p>
                </div>

                <div className=" flex gap-2 pr-5">
                  {/* <EditToDo inputData={inputData} /> */}

                  <Button
                    variant="outline"
                    className=" hover:bg-red-400 hover:text-white"
                    onClick={() => deleteTodo(todo.id)}
                  >
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
      <CardFooter className="flex flex-col">
        <div className=" border-[1px] w-full border-gray-100"></div>
        <div className=" flex justify-between gap-x-12">
          <p className=" mt-3 text-gray-400 text-sm">
            {" "}
            {toDos.filter((todo) => todo.completed).length} of {toDos.length}{" "}
            tasks completed
          </p>
          <Button
            className=" mt-[2px] text-sm text-red-500 hover:bg-red-400"
            variant="ghost"
            onClick={() => setTodos(toDos.filter((todo) => !todo.completed))}
          >
            Clear Completed
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
}
