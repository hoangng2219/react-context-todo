import { Button, Input } from "antd";
import React, { useState } from "react";
import { useTodoContext } from "../../../context/TodoContext";

const FormInput = () => {
  const [newTask, setNewTask] = useState<string>("");

  const { addTask } = useTodoContext();

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button type="primary" onClick={() => addTask(newTask)}>
        Add Task
      </Button>
    </div>
  );
};

export default FormInput;
