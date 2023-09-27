import { createContext, useContext, useState } from "react";
import { supabase } from "../supabase/client";
export const TaskContext = createContext();

export const useTasks = () => {
  const context = useContext(TaskContext);
  return context;
};

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const [loading, setLoading] = useState(false);
  const getTasks = async () => {
    const response = await supabase.from("task").select();
    setTasks(response);
  };
  const createTask = async (data) => {
    setLoading(true);
    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      const response = await supabase.from("task").insert({
        name: data.task,
        userId: user.id,
      });

      setTasks([...tasks, ...response.data]);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTask = async (id) => {
    await supabase.from("task").delete().match({ id });
  };
  const updateTask = async (id, data) => {
    await supabase.from("task").update(data).match({ id });
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        getTasks,
        setLoading,
        loading,
        createTask,
        deleteTask,
        updateTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
