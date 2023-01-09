import React from "react";
import { Button, Checkbox, Form, Input } from "antd";

import { useDispatch } from "react-redux";
import { createProductAction } from "../../../redux/user/actions/product.action";

const CreateProductPage = () => {
  const dispatch = useDispatch();
  const [createForm] = Form.useForm();
  const handleCreateProduct = (values) => {
    console.log(values);
    dispatch(
      createProductAction({
        values,
        callback: {
          resetFieldsCreateForm: () => createForm.resetFields(),
        },
      })
    );
  };
  return (
    <div style={{ padding: 20 }}>
      <Form
        name="createForm"
        form={createForm}
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 6,
        }}
        onFinish={(values) => handleCreateProduct(values)}
        autoComplete="off"
      >
        <Form.Item
          label="Tên"
          name="name"
          form={createForm}
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Tên",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Loại"
          name="category"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Loại",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Thương hiệu"
          name="brand"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Thương hiệu",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Năm sản xuất"
          name="model"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Năm sản xuất",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số khung"
          name="frameNumber"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Số khung!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Số máy"
          name="machineNumber"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Số máy!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Biển số"
          name="licensePlates"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Biển số!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Tình trạng"
          name="status"
          rules={[
            {
              required: true,
              message: "Bạn chưa nhập Tình trạng!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 10,
          }}
        >
          <Button type="primary" htmlType="submit">
            Thêm sản phẩm
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateProductPage;
