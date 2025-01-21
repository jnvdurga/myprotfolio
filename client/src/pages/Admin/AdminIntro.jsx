import React from 'react';
import { Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminIntro() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const intro = portfolioData ? portfolioData.intro : {};

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-intro", {
        ...values,
        _id: intro._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(error.response ? error.response.data.message : error.message);
    }
  };

  return (
    <div className="h-screen overflow-y-auto p-4 bg-gray-100">
      <Form layout="vertical" className="space-y-4" onFinish={onFinish} initialValues={intro}>
        <Form.Item name="welcomeText" label="Welcome Text">
          <Input placeholder="Welcome Text" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="fistName" label="First Name">
          <Input placeholder="First Name" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="middelName" label="Middle Name">
          <Input placeholder="Middle Name" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="lastName" label="Last Name">
          <Input placeholder="Last Name" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="caption" label="Caption">
          <Input placeholder="Caption" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="discipation" label="Description">
          <textarea
            placeholder="Description"
            className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md h-32 p-2 resize-none"
          ></textarea>
        </Form.Item>
        <div className="flex justify-end w-full">
          <button type="submit" className="px-5 py-2 bg-primary text-white rounded-md hover:bg-primary-dark">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminIntro;
