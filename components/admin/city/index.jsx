import React, { useState } from "react";
import { Button, Divider, Drawer, Form, Input, Card } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Admin from "..";
import axios from "axios";

const Country = () => {
  const [open, setOpen] = useState(false);
  const [method, setMethod] = useState("GET");
  const [form] = Form.useForm();

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
    form.resetFields();
  };

  const create = async (values) => {
    try {
      await axios.post("http://localhost:8080/country", values);
    } catch (error) {
      console.log(error);
    }
  };

  const fetch = async () => {
    try {
      const res = await axios.get("http://localhost:8080/country");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const update = async (values) => {
    try {
      await axios.put(`http://localhost:8080/country/${countryId}`, values);
    } catch (error) {
      console.log(error);
    }
  };

  // const edit = (data)=>{
  //   setCountryId(data._id)
  //   SetdrawerTitle({ title: "Edit Product" })
  //   showDrawer()
  //   setMethod("PUT")
  //   form.setFieldValue("name",data.name)
  //   form.setFieldValue("price",data.price)
  //   form.setFieldValue("discount",data.discount)
  //   form.setFieldValue("quantity",data.quantity)
  //   form.setFieldValue("description",data.description)
  // }

  // const removeProduct = async (id)=>{
  //   try {
  //     const res = await axios.delete(`http://localhost:3000/api/product/${id}`);
  //     setMethod("DELETE")
  //     setChange(change+1)
  //   }
  //   catch (error) {
  //     console.log(error);
  //   }
  // }

  const onFinish = async (values) => {
    try {
      if (method === "POST") create(values);
      if (method === "PUT") update(values);
    } catch (error) {
      console.log(error);
    } finally {
      form.resetFields();
      setOpen(false);
    }
  };

  return (
    <Admin>
      <div className="flex justify-around">
        <Button
          className="w-fit h-[42px] text-white text-lg bg-indigo-500 mb-5 rounded-lg cursor-pointer shadow-lg"
          onClick={() => (showDrawer(), setMethod("POST"))}
        >
          Add New State
        </Button>
        <Button className="w-fit h-[42px] text-white text-lg bg-indigo-500 mb-5 rounded-lg cursor-pointer shadow-lg">
          Update Existing State
        </Button>
        <Button className="w-fit h-[42px] text-white text-lg bg-indigo-500 mb-5 rounded-lg cursor-pointer shadow-lg">
          Delete State
        </Button>
      </div>
      <Divider className="bg-slate-500 mt-[0px]" />
      <Drawer
        title={"Country Details"}
        placement="right"
        open={open}
        onClose={onClose}
        className="px-4"
      >
        <Form
          initialValues={{
            remember: true,
          }}
          form={form}
          onFinish={onFinish}
        >
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Enter Country Name",
              },
            ]}
            className="mb-[16px]"
          >
            <Input
              type="text"
              placeholder="Enter Country Name"
              className="h-[40px] placeholder-black"
            />
          </Form.Item>
          <Form.Item
            name="region"
            rules={[
              {
                required: true,
                message: "Enter Region",
              },
            ]}
            className="mb-[16px]"
          >
            <Input
              type="text"
              placeholder="Enter Region"
              className="h-[40px] placeholder-black"
            />
          </Form.Item>
          <Form.Item
            name="capital"
            rules={[
              {
                required: true,
                message: "Enter Capital",
              },
            ]}
            className="mb-[16px]"
          >
            <Input
              type="text"
              placeholder="Enter Capital"
              className="h-[40px] placeholder-black"
            />
          </Form.Item>
          <Form.Item
            name="currency"
            rules={[
              {
                required: true,
                message: "Enter Currency",
              },
            ]}
            className="mb-[16px]"
          >
            <Input
              type="text"
              rules={[
                {
                  required: true,
                  message: "Enter Currency",
                },
              ]}
              placeholder="Enter Currency"
              className="h-[40px] placeholder-black"
            />
          </Form.Item>
          <Form.Item
            name="symbol"
            rules={[
              {
                required: true,
                message: "Enter Symbol",
              },
            ]}
            className="mb-[16px]"
          >
            <Input
              type="text"
              rules={[
                {
                  required: true,
                  message: "Enter Symbol",
                },
              ]}
              placeholder="Enter Symbol"
              className="h-[40px] placeholder-black"
            />
          </Form.Item>
          <Form.Item
            name="best_time_to_visit"
            rules={[
              {
                required: true,
                message: "Enter Best Time to Visit",
              },
            ]}
            className="mb-[16px]"
          >
            <Input
              type="text"
              placeholder="Enter Best Time to Visit Ex- Oct to Feb"
              className="h-[40px] placeholder-black"
            />
          </Form.Item>
          <Form.Item
            name="statea"
            rules={[
              {
                required: true,
                message: "Enter State",
              },
            ]}
            className="mb-[16px]"
          >
            <Input
              type="text"
              placeholder="Enter State"
              className="h-[40px] placeholder-black"
            />
          </Form.Item>
          <Form.Item
            className="mb-[17px]"
            name="description"
            rules={[
              {
                required: true,
                message: "Please Enter Description",
              },
            ]}
          >
            <Input.TextArea
              rows={4}
              className="placeholder-black"
              placeholder="Enter Description"
            />
          </Form.Item>
          <Form.Item className="mb-0">
            <Button
              htmlType="submit"
              className="hover:bg-white px-9 text-white bg-blue-600"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Drawer>
      {/* <div className={`grid grid-cols-3 gap-8 product-box`}>
        {[1].map(() => {
          return (
            <Card
              actions={[
                <EditOutlined
                  key="edit"
                  style={{ fontSize: 20, color: "blue" }}
                />,
                <DeleteOutlined
                  key="delete"
                  style={{ fontSize: 20, color: "red" }}
                />,
              ]}
              className="border-[5px] shadow-lg mb-4"
            >
              <div className="relative">
                <h1 className="text-[20px] font-semibold mb-1 hover:cursor-pointer hover:underline underline-offset-2">
                  Country Name
                </h1>
                <p className="text-[15px] mb-3">Country Description</p>
                <div className="flex justify-between">
                  <h2 className="text-[#E53E3E] text-[20px] font-bold mt-[-5px]">
                    Country Price
                  </h2>
                  <span className="hover:cursor-pointer px-2 py-1 rounded-[5px] bg-rose-600 text-white text-[11px] font-medium">
                    State
                  </span>
                </div>
              </div>
              <p className="text-[#71C057] text-[15px] font-medium mt-1">
                Available
              </p>
            </Card>
          );
        })}
      </div> */}
    </Admin>
  );
};

export default Country;
