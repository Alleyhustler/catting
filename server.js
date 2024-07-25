const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' directory

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/textdb', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the schema and model
const textSchema = new mongoose.Schema({ text: String });
const Text = mongoose.model('Text', textSchema);

// Route to handle text submissions
app.post('/submit', async (req, res) => {
    const newText = new Text({ text: req.body.text });
    await newText.save();
    res.json({ success: true });
});

// Route to get all submitted messages
app.get('/messages', async (req, res) => {
    const messages = await Text.find();
    res.json({ messages });
});

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
