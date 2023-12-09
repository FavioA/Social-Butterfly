const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

mongoose.connect('mongodb://localhost/socialnetwork', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Import models here

// Import routes here

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
