import React from 'react';
import { Form, Input, message } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { ShowLoading, HideLoading } from '../../redux/rootSlice';
import axios from 'axios';

function AdminContact() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const contact = portfolioData ? portfolioData.contact : {};
  

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-contacts", {
        ...values,
        _id: contact._id,
        
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
      <Form layout="vertical" className="space-y-4" onFinish={onFinish} initialValues={contact}>
       
        <Form.Item name="name" label="name">
          <Input placeholder="Name" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="age" label="age">
          <Input placeholder="Age" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="gender" label="gender">
          <Input placeholder="Gender" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="email" label="email">
          <Input placeholder="email" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="mobile" label="mobile">
          <Input placeholder="mobile" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="country" label="country">
          <Input placeholder="country" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
        </Form.Item>
        <Form.Item name="lottieUrl" label="url">
          <Input placeholder="Contact-image url" className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md" />
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

export default AdminContact;
