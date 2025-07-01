const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const axios = require('axios');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from Node.js API' });
});

app.get('/api/predict', async (req, res) => {
  const response = await axios.get('http://localhost:6000/ml/predict');
  res.json(response.data);
});

app.listen(PORT, () => console.log(Server running on http://localhost:${PORT}'));