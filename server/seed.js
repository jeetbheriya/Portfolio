const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./config/mongoose');

const Project = require('./models/Project');
const Experience = require('./models/Experience');
const Stack = require('./models/Stack');
const AppData = require('./models/AppData');

// Import data from client/src/lib/data.ts
const { GENERAL_INFO, SOCIAL_LINKS, MY_STACK, PROJECTS, MY_EXPERIENCE } = require('./data/initialData');

const seedDB = async () => {
  await connectDB();

  try {
    // Clear existing data
    await Project.deleteMany({});
    await Experience.deleteMany({});
    await Stack.deleteMany({});
    await AppData.deleteMany({});

    console.log('Old data cleared!');

    // Seed Projects
    await Project.insertMany(PROJECTS);
    console.log('Projects seeded!');

    // Seed Experiences
    await Experience.insertMany(MY_EXPERIENCE);
    console.log('Experiences seeded!');

    // Seed Stack (assuming it's a single document)
    await Stack.create(MY_STACK);
    console.log('Stack seeded!');

    // Seed AppData (assuming it's a single document)
    await AppData.create({
      email: GENERAL_INFO.email,
      emailSubject: GENERAL_INFO.emailSubject,
      emailBody: GENERAL_INFO.emailBody,
      oldPortfolio: GENERAL_INFO.oldPortfolio,
      upworkProfile: GENERAL_INFO.upworkProfile,
      socialLinks: SOCIAL_LINKS,
    });
    console.log('App Data seeded!');

    console.log('Database seeded successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding database:', err);
    mongoose.connection.close();
    process.exit(1);
  }
};

seedDB();
