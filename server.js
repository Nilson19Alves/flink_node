const express = require("express");
const UserController = require('./src/controllers/UsersController');
const ProdutoController = require('./src/controllers/ProdutoController');
const app = express();

// parse requests of content-type: application/json
app.use(express.json());

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// rotas para usuario
app.get("/lista", UserController.lista );
app.post("/login", UserController.login );

// rotas para produtos
app.post("/produtos", ProdutoController.lista);


// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});