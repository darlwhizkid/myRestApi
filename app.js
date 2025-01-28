// app.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

let items = [];

// CREATE
app.post("/api/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).send(item);
});

// READ
app.get("/api/items", (req, res) => {
  res.send(items);
});

// UPDATE
app.put("/api/items/:id", (req, res) => {
  const { id } = req.params;
  const updatedItem = req.body;

  items[id] = updatedItem;
  res.send(updatedItem);
});

// DELETE
app.delete("/api/items/:id", (req, res) => {
  const { id } = req.params;
  items.splice(id, 1);
  res.status(204).send();
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
