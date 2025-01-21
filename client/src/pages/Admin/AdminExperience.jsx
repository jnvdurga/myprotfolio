import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, message, Modal } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminExperience() {
  const { experience } = useSelector((state) => state.root.portfolioData);
  const dispatch = useDispatch();
  const [showAddEditModel, setShowAddEditModel] = useState(false);
  const [selectedItemEdit, setSelectedItemEdit] = useState(null);
  const [form] = Form.useForm(); // Use Ant Design form instance

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response;
      if (selectedItemEdit) {
        response = await axios.post("/api/portfolio/update-experience", {
          ...values,
          _id: selectedItemEdit._id,
        });
      } else {
        response = await axios.post("/api/portfolio//add-experience", values);
      }
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setShowAddEditModel(false);
        setSelectedItemEdit(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      console.error(error);
      message.error("Something went wrong!");
    }
  };

  const onDelete = async (item) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-experience", {
        _id: item._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      console.error(error);
      message.error("Something went wrong!");
    }
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => {
            setSelectedItemEdit(null);
            setShowAddEditModel(true);
            form.resetFields(); // Reset form fields
          }}
        >
          Add Experience
        </button>
      </div>
      <div className="grid grid-cols-4 gap-5">
        {experience.map((item, index) => (
          <div className="shadow border p-5 border-gray-400" key={index}>
            <h1 className="text-primary text-xl font-bold">{item.period}</h1>
            <hr />
            <h1>Company: {item.company}</h1>
            <h1>Role: {item.title}</h1>
            <h1>{item.description}</h1>

            <div className="flex justify-end gap-5 mt-5">
              <button
                className="bg-red-500 text-white px-5 py-2"
                onClick={() => onDelete(item)}
              >
                Delete
              </button>
              <button
                className="bg-primary text-white px-5 py-2"
                onClick={() => {
                  setSelectedItemEdit(item);
                  setShowAddEditModel(true);
                  form.setFieldsValue(item); // Pre-fill form with selected item values
                }}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>

      <Modal
        open={showAddEditModel}
        title={selectedItemEdit ? "Edit Experience" : "Add Experience"}
        footer={null}
        onCancel={() => {
          setShowAddEditModel(false);
          form.resetFields(); // Reset form fields when modal closes
        }}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish} // Handle form submission
          initialValues={{
            period: selectedItemEdit?.period || "",
            company: selectedItemEdit?.company || "",
            title: selectedItemEdit?.title || "",
            description: selectedItemEdit?.description || "",
          }}
        >
          <Form.Item
            name="period"
            label="Period"
            rules={[{ required: true, message: "Please enter the period" }]}
          >
            <input placeholder="Period" className="w-full h-10" />
          </Form.Item>
          <Form.Item
            name="company"
            label="Company"
            rules={[{ required: true, message: "Please enter the company name" }]}
          >
            <input placeholder="Company" className="w-full h-10" />
          </Form.Item>
          <Form.Item
            name="title"
            label="Title"
            rules={[{ required: true, message: "Please enter the title" }]}
          >
            <input placeholder="Title" className="w-full h-10" />
          </Form.Item>
          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter the description" }]}
          >
            <input placeholder="Description" className="w-full h-10" />
          </Form.Item>
          <div className="flex justify-end gap-5">
            <button
              className="border-primary text-primary px-5 py-2"
              onClick={() => {
                setShowAddEditModel(false);
                form.resetFields(); // Reset form on cancel
              }}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-5 py-2" type="submit">
              {selectedItemEdit ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminExperience;
