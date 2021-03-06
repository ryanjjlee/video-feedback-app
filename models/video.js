var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var commentSchema = new Schema ({
  timecode: Number,
  timecodeMinute: Number,
  timecodeSecond: Number,
  user: String,
  content: {
    type: String,
    required: true
  },
  status: {
    type: String,
    default: "Incomplete"
  },
}, {
  timestamps: true
});

var videoSchema = new Schema ({
  creator: {
    type: String,
  },
  projectName: {
    type: String,
    required: true
  },
  docket: {
    type: Number,
    required: true
  },
  version: {
    type: Number,
    required: true
  },
  colourStatus: {
    type: Boolean,
    default: false,
  },
  audioStatus: {
    type: Boolean,
    default: false,
  },
  approved: {
    type: Boolean,
    default: false,
  },
  url: {
    type: String,
    required: true
  },
  vimeoId: {
    type: String,
  },
  comments: [commentSchema]
}, {
  timestamps: true
});

module.exports = mongoose.model('Video', videoSchema);