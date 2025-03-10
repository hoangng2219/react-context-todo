export const TASKS_KEY = "tasks";

export interface Task {
  id: number;
  text: string;
  completed: boolean;
}

export type TaskAction =
  | { type: "ADD_TASK"; payload: string }
  | { type: "TOGGLE_TASK"; payload: number }
  | { type: "DELETE_TASK"; payload: number }
  | { type: "DELETE_ALL" }
  | { type: "LOAD_TASKS"; payload: Task[] };

export const taskReducer = (state: Task[], action: TaskAction): Task[] => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, { id: Date.now(), text: action.payload, completed: false }];
    case "TOGGLE_TASK":
      return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
    case "DELETE_TASK":
      return state.filter(task => task.id !== action.payload);
    case "DELETE_ALL":
      return [];
    case "LOAD_TASKS":
      return action.payload;
    default:
      return state;
  }
};
