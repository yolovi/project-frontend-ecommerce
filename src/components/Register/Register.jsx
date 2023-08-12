import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';


// body backend register/create
// {
//     "name_user": "Alison",
//     "last_name": "Smith",
//     "email": "alisonSmith@example.com",
//     "password": "qwertys"

// }



const Register = () => {
  const { register } = useContext(UserContext);
    const onFinish = (values) => {
        console.log('Success:', values);
        register(values)
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
    return (
      <div>
        <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    
    <Form.Item
      label="Name"
      name="name_user"
      rules={[
        {
          required: true,
          message: 'Please input your name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Last name"
      name="last_name"
      rules={[
        {
          required: true,
          message: 'Please input your last name!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    
    <Form.Item
      label="Email"
      name="email"
      rules={[
        {
          required: true,
          message: 'Please input your email!',
        },
        {
          type: "email", //validación tipo email
          message: 'Please input a correct email!',
        },
        //TODO: poner validación email único, para que se le muestre a usuario, en el backend está esta validación
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
    </div>
    )
  }




export default Register