import { useState } from "react";
import { Button, Row, Input, Form } from "antd";
import { supabase } from "../../supabase/client";

const Login = () => {
  const [loading, setLoading] = useState(false);

  const { Item } = Form;
  const [form] = Form.useForm();

  const onSubmit = async (data) => {
    setLoading(true);

    try {
      await supabase.auth.signInWithOtp({
        email: data.email,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      form.resetFields();
    }
  };
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Form
        disabled={loading}
        layout="vertical"
        form={form}
        name="formulario"
        onFinish={onSubmit}
      >
        <h2 className="text-2xl my-4 text-white text-center">
          {" "}
          INGRESA TU EMAIL{" "}
        </h2>
        <Item name="email">
          <Input placeholder="youremail@gmail.com" />
        </Item>

        <Row justify="center">
          <Item style={{ marginTop: "2rem" }}>
            <Button
              loading={loading}
              style={{
                backgroundColor: "#1E90FF",
                padding: "0 4rem",
                color: "white",
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

export default Login;
