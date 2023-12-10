const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/user-routes');
const thoughtRoutes = require('./routes/thought-routes');

const app = express();
const PORT = process.env.PORT || 3002;

// Define the connection URI (replace with your actual MongoDB URI)
const MONGODB_URI = 'mongodb://localhost:27017/Social-Butterfly';

mongoose.connect(MONGODB_URI, {
  serverSelectionTimeoutMS: 5000, // optional
});

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/thoughts', thoughtRoutes);

// Define a route handler for the root path
app.get('/', (req, res) => {
  res.send('Welcome to Social Butterfly!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
