import React, { useEffect, useReducer, useState } from "react";
import { Button, Input, Tabs } from "antd";
import { TaskAction, taskReducer, TASKS_KEY } from "../reducers/taskReducer";

function CreateForm({ dispatch }: { dispatch: React.Dispatch<TaskAction> }) {
  const [newTask, setNewTask] = useState<string>("");

  // const [tasks, dispatch] = useReducer(taskReducer, []);

  const addTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };
 

  return (
    <div className="flex gap-2">
      <Input
        placeholder="Add new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
      />
      <Button type="primary" onClick={addTask}>
        Add Task
      </Button>
    </div>
  );
}

export default CreateForm;
