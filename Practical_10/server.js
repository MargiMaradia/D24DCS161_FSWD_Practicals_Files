const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3000;

// Route to view logs
app.get("/", (req, res) => {
  const filePath = path.join("logs" ,"error.txt");

  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading file:", err.message);

      if (err.code === "ENOENT") {
        // File not found
        return res.status(404).send("<h2>Log file not found.</h2>");
      } else {
        // Other errors (permissions, etc.)
        return res.status(500).send("<h2>Unable to read log file.</h2>");
      }
    }

    // Display file content in browser
    res.send(`
      <html>
      <head>
        <title>Error Logs</title>
        <style>
          body { font-family: monospace; background: #111; color: #0f0; padding: 20px; }
          pre { white-space: pre-wrap; word-wrap: break-word; }
        </style>
      </head>
      <body>
        <h1>Error Logs</h1>
        <pre>${data}</pre>
      </body>
      </html>
    `);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
