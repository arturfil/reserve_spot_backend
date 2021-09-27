const express = require("express");
const router = express.Router();

const {
  getAllMeetings,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
} = require("../controllers/meetingController");

router.get("/", getAllMeetings);

router.get("/meeting/:id", getMeetingById);

router.post("/meeting", createMeeting);

router.put("/meeting/:id", updateMeeting);

router.delete("/meeting/:id", deleteMeeting);

module.exports = router;
