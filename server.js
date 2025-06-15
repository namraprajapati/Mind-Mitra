const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const replies = [
  "I'm here for you. 🌟",
  "It's okay to feel like this.",
  "Take a deep breath. You're not alone.",
  "You're doing great. Let's take one step at a time.",
  "I'm listening. Go on..."
];

app.post("/chat", (req, res) => {
  const userMessage = req.body.message;
  const reply = replies[Math.floor(Math.random() * replies.length)];
  res.json({ reply });
});

app.post("/mood", (req, res) => {
  const mood = req.body.mood;
  res.json({ message: `Your mood \"${mood}\" has been recorded. 🙏` });
});

app.listen(PORT, () => {
  console.log(`✅ MindMitra backend is running at http://localhost:${PORT}`);
});
