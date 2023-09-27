import { Button, Col, Form, Row } from "antd";
import { useEffect } from "react";
import { supabase } from "../supabase/client";
import { useNavigate } from "react-router-dom";
import TaskList from "../Components/TaskList";
import FormComp from "../Components/FormComp";
import { useTasks } from "../Context/TaskContext";
import todolistImage from "../Img/todolist.png";
const Home = () => {
  const { createTask } = useTasks();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      if (!session) {
        navigate("/login");
      }
    });
  }, [navigate]);

  const handleLogOOut = async () => {
    supabase.auth.signOut();
  };

  const onSubmit = async (data) => {
    createTask(data);
    form.resetFields();
  };

  return (
    <div className="lg:flex lg:gap-x-5  ">
      <div className=" flex flex-col items-center lg:justify-center border-b-4 border-2 border-[#595e67] lg:min-h-screen p-5 text-white lg:w-[20%]">
        <img className="w-50 h-50 animate-jump" src={todolistImage} alt="" />
        <h1 className="text-6xl pt-5 text-amber-400 "> Bienvenido </h1>
        <span className="mt-5 text-center">
          {" "}
          En esta aplicacion podras llevar el orden de tus tareas pendientes{" "}
        </span>

        <Button
          className="mt-5 border-2 border-blue-300 shadow-slate-50 shadow-sm "
          danger
          onClick={handleLogOOut}
        >
          Log Out
        </Button>
      </div>

      <Col align="middle" className=" text-white lg:flex-1">
        <div className="flex flex-col">
          <FormComp form={form} onSubmit={onSubmit} />
          <TaskList />
        </div>
      </Col>
    </div>
  );
};

export default Home;
