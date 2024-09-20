const express = require('express');
const path = require('path');
const customerRoutes = require('./customer/routes.js');
const cors = require('cors');
const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.use('/customer', customerRoutes);

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'frontend/build')));

// Serve the React app for any unknown routes
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});

app.listen(port, () => console.log(`App Listening on port: ${port}`));
