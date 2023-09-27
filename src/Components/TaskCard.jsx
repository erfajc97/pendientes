import { Button, Modal, Form, Checkbox } from "antd";
import { useTasks } from "../Context/TaskContext";
import { useState } from "react";
import FormEdit from "./FormEdit";

const TaskCard = ({ task }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { deleteTask, updateTask } = useTasks();
  const [form] = Form.useForm();
  const [done, setDone] = useState(task?.done);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const onChange = (e) => {
    const isChecked = e.target.checked;
    setDone(isChecked);
    updateTask(task?.id, { done: isChecked });
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const handleDelete = () => {
    deleteTask(task?.id);
  };
  const onSubmit = async (data) => {
    updateTask(task?.id, data);
    setIsModalOpen(false);
    form.resetFields();
  };
  return (
    <div className="border-2 border-sky-800 bg-[#282c34c4] shadow-slate-50 shadow-sm p-4 rounded-md  ">
      <div className="flex gap-x-2 w-full justify-center items-center">
        <h1 className="text-white text-center">{task?.name.toUpperCase()}</h1>
        <Checkbox checked={done} onChange={onChange}></Checkbox>
      </div>
      <div className="flex gap-x-2 justify-center items-center mt-2 ">
        <Button
          className="shadow-slate-50 shadow-sm"
          style={{ borderColor: "turquoise" }}
          onClick={showModal}
          type="primary"
        >
          {" "}
          EDIT{" "}
        </Button>
        <Button
          className="shadow-slate-50 shadow-sm"
          onClick={handleDelete}
          danger
        >
          {" "}
          DELETE{" "}
        </Button>
      </div>
      <Modal
        onCancel={handleCancel}
        title="Editar Tarea"
        open={isModalOpen}
        centered
        footer={null}
      >
        <FormEdit form={form} onSubmit={onSubmit} handleCancel={handleCancel} />
      </Modal>
    </div>
  );
};

export default TaskCard;
