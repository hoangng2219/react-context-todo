import { Button } from "antd";
import TaskList from "./TaskList";
import { useEffect, useReducer } from "react";
import {
  Task,
  TaskAction,
  taskReducer,
  TASKS_KEY,
} from "../reducers/taskReducer";

interface TaskListProps {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
}
function TaskAll({ tasks, dispatch }: TaskListProps) {
  
  const deleteAll = () => dispatch({ type: "DELETE_ALL" });
  return (
    <>
      <div>
        <TaskList tasks={tasks} dispatch={dispatch} />
      </div>
      <div className="flex justify-end">
        <Button danger onClick={deleteAll}>
          Delete All Tasks
        </Button>
      </div>
    </>
  );
}

export default TaskAll;
