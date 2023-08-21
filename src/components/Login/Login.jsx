import React, { useContext } from 'react';
import { Button, Checkbox, Form, Input, notification } from 'antd';
import { UserContext } from '../../context/UserContext/UserState';
import { useNavigate } from 'react-router-dom';
import "./Login.scss"

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate()
    const onFinish = (values) => {
        //console.log('Success:', values);
        login(values);
        notification.success({
          message: 'Successfully logged',
          description:
            'Welcome to our e-commerce',
        });
        setTimeout(() => { //setTimeout para que le de tiempo a procesar la información
          navigate("/profile") 
        }, 3000); 
      };
      
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };

    return (
      <div className='form-container'>
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
        //TODO: incluir una validación que muestre que el email sea único como está en backend, sino habrá un error 400 en consola
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




export default Login