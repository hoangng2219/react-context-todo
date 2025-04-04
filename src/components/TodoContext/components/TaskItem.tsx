import React from "react";
import { ITask, useTodoContext } from "../../../context/TodoContext";
import { Button, Checkbox, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

interface TaskListProps {
  tasks: ITask[];
  showDelete?: boolean;
  activeTab?: string;
}
const TaskItem: React.FC<TaskListProps> = ({
  tasks,
  showDelete = false,
  activeTab,
}) => {
  const { toggleTask, deleteTask } = useTodoContext();

  return (
    <List
      dataSource={tasks}
      renderItem={(task) => (
        <List.Item>
          {activeTab !== "complete" && (
            <Checkbox
              checked={task.completed}
              onChange={() => toggleTask(task.id)}
            >
              <p className={task.completed ? "line-through" : ""}>
                {task.text}
              </p>
            </Checkbox>
          )}
          {activeTab === "complete" && <p>{task.text}</p>}
          {showDelete && (
            <Button type="link" onClick={() => deleteTask(task.id)}>
              <DeleteOutlined />
            </Button>
          )}
        </List.Item>
      )}
    />
  );
};

export default TaskItem;
