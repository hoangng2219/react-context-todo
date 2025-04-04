import { Button } from "antd";
import { ITask, useTodoContext } from "../../../context/TodoContext";
import TaskItem from "./TaskItem";

interface ITaskListProps {
  activeTab?: string;
  showDelete?: boolean;
  tasks?: ITask[];
}

const TaskList: React.FC<ITaskListProps> = ({
  activeTab,
  showDelete,
  tasks,
}) => {
  const { deleteAllTasks, tasks: taskContext } = useTodoContext();
  const tasksDefault = tasks ?? taskContext;
  return (
    <>
      <div>
        <TaskItem
          showDelete={showDelete}
          activeTab={activeTab}
          tasks={tasksDefault}
        />
      </div>
      <div className="flex justify-end">
        {activeTab === "all" && (
          <Button danger onClick={deleteAllTasks}>
            Delete All
          </Button>
        )}
      </div>
    </>
  );
};

export default TaskList;
