import { Button } from "antd";

function TaskAll() {
  return (
    <>
      <div>
        this is task list
        {/* <TaskList tasks={filteredTasks} dispatch={dispatch} /> */}
        
      </div>
      <div className="flex justify-end">
        <Button danger 
        // onClick={deleteAll}
        >
          Delete All Tasks
        </Button>
      </div>
    </>
  )
}

export default TaskAll