const port = 3310;

const express = require("express");
const app = express();

// Gestionnaire de requête pour la route "/"
app.get("/", (req, res) => {
  res.send("Hello World!");
});

// Gestionnaire de requête pour la route "/about"
app.get("/about", (req, res) => {
  res.send("About World!");
});

// Gestionnaire de requête pour toutes les autres routes
app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
