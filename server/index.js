const express = require("express"),
  cors = require("cors"),
  app = express(),
  port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Hello world!",
  });
});

app.post("/login", (req, res) => {
  console.log(req.body);
  res.send({
    message: "logging in!",
  });
});

app.post("/projects", (req, res) => {
  console.log(req.body);
  res.send({
    message: "create project!",
  });
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
