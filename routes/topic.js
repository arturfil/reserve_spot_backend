const express = require("express");
const router = express.Router();

const {
  getAllTopics,
  createTopic,
  deleteTopic,
} = require("../controllers/topicController");

router.get("/", getAllTopics);

router.post("/topic", createTopic);

router.delete("/topic/:id", deleteTopic);

module.exports = router;
