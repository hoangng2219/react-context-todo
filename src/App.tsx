import { Tabs } from "antd";
import { useEffect, useReducer, useState } from "react";
import "./App.css";
// import TaskList from "./components/TaskList";
import type { TabsProps } from "antd";
import CreateForm from "./components/CreateForm";
import TaskAll from "./components/TaskAll";
import TaskCompleted from "./components/TaskCompleted";
import { Task, taskReducer, TASKS_KEY } from "./reducers/taskReducer";
import TodoWithContext from "./components/TodoContext/TodoWithContext";

function App() {
  const [tasks, dispatch] = useReducer(taskReducer, []);
  const [activeTab, setActiveTab] = useState<string>("all");


  useEffect(() => {
     const storedTasks: Task[] = JSON.parse(
       localStorage.getItem(TASKS_KEY) ?? "[]"
     );
     dispatch({ type: "LOAD_TASKS", payload: storedTasks });
   }, []);

  

  const onChange = (key: string) => {
    setActiveTab(key)
  };




  const items: TabsProps["items"] = [
    {
      key: "all",
      label: "All",
      children: <TaskAll tasks={tasks} dispatch={dispatch} />
    },
    {
      key: "complete",
      label: "Complete",
      children: <TaskCompleted activeTab={activeTab} tasks={tasks} dispatch={dispatch} />,
    },
  ];

  return (
    <>
      <h1 className="text-3xl font-black mb-8">Todo Tracker</h1>

      <CreateForm  dispatch={dispatch}/>

      <Tabs defaultActiveKey="1" items={items} onChange={onChange} />;


      <TodoWithContext />

   
    </>
  );
}

export default App;
