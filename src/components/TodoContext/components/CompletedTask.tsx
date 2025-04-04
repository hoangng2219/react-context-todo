import React from "react";
import TaskList from "./TaskList";
import { Input } from "antd";
import { ITask, useTodoContext } from "../../../context/TodoContext";

const CompletedTask = ({ activeTab = "" }: { activeTab?: string }) => {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

  const { tasks } = useTodoContext();

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const completedTasks = filteredTasks.filter((task) => task.completed);

  return (
    <>
      <Input
        placeholder="Search tasks"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ marginBottom: 10 }}
      />
      <div>
        <TaskList activeTab={activeTab} tasks={completedTasks} showDelete />
      </div>
    </>
  );
};

export default CompletedTask;
