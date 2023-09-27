import { useEffect } from "react";
import { useTasks } from "../Context/TaskContext";
import TaskCard from "./TaskCard";

const TaskList = () => {
  const { tasks, getTasks } = useTasks();
  useEffect(() => {
    getTasks();
  }, [tasks]);

  return (
    <div className=" animate-fade-up border-2 border-slate-700 shadow-2xl flex-1 grid sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 p-4 h-full mr-4 gap-2 ">
      {tasks?.data?.map((task) => (
        <TaskCard key={task?.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
