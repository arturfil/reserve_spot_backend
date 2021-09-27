const {model, Schema } = require('mongoose');

const MeetingSchema = Schema(
  {
    topic: {
      type: Schema.Types.ObjectId,
      required: true,
      ref: 'Topic'
    },
    startTime: {
      type: String,
      required: true
    },
    attendees: {
      type: [Schema.Types.ObjectId],
      ref: 'User'
    },
    date: {
      type: Date,
      required: true
    },
    duration: {
      type: Number,
      required: true
    }
  }
);

module.exports = model('Meeting', MeetingSchema);