const express = require('express');
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./config/mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Import Routes
const projectRoutes = require('./routes/projectRoutes');
const stackRoutes = require('./routes/stackRoutes');
const appDataRoutes = require('./routes/appDataRoutes');

// Use Routes
app.use('/api/projects', projectRoutes);
app.use('/api/stack', stackRoutes);
app.use('/api/appdata', appDataRoutes);

app.get('/', (req, res) => {
  res.send('Portfolio MERN Server is running!');
});

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
