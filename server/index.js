const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '..')));

// Receive reservation / order requests
app.post('/api/reserve', (req, res) => {
  const { name, contact, datetime, notes } = req.body || {};
  console.log('Reserve request:', { name, contact, datetime, notes });
  if(!name || !contact) return res.status(400).json({ error: 'Missing fields' });
  setTimeout(()=> res.json({ status: 'ok', message: 'Request received' }), 800);
});

// Contact endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body || {};
  console.log('Contact message:', { name, email, message });
  if(!name || !email || !message) return res.status(400).json({ error: 'Missing fields' });
  setTimeout(()=> res.json({ status: 'ok', message: 'Message received' }), 600);
});

// Fallback to index for any other routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.listen(PORT, ()=> console.log(`Server listening on port ${PORT}`));
