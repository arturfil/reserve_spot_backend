const Meeting = require("../models/Meeting");

exports.getAllMeetings = async (req, res) => {
  const meetings = await Meeting.find()
    .populate("topic", "name")
    .populate("user", "name");

  try {
    if (meetings.length === 0) {
      return res.status(400).json({ message: "Didn't find any meetings" });
    }
    return res.status(200).json(meetings);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't get the meetings" });
  }
};

exports.getMeetingsOfTheWeek = async (req, res) => {
  const today = new Date().toISOString().split('T')[0]
  let aWeekAgo = new Date()
  aWeekAgo = aWeekAgo.setDate(aWeekAgo.getDate() - 7);
  aWeekAgo = new Date(aWeekAgo).toISOString().split('T')[0]
  const meetings = await Meeting.find({date: {$gte: aWeekAgo, $lte: today}})
    .populate("topic", "name")
    .populate("user", "name")
  try {
    if (meetings.length === 0) {
      return res.status(400).json({message: "Coulnd't find any meetings"});
    }
    return res.status(200).json(meetings);
  } catch (error) {
    return res.status(500).json({message: "Server Error"})
  }
}

exports.getMeetingOfUser = async (req, res) => {
  const {id} = req.params;
  const userMeetings = await Meeting.find({user: id});
  try {
    if (userMeetings.length === 0) {
      return res.status(401).json({message: "User donesn't have meetings"});
    }
    return res.status(200).json(userMeetings); 
  } catch (error) {
    return res.status(500).json({message: "Sever Error"});
  }
}

exports.getMeetingById = async (req, res) => {
  const { id } = req.params;
  const meeting = await Meeting.findById(id).populate("user").populate("topic");
  try {
    return res.status(200).json(meeting);
  } catch (error) {
    return res.status(500).json({ message: "Please try again later" });
  }
};

exports.createMeeting = async (req, res) => {
  const meetingToCreate = await Meeting.create(req.body);
  try {
    return res.status(201).json(meetingToCreate);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't create the meeting" });
  }
};

exports.updateMeeting = async (req, res) => {
  const { id } = req.params;
  const meetingToUpdate = await Meeting.findByIdAndUpdate(id, req.body, {
    new: true,
  });
  try {
    return res.status(202).json(meetingToUpdate);
  } catch (error) {
    return res.status(500).json({ message: "Couldn't update the meeting" });
  }
};

exports.deleteMeeting = async (req, res) => {
  const { id } = req.params;
  const meetingToDelete = await Meeting.findByIdAndDelete(id);
  try {
    return res.status(203).json({ message: "Succesfully Deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Couldn't delete meeting" });
  }
};
