import React from 'react'
import { Button, Input, Tabs } from "antd";

function CreateForm() {
  return (
    <div className="flex gap-2">
      <Input
        placeholder="Add new task"
        // value={newTask}
        // onChange={(e) => setNewTask(e.target.value)}
      />
      <Button type="primary" 
      // onClick={addTask}
      >
        Add Task
      </Button>
    </div>
  )
}

export default CreateForm