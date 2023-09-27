import React from "react";
import { Row, Input, Form, Button } from "antd";
const FormEdit = ({ form, onSubmit, handleCancel }) => {
  const { Item } = Form;
  return (
    <Row justify="center">
      <Form layout="vertical" form={form} name="formulario" onFinish={onSubmit}>
        <h2 className="text-2xl my-4 text-white"> AGREGA TUS TAREAS </h2>
        <Item name="name">
          <Input placeholder="Nombre de la tarea" />
        </Item>
        <Row justify="center" align="middle">
          <Item style={{ marginTop: "1rem" }}>
            <Button onClick={handleCancel} danger>
              {" "}
              Cancelar{" "}
            </Button>
          </Item>
          <Item style={{ marginTop: "1rem", marginLeft: "1rem" }}>
            <Button
              htmlType="submit"
              style={{
                color: "white",
                background: "#10B48C",
              }}
              type="primary"
            >
              {" "}
              Aceptar{" "}
            </Button>
          </Item>
        </Row>
      </Form>
    </Row>
  );
};

export default FormEdit;
