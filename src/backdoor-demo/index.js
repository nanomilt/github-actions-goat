// Import the express library
const express = require("express");
const csrf = require('csurf'); // Import CSRF middleware

// Create an instance of an express application
const app = express();

// Configure CSRF middleware
const csrfProtection = csrf({ cookie: true });
app.use(csrfProtection);

// Define the port the server will run on
const PORT = 3000;

// Define a route for the root path of the application
app.get("/", csrfProtection, (req, res) => {
  res.send("Hello, World!");
});

// Start the server and listen on the defined port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});