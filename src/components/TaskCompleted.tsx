import React from 'react'
import { Input } from "antd";
// import TaskList from "./TaskList";

function TaskCompleted() {
  const [searchTerm, setSearchTerm] = React.useState<string>("");

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
        {/* <TaskList
          activeTab={activeTab}
          tasks={completedTasks}
          dispatch={dispatch}
          showDelete
        /> */}
      </div>
    </>
  )
}

export default TaskCompleted