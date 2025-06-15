// script.js
// This script handles the frontend logic for the anonymous chat and mood check features.
const API_URL = "http://localhost:5000";

// Anonymous Chat
const chatForm = document.getElementById("chatForm");
const chatBox = document.getElementById("chatBox");

if (chatForm) {
  chatForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const msg = document.getElementById("message").value;
    chatBox.innerHTML += `<div><strong>You:</strong> ${msg}</div>`;
    document.getElementById("message").value = "";

    const res = await fetch(`${API_URL}/chat`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: msg })
    });

    const data = await res.json();
    chatBox.innerHTML += `<div><strong>Counselor:</strong> ${data.reply}</div>`;
  });
}

// Mood Check
const moodForm = document.getElementById("moodForm");
if (moodForm) {
  moodForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const mood = document.getElementById("mood").value;

    const res = await fetch(`${API_URL}/mood`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mood })
    });

    const data = await res.json();
    document.getElementById("moodMessage").innerText = data.message;
  });
}
