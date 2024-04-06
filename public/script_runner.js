const express = require("express");
const { exec } = require("child_process");

const app = express();
app.use(express.json());

app.post("/url-check", (req, res) => {
  const { url } = req.body;

  exec(`python malicious_url_detector.py '${url}'`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return res.status(500).send("Server error");
    }

    console.log(`stdout: ${stdout}`);
    res.send(stdout);
  });
});

app.listen(3000, () => {
  console.log("Node.js server listening on port 3000");
});
