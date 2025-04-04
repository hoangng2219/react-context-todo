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
  // const [tasks, dispatch] = useReducer(taskReducer, []);

  // useEffect(() => {
  //   if (tasks.length === 0) {
  //     localStorage.removeItem(TASKS_KEY);
  //     return;
  //   }
  //   localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  // }, [tasks]);

  // const filteredTasks = tasks.filter((task) =>
  //   task.text.toLowerCase().includes(searchTerm.toLowerCase())
  // );
  // useEffect(() => {
  //   const storedTasks: Task[] = JSON.parse(
  //     localStorage.getItem(TASKS_KEY) ?? "[]"
  //   );
  //   dispatch({ type: "LOAD_TASKS", payload: storedTasks });
  //   // console.log("1:", storedTasks);
  // }, []);
  const deleteAll = () => dispatch({ type: "DELETE_ALL" });
  return (
    <>
      <div>
        this is task list
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
