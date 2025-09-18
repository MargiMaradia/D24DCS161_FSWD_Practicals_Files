const express = require('express');
const homeRoutes = require('./routes/Home');

const app = express();
const PORT = 7000; // you can change if needed

// Use routes
app.use('/', homeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
