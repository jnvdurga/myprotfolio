import React from "react";
import { Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ShowLoading, HideLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminAbout() {
  const { loading, portfolioData } = useSelector((state) => state.root);
  const dispatch = useDispatch();
  const about = portfolioData ? portfolioData.about : {};

  

  const onFinish = async (values) => {
    try {
      // Check if skills is a string and split it into an array
    
        const temskills = values.skills.split(",");
        values.skills = temskills;
      
      
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/update-about", {
        ...values,
        _id: about._id,
      });
      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      message.error(
        error.response ? error.response.data.message : error.message
      );
    }
  };

  return (
    <div className="h-screen overflow-y-auto p-4 bg-gray-100">
      <Form
        layout="vertical"
        className="space-y-4"
        onFinish={onFinish}
        initialValues={{
          ...about,
          skills: about.skills ? about.skills.join(",") : "",
        }}
      >
        <Form.Item name="lottieUrl" label="Lotti Url">
          <Input
            placeholder="Lotti url"
            className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md"
          />
        </Form.Item>

        <Form.Item name="discription1" label="Description 1">
          <textarea
            placeholder="discription-1"
            className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md h-32 p-2 resize-none"
          ></textarea>
        </Form.Item>
        <Form.Item name="discription2" label="Description 2">
          <textarea
            placeholder="discription-2"
            className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md h-32 p-2 resize-none"
          ></textarea>
        </Form.Item>
        <Form.Item name="skills" label="Skills">
          <textarea
            placeholder="skills"
            className="w-full border-gray-300 focus:border-primary focus:ring-primary rounded-md h-32 p-2 resize-none"
          ></textarea>
        </Form.Item>
        <div className="flex justify-end w-full">
          <button
            type="submit"
            className="px-5 py-2 bg-primary text-white rounded-md hover:bg-primary-dark"
          >
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default AdminAbout;
