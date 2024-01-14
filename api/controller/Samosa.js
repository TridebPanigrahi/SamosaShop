const Samosa = require("../models/Samosa");

const samosaList = async (req, res) => {
  try {
    const samosas = await Samosa.find();
    res.status(200).json(samosas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const postSamosa = async (req, res) => {
  try {
    const { name, color, size, type, status } = req.body;
    const samosa = new Samosa({
      name,
      color,
      size,
      type,
      status
    });
    const newSamosa = await samosa.save();

    res.status(201).json(newSamosa);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  samosaList,
  postSamosa,
};
