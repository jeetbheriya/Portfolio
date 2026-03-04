const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  year: { type: Number, required: true },
  description: { type: String, required: true },
  role: { type: String },
  techStack: { type: [String], required: true },
  thumbnail: { type: String, required: true },
  longThumbnail: { type: String, required: true },
  images: { type: [String], required: true },
  slug: { type: String, required: true, unique: true },
  liveUrl: { type: String },
  sourceCode: { type: String },
});

module.exports = mongoose.model('Project', ProjectSchema);
