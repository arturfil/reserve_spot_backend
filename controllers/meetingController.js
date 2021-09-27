const Meeting = require('../models/Meeting')

exports.getAllMeetings = async (req, res) => {
  const meetings = await Meeting.find()
    .populate("topic", "name")
    .populate("attendees", "name");

  try {
    if (meetings.length === 0) {
      return res.status(400).json({message: "Didn't find any meetings"})
    }
    return res.status(200).json(meetings);
  } catch (error) {
    return res.status(500).json({message: "Couldn't get the meetings"})
  }
}

exports.getMeetingById = async (req, res) => {
  const { _id } = req.params;
  const meeting = await Meeting.findById(_id);
  try {
    return res.status(200).json(meeting);
  } catch (error) {
    return res.status(500).json({message: "Please try again later"})
  }
}

exports.createMeeting = async (req, res) => {
  const meetingToCreate = await Meeting.create(req.body);
  try {
    return res.status(201).json(meetingToCreate)
  } catch (error) {
    return res.status(500).json({message: "Couldn't create the meeting"});
  }
}

exports.updateMeeting = async (req, res) => {
  const { _id } = req.params;
  const meetingToUpdate = await Meeting.findByIdAndUpdate(_id, req.body, {new: true});
  try {
    return res.status(202).json(meetingToUpdate);
  } catch (error) {
    return res.status(500).json({message: "Couldn't update the meeting"});
  }
}

exports.deleteMeeting = async (req, res) => {
  const { _id } = req.params;
  const meetingToDelete = await Meeting.findByIdAndDelete(_id);
  try {
    return res.status(203).json({message: "Succesfully Deleted"})
  } catch (error) {
    return res.status(500).json({message: "Couldn't delete meeting"})
  }
}