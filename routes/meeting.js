const express = require("express");
const router = express.Router();

const {
  getAllMeetings,
  getMeetingById,
  createMeeting,
  updateMeeting,
  deleteMeeting,
  getMeetingOfUser,
  getMeetingsOfTheWeek,
} = require("../controllers/meetingController");

const { validateJwt, isAdmin } = require("../middlewares/processJwt");

router.get("/", getAllMeetings);

router.get('/weekly', getMeetingsOfTheWeek);

router.get("/meeting/:id", getMeetingById);

router.get("/meeting/user/:id", validateJwt, getMeetingOfUser);

router.post("/meeting", validateJwt, createMeeting);

router.put("/meeting/:id", validateJwt, isAdmin, updateMeeting);

router.delete("/meeting/:id", validateJwt, isAdmin, deleteMeeting);

module.exports = router;
