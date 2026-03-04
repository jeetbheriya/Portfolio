const mongoose = require('mongoose');

const SocialLinkSchema = new mongoose.Schema({
  name: { type: String, required: true },
  url: { type: String, required: true },
});

const AppDataSchema = new mongoose.Schema({
  email: { type: String, required: true },
  emailSubject: { type: String, required: true },
  emailBody: { type: String, required: true },
  oldPortfolio: { type: String, required: true },
  upworkProfile: { type: String, required: true },
  socialLinks: [SocialLinkSchema],
});

module.exports = mongoose.model('AppData', AppDataSchema);
