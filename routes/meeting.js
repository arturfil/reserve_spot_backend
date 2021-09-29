const express = require("express");
const router = express.Router();

const {
  getAllMeetings,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/meetingController");

const { validateJwt } = require("../middlewares/processJwt");

router.get("/", validateJwt, getAllMeetings);

router.get("/meeting/:id", getMeetingById);

router.post("/meeting", createMeeting);

router.put("/meeting/:id", updateMeeting);

router.delete("/meeting/:id", deleteMeeting);

module.exports = router;
