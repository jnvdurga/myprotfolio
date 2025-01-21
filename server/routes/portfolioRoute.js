const router = require("express").Router();
const { Intro, About, Project, Contact, Experience } = require("../models/UserModel");

// Get all portfolio data
router.get("/my-web-portfolio", async (req, res) => {
  try {
    const introes = await Intro.find();
    const abouts = await About.find();
    const project = await Project.find();
    const contact = await Contact.find();
    const experience = await Experience.find();

    res.status(200).send({
      intro: introes[0],
      about: abouts[0],
      project: project,
      contact: contact[0],
      experience: experience,
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error fetching data", error });
  }
});

// Update Intro
router.post("/update-intro", async (req, res) => {
  try {
    const intro = await Intro.findByIdAndUpdate(req.body._id, req.body, { new: true });
    res.status(200).send({
      data: intro,
      success: true,
      message: "Intro updated successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error updating intro", error });
  }
});

// Update About
router.post("/update-about", async (req, res) => {
  try {
    const about = await About.findByIdAndUpdate(req.body._id, req.body, { new: true });
    res.status(200).send({
      data: about,
      success: true,
      message: "About updated successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error updating about", error });
  }
});

// Add Experience
router.post("/add-experience", async (req, res) => {
  try {
    const experience = new Experience(req.body);
    await experience.save();
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience added successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error adding experience", error });
  }
});

// Update Experience
router.post("/update-experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndUpdate(req.body._id, req.body, { new: true });
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience updated successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error updating experience", error });
  }
});

// Delete Experience
router.post("/delete-experience", async (req, res) => {
  try {
    const experience = await Experience.findByIdAndDelete(req.body._id);
    res.status(200).send({
      data: experience,
      success: true,
      message: "Experience deleted successfully",
    });
  } catch (error) {
    res.status(500).send({ success: false, message: "Error deleting experience", error });
  }
});

// Add Projects
router.post("/add-projects", async (req, res) => {
    try {
      const experience = new Project(req.body);
      await experience.save();
      res.status(200).send({
        data: experience,
        success: true,
        message: "Project added successfully",
      });
    } catch (error) {
      res.status(500).send({ success: false, message: "Error adding Project", error });
    }
  });
  
  // Update Experience
  router.post("/update-projects", async (req, res) => {
    try {
      console.log(req.body)
      const experience = await Project.findByIdAndUpdate(req.body._id, req.body, { new: true });
      res.status(200).send({
        data: experience,
        success: true,
        message: "Project updated successfully",
      });
    } catch (error) {
      res.status(500).send({ success: false, message: "Error updating Project", error });
    }
  });
  
  // Delete Experience
  router.post("/delete-projects", async (req, res) => {
    try {
      const experience = await Project.findByIdAndDelete(req.body._id);
      res.status(200).send({
        data: experience,
        success: true,
        message: "Project deleted successfully",
      });
    } catch (error) {
      res.status(500).send({ success: false, message: "Error deleting Project", error });
    }
  });

  // Update Contact

  router.post("/update-contacts", async (req, res) => {
    try {
      console.log(req.body);
      const contact = await Contact.findByIdAndUpdate(req.body._id, req.body, { new: true });
      if (!contact) {
        return res.status(404).send({
          success: false,
          message: "Contact not found",
        });
      }
      res.status(200).send({
        data: contact,
        success: true,
        message: "Contact updated successfully",
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: "Error updating contact",
        error: error.message,
      });
    }
  });

module.exports = router;
