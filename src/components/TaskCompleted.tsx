import React from 'react'
import { Input } from "antd";
import TaskList from "./TaskList";
import { Task, TaskAction } from '../reducers/taskReducer';

interface TaskListProps {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
  activeTab?: string
}

function TaskCompleted( { tasks, dispatch,activeTab }: TaskListProps) {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

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
        this is task list
        <TaskList
          activeTab={activeTab}
          tasks={completedTasks}
          dispatch={dispatch}
          showDelete
        />
      </div>
    </>
  )
}

export default TaskCompleted