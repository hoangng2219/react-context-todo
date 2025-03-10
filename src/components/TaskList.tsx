import { Button, Checkbox, List } from "antd";
import { Task, TaskAction } from "../reducers/taskReducer";
import { DeleteOutlined } from "@ant-design/icons";

interface TaskListProps {
  tasks: Task[];
  dispatch: React.Dispatch<TaskAction>;
  showDelete?: boolean;
  activeTab?: string;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  dispatch,
  showDelete = false,
  activeTab,
}) => {
  return (
    <List
      dataSource={tasks}
      renderItem={(task) => (
        <List.Item>
          {activeTab !== "complete" && (
            <Checkbox
              checked={task.completed}
              onChange={() =>
                dispatch({ type: "TOGGLE_TASK", payload: task.id })
              }
            >
              <p className={task.completed ? "line-through" : ""}>
                {task.text}
              </p>
            </Checkbox>
          )}
          {activeTab === "complete" && <p>{task.text}</p>}
          {showDelete && (
            <Button
              type="link"
              onClick={() =>
                dispatch({ type: "DELETE_TASK", payload: task.id })
              }
            >
              <DeleteOutlined />
            </Button>
          )}
        </List.Item>
      )}
    />
  );
};

export default TaskList;
