import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Form, message, Modal } from "antd";
import { HideLoading, ReloadData, ShowLoading } from "../../redux/rootSlice";
import axios from "axios";

function AdminProjects() {
  const { project } = useSelector((state) => state.root.portfolioData);
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [form] = Form.useForm();

  const handleSave = async (values) => {
    try {
      dispatch(ShowLoading());

      // Ensure technologies is always an array
      const formattedValues = {
        ...values,
        technologes: values.technologes
          ? values.technologes.split(",").map((tech) => tech.trim())
          : [],
      };

      let response;
      if (editingProject) {
        response = await axios.post("/api/portfolio/update-projects", {
          ...formattedValues,
          _id: editingProject._id,
        });
      } else {
        response = await axios.post("/api/portfolio/add-projects", formattedValues);
      }

      dispatch(HideLoading());
      if (response.data.success) {
        message.success(response.data.message);
        setIsModalVisible(false);
        setEditingProject(null);
        dispatch(ReloadData(true));
      } else {
        message.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      console.error(error);
      message.error("An error occurred while saving the project.");
    }
  };

  const handleDelete = async (project) => {
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/portfolio/delete-projects", {
        _id: project._id,
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
      message.error("An error occurred while deleting the project.");
    }
  };

  const openModal = (project = null) => {
    setEditingProject(project);
    setIsModalVisible(true);

    if (project) {
      form.setFieldsValue({
        ...project,
        technologes: Array.isArray(project.technologes)
          ? project.technologes.join(", ")
          : "",
      });
    } else {
      form.resetFields();
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
    setEditingProject(null);
    form.resetFields();
  };

  return (
    <div>
      <div className="flex justify-end mb-4">
        <button
          className="bg-primary px-5 py-2 text-white"
          onClick={() => openModal()}
        >
          Add Project
        </button>
      </div>

      <div className="grid grid-cols-3 gap-5">
        {project?.length > 0 ? (
          project.map((item, index) => (
            <div key={index} className="shadow border p-5 border-gray-400">
              <img src={item.image} alt={item.title} className="h-60 w-80 mb-4" />
              <h1 className="font-bold">Title: {item.titel}</h1>
              <p>{item.description}</p>
              <p>
                <span className="font-bold">Technologies:</span>{" "}
                {Array.isArray(item.technologes)
                  ? item.technologes.join(", ")
                  : "None"}
              </p>
              {item.link && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500"
                >
                  Visit Project
                </a>
              )}
              <div className="flex justify-end gap-3 mt-5">
                <button
                  className="bg-red-500 text-white px-4 py-2"
                  onClick={() => handleDelete(item)}
                >
                  Delete
                </button>
                <button
                  className="bg-primary text-white px-4 py-2"
                  onClick={() => openModal(item)}
                >
                  Edit
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No projects found.</p>
        )}
      </div>

      <Modal
        title={editingProject ? "Edit Project" : "Add Project"}
        open={isModalVisible}
        footer={null}
        onCancel={closeModal}
      >
        <Form
          form={form}
          layout="vertical"
          onFinish={handleSave}
          initialValues={{
            titel: editingProject?.titel || "",
            link: editingProject?.link || "",
            description: editingProject?.description || "",
            image: editingProject?.image || "",
            technologes: Array.isArray(editingProject?.technologes)
              ? editingProject.technologes.join(", ")
              : "",
          }}
        >
          <Form.Item
            name="titel"
            label="Title"
            rules={[{ required: true, message: "Please enter the title." }]}
          >
            <input placeholder="Title" className="w-full h-10 px-2 border" />
          </Form.Item>

          <Form.Item
            name="link"
            label="Link"
            rules={[{ required: true, message: "Please enter the project link." }]}
          >
            <input placeholder="Link" className="w-full h-10 px-2 border" />
          </Form.Item>

          <Form.Item
            name="description"
            label="Description"
            rules={[{ required: true, message: "Please enter the description." }]}
          >
            <textarea placeholder="Description" className="w-full px-2 h-24 border" />
          </Form.Item>

          <Form.Item
            name="image"
            label="Image URL"
            rules={[{ required: true, message: "Please enter the image URL." }]}
          >
            <input placeholder="Image URL" className="w-full h-10 px-2 border" />
          </Form.Item>

          <Form.Item
            name="technologes"
            label="Technologies"
            rules={[{ required: true, message: "Please enter the technologies used." }]}
          >
            <textarea
              placeholder="Technologies (comma-separated)"
              className="w-full px-2 h-24 border"
            />
          </Form.Item>

          <div className="flex justify-end gap-3">
            <button
              type="button"
              className="border-primary text-primary px-4 py-2"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button className="bg-primary text-white px-4 py-2" type="submit">
              {editingProject ? "Update" : "Add"}
            </button>
          </div>
        </Form>
      </Modal>
    </div>
  );
}

export default AdminProjects;
