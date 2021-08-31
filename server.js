const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use("/api/user", require("./routes/api/user"));

app.get("/", (req, res) => {
  res.send("Spotify profile.");
});

app.listen(PORT, () => {
  console.log("App listening on: " + PORT);
});
