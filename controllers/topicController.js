const Topic = require('../models/Topic')

const getAllTopics = async (req, res) => {
  const topics = await Topic.find();
  try {
    return res.status(200).json(topics);
  } catch (error) {
    return res.status(500).json({message: "Couldn't find topics"})
  }
}

const createTopic = async (req, res) => {
  const topicToCreate = await Topic.create(req.body);
  try {
    return res.status(201).json(topicToCreate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't create the topic"});
  }
}

const deleteTopic = async (req, res) => {
  const { id } = req.params
  const topicToDelete = await Topic.findByIdAndDelete(id);
  try {
    return res.status(203).json({message: "Deleted Successfuly"})
  } catch (error) {
    return res.status(500).json({message: "Couldn't Delete Topic"})
  }
}

module.exports = {
  getAllTopics,
  createTopic,
  deleteTopic
}