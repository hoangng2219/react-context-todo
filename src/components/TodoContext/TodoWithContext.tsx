import React, { useState } from "react";
import { TodoProvider, useTodoContext } from "../../context/TodoContext";
import FormInput from "./components/FormInput";
import { Tabs, TabsProps } from "antd";
import TaskList from "./components/TaskList";
import CompletedTask from "./components/CompletedTask";

const TodoWithContext = () => {
  const [activeTab, setActiveTab] = useState<string>("all");

  const items: TabsProps["items"] = [
    {
      key: "all",
      label: "All",
      children: <TaskList activeTab={activeTab} />,
    },
    {
      key: "complete",
      label: "Complete",
      children: <CompletedTask activeTab={activeTab} />,
    },
  ];

  const onChange = (key: string) => {
    setActiveTab(key);
  };

  return (
    <TodoProvider>
      <div className="min-h-[60dvh] bg-blue-300 mt-24">
        <h2 className="text-2xl font-black text-black text-center">
          TodoWithContext
        </h2>
        <FormInput />
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;
      </div>
    </TodoProvider>
  );
};

export default TodoWithContext;
