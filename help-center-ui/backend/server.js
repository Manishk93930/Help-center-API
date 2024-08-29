const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const Card = require('./models/Card');

const app = express();
const cors = require('cors');
app.use(cors());

const port = process.env.PORT || 3001;

app.use(bodyParser.json());

app.get('/ping', (req, res) => {
  res.send('Server is running');
});

mongoose.connect('mongodb://localhost:27017/help_center', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


// Create a new card
app.post('/cards', async (req, res) => {
  try {
    console.log('Received data:', req.body); // Log received data
    const card = new Card(req.body);
    await card.save();
    res.status(201).send(card);
  } catch (error) {
    console.error('Error saving card:', error); // Log errors
    res.status(400).send(error);
  }
});

// Get all cards
app.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get a specific card by title
app.get('/cards/:title', async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).send({ error: 'Card not found true' });
    }
    res.status(200).send(card);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get('/cards/search', async (req, res) => {
  try {
    const searchQuery = req.query.q || '';
    const card = await Card.findOne({ title: searchQuery });
    if (!card) {
      return res.status(404).send({ error: 'Card not found1' });
    }
    res.status(200).send(card);
  } catch (error) {
    res.status(500).send(error);
  }
});

