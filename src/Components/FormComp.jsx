import { Button, Row, Input, Form } from "antd";

const FormComp = ({ onSubmit, form }) => {
  const { Item } = Form;
  return (
    <Row justify="center">
      <Form layout="vertical" form={form} name="formulario" onFinish={onSubmit}>
        <div className="shadow-slate-50 shadow-sm px-2">
          <h2 className="text-4xl  my-6 text-amber-400"> AGREGA TUS TAREAS </h2>
        </div>
        <Item name="task">
          <Input placeholder="Agrega una Tarea" />
        </Item>
        <Row justify="center">
          <Item style={{ marginTop: "1rem" }}>
            <Button
              className="shadow-slate-50 shadow-sm"
              type="primary"
              style={{
                padding: "0 4rem",
                color: "white",
                borderColor: "#10B48C",
              }}
              htmlType="submit"
            >
              {" "}
              Guardar{" "}
            </Button>
          </Item>
        </Row>
      </Form>
    </Row>
  );
};

export default FormComp;
