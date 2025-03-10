import { Button, Input, Tabs } from "antd";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
// import TaskList from "./components/TaskList";
import { Task, taskReducer, TASKS_KEY } from "./reducers/taskReducer";
import type { TabsProps } from "antd";
import TaskCompleted from "./components/TaskCompleted";
import TaskAll from "./components/TaskAll";
import CreateForm from "./components/CreateForm";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [newTask, setNewTask] = useState<string>("");
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredTasks = tasks.filter((task) =>
    task.text.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const completedTasks = filteredTasks.filter((task) => task.completed);

  useEffect(() => {
    const storedTasks: Task[] = JSON.parse(
      localStorage.getItem(TASKS_KEY) ?? "[]"
    );
    dispatch({ type: "LOAD_TASKS", payload: storedTasks });
    console.log("1:", storedTasks);
  }, []);

  useEffect(() => {
    if (tasks.length === 0) {
      localStorage.removeItem(TASKS_KEY);
      return;
    }
    localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
    console.log("2:", tasks);
  }, [tasks]);
  console.log("3:", tasks);

  const onChange = (key: string) => {
    setActiveTab(key)
  };
  const addTask = () => {
    if (newTask.trim()) {
      dispatch({ type: "ADD_TASK", payload: newTask });
      setNewTask("");
    }
  };

  const deleteAll = () => dispatch({ type: "DELETE_ALL" });

  const items: TabsProps["items"] = [
    {
      key: "all",
      label: "All",
      children: <TaskAll />
    },
    {
      key: "complete",
      label: "Complete",
      children: <TaskCompleted />,
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-black mb-8">Todo Tracker</h1>

      <CreateForm />

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;

      {/* <Tabs
        defaultActiveKey={activeTab}
        onChange={(activeTab) => setActiveTab(activeTab)}
      >
        <Tabs.TabPane tab="All" key="all">
          <TaskList tasks={filteredTasks} dispatch={dispatch} />
        </Tabs.TabPane>
        <Tabs.TabPane tab="Complete" key="complete">
          <Input
            placeholder="Search tasks"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ marginBottom: 10 }}
          />
          <TaskList
            activeTab={activeTab}
            tasks={completedTasks}
            dispatch={dispatch}
            showDelete
          />
        </Tabs.TabPane>
      </Tabs> */}
      {/* {activeTab === "all" && (
        <div className="flex justify-end">
          <Button danger onClick={deleteAll}>
            Delete All Tasks
          </Button>
        </div>
      )} */}
    </>
  );
}

export default App;
